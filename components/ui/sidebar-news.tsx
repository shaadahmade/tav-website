"use client";

import * as React from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { CALENDLY_URL } from "../../constants";

export interface NewsArticle {
  href: string;
  title: string;
  summary: string;
  image: string;
}

const OFFSET_FACTOR = 4;
const SCALE_FACTOR = 0.03;
const OPACITY_FACTOR = 0.1;

export function News({ articles, className }: { articles: NewsArticle[], className?: string }) {
  const [dismissedNews, setDismissedNews] = React.useState<string[]>([]);
  const cards = articles.filter(({ href }) => !dismissedNews.includes(href));
  const cardCount = cards.length;
  const [showCompleted, setShowCompleted] = React.useState(cardCount > 0);

  React.useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | undefined = undefined;
    if (cardCount === 0)
      timeout = setTimeout(() => setShowCompleted(false), 2700);
    return () => clearTimeout(timeout);
  }, [cardCount]);

  return cards.length || showCompleted ? (
    <div
      className={cn("group overflow-hidden px-3 pb-3 pt-8", className)}
      data-active={cardCount !== 0}
    >
      <div className="relative size-full">
        {[...cards].reverse().map(({ href, title, summary, image }, idx) => (
          <div
            key={href}
            className={cn(
              "absolute left-0 top-0 size-full scale-[var(--scale)] transition-[opacity,transform] duration-200",
              cardCount - idx > 3
                ? [
                    "opacity-0 sm:group-hover:translate-y-[var(--y)] sm:group-hover:opacity-[var(--opacity)]",
                    "sm:group-has-[*[data-dragging=true]]:translate-y-[var(--y)] sm:group-has-[*[data-dragging=true]]:opacity-[var(--opacity)]",
                  ]
                : "translate-y-[var(--y)] opacity-[var(--opacity)]"
            )}
            style={
              {
                "--y": `-${(cardCount - (idx + 1)) * OFFSET_FACTOR}%`,
                "--scale": 1 - (cardCount - (idx + 1)) * SCALE_FACTOR,
                "--opacity":
                  cardCount - (idx + 1) >= 6
                    ? 0
                    : 1 - (cardCount - (idx + 1)) * OPACITY_FACTOR,
              } as React.CSSProperties
            }
            aria-hidden={idx !== cardCount - 1}
          >
            <NewsCard
              title={title}
              description={summary}
              image={image}
              href={href}
              hideContent={cardCount - idx > 2}
              active={idx === cardCount - 1}
              onDismiss={() =>
                setDismissedNews([href, ...dismissedNews.slice(0, 50)])
              }
            />
          </div>
        ))}
        <div className="pointer-events-none invisible" aria-hidden>
          <NewsCard title="Title" description="Description" />
        </div>
        {showCompleted && !cardCount && (
          <div
            className="animate-slide-up-fade absolute inset-0 flex size-full flex-col items-center justify-center gap-3 [animation-duration:1s]"
            style={{ "--offset": "10px" } as React.CSSProperties}
          >
            <div className="animate-fade-in absolute inset-0 rounded-lg border border-neutral-300 [animation-delay:2.3s] [animation-direction:reverse] [animation-duration:0.2s]" />
            <AnimatedLogo className="w-1/3" />
            <span className="animate-fade-in text-xs font-medium text-muted-foreground [animation-delay:2.3s] [animation-direction:reverse] [animation-duration:0.2s]">
              You're all caught up!
            </span>
          </div>
        )}
      </div>
    </div>
  ) : null;
}

function NewsCard({
  title,
  description,
  image,
  onDismiss,
  hideContent,
  href,
  active,
}: {
  title: string;
  description: string;
  image?: string;
  onDismiss?: () => void;
  hideContent?: boolean;
  href?: string;
  active?: boolean;
}) {
  const { isMobile } = useMediaQuery();

  const ref = React.useRef<HTMLDivElement>(null);
  const drag = React.useRef<{
    start: number;
    delta: number;
    startTime: number;
    maxDelta: number;
    pointerId?: number;
  }>({
    start: 0,
    delta: 0,
    startTime: 0,
    maxDelta: 0,
  });
  const animation = React.useRef<Animation>();
  const [dragging, setDragging] = React.useState(false);

  const onDragMove = (e: PointerEvent) => {
    if (!ref.current) return;
    const { clientX } = e;
    const dx = clientX - drag.current.start;
    drag.current.delta = dx;
    drag.current.maxDelta = Math.max(drag.current.maxDelta, Math.abs(dx));
    ref.current.style.setProperty("--dx", dx.toString());
  };

  const dismiss = () => {
    if (!ref.current) return;

    const cardWidth = ref.current.getBoundingClientRect().width;
    const translateX = Math.sign(drag.current.delta || 1) * cardWidth;

    // Dismiss card
    animation.current = ref.current.animate(
      [
        { opacity: 1, transform: `translateX(${drag.current.delta}px)` },
        { opacity: 0, transform: `translateX(${translateX}px)` }
      ],
      { duration: 150, easing: "ease-in-out", fill: "forwards" }
    );
    animation.current.onfinish = () => onDismiss?.();
  };

  const stopDragging = (cancelled: boolean) => {
    if (!ref.current) return;
    unbindListeners();
    setDragging(false);

    if (drag.current.pointerId !== undefined) {
      try {
        ref.current.releasePointerCapture(drag.current.pointerId);
      } catch (e) {}
    }

    const dx = drag.current.delta;
    if (Math.abs(dx) > ref.current.clientWidth / (cancelled ? 2 : 3)) {
      dismiss();
      return;
    }

    // Animate back to original position
    animation.current = ref.current.animate(
      { transform: "translateX(0)" },
      { duration: 150, easing: "ease-in-out" }
    );
    animation.current.onfinish = () =>
      ref.current?.style.setProperty("--dx", "0");

    drag.current = { start: 0, delta: 0, startTime: 0, maxDelta: 0 };
  };

  const onDragEnd = () => stopDragging(false);
  const onDragCancel = () => stopDragging(true);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!active || !ref.current || animation.current?.playState === "running")
      return;

    // Capture the pointer to keep receiving events even if moved outside the card
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    
    bindListeners();
    setDragging(true);
    drag.current.start = e.clientX;
    drag.current.startTime = Date.now();
    drag.current.delta = 0;
    drag.current.pointerId = e.pointerId; // Store pointerId
    ref.current.style.setProperty("--w", ref.current.clientWidth.toString());
  };

  const onClick = (e: React.MouseEvent) => {
    if (drag.current.maxDelta > 10) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    
    if (!ref.current) return;
    if (
      isMobile &&
      (!drag.current.startTime || Date.now() - drag.current.startTime < 250)
    ) {
      window.open(href || CALENDLY_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const bindListeners = () => {
    document.addEventListener("pointermove", onDragMove);
    document.addEventListener("pointerup", onDragEnd);
    document.addEventListener("pointercancel", onDragCancel);
  };

  const unbindListeners = () => {
    document.removeEventListener("pointermove", onDragMove);
    document.removeEventListener("pointerup", onDragEnd);
    document.removeEventListener("pointercancel", onDragCancel);
  };

  return (
    <Card
      ref={ref}
      style={{ 
        touchAction: "none",
        transform: "translateX(calc(var(--dx, 0) * 1px)) rotate(calc(var(--dx, 0) * 0.05deg))",
        opacity: "calc(1 - Math.abs(var(--dx, 0)) / var(--w, 1) / 2)"
      } as any}
      className={cn(
        "relative select-none gap-2 p-4 text-[0.8125rem]",
        "transition-shadow data-[dragging=true]:shadow-md bg-zinc-900 border-white/10"
      )}
      data-dragging={dragging}
      onPointerDown={onPointerDown}
      onClick={onClick}
    >
      <div className={cn(hideContent && "invisible")}>
        <div className="flex flex-col gap-2">
          <span className="line-clamp-1 font-chunky font-bold text-lg text-white">
            {title}
          </span>
          <p className="line-clamp-3 md:line-clamp-4 h-16 md:h-24 leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>
        <div className="relative mt-4 aspect-[16/9] w-full shrink-0 overflow-hidden rounded border border-white/5 bg-zinc-950">
          {image && (
            <img
              src={image}
              alt=""
              className="rounded object-cover object-center w-full h-full pointer-events-none"
              draggable={false}
            />
          )}
        </div>
        <div
          className={cn(
            "h-0 overflow-hidden opacity-0 transition-[height,opacity] duration-200 pointer-events-none group-hover:group-data-[active=true]:pointer-events-auto",
            "sm:group-has-[*[data-dragging=true]]:h-10 sm:group-has-[*[data-dragging=true]]:opacity-100 sm:group-hover:group-data-[active=true]:h-10 sm:group-hover:group-data-[active=true]:opacity-100"
          )}
        >
          <div className="flex items-center justify-between pt-4 text-xs">
            <a
              href={href || CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-brand-teal hover:text-white transition-colors duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              Book Now
            </a>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                dismiss();
              }}
              className="text-zinc-500 hover:text-zinc-300 transition-colors duration-150"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

function AnimatedLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-zinc-700"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1H15V12.9332C15.0001 12.9465 15.0002 12.9598 15.0003 12.9731C15.0003 12.982 15.0003 12.991 15.0003 13C15.0003 13.0223 15.0002 13.0445 15 13.0668V20H12V18.7455C10.8662 19.5362 9.48733 20 8.00016 20C4.13408 20 1 16.866 1 13C1 9.13401 4.13408 6 8.00016 6C9.48733 6 10.8662 6.46375 12 7.25452V1ZM8 16.9998C10.2091 16.9998 12 15.209 12 12.9999C12 10.7908 10.2091 9 8 9C5.79086 9 4 10.7908 4 12.9999C4 15.209 5.79086 16.9998 8 16.9998Z"
        stroke="currentColor"
        strokeDasharray="63"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur="2500ms"
          values="63;0;0;0;63"
          fill="freeze"
        />
      </path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 6H20V13V13C20 14.0608 20.4215 15.0782 21.1716 15.8283C21.9217 16.5784 22.9391 16.9998 24 16.9998C25.0609 16.9998 26.0783 16.5784 26.8284 15.8283C27.5785 15.0782 28 14.0608 28 13C28 13 28 13 28 13V6H31V13H31.0003C31.0003 13.9192 30.8192 14.8295 30.4675 15.6788C30.1157 16.5281 29.6 17.2997 28.95 17.9497C28.3 18.5997 27.5283 19.1154 26.679 19.4671C25.8297 19.8189 24.9194 20 24.0002 20C23.0809 20 22.1706 19.8189 21.3213 19.4671C20.472 19.1154 19.7003 18.5997 19.0503 17.9497C18.4003 17.2997 17.8846 16.5281 17.5329 15.6788C17.1811 14.8295 17 13.9192 17 13V13V6Z"
        stroke="currentColor"
        strokeDasharray="69"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur="2500ms"
          values="69;0;0;0;69"
          fill="freeze"
        />
      </path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 1H36V7.25474C37.1339 6.46383 38.5128 6 40.0002 6C43.8662 6 47.0003 9.13401 47.0003 13C47.0003 16.866 43.8662 20 40.0002 20C36.1341 20 33 16.866 33 13V1ZM40 16.9998C42.2091 16.9998 44 15.209 44 12.9999C44 10.7908 42.2091 9 40 9C37.7909 9 36 10.7908 36 12.9999C36 15.209 37.7909 16.9998 40 16.9998Z"
        stroke="currentColor"
        strokeDasharray="60"
        strokeLinecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur="2500ms"
          values="-60;0;0;0;-60"
          fill="freeze"
        />
      </path>
    </svg>
  );
}
