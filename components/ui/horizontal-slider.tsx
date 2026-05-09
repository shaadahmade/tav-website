import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// ─── Hook: track edge state of a scroll container ───────────────────────────
function useSliderEdges(ref: React.RefObject<HTMLDivElement | null>) {
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const overflowing = scrollWidth > clientWidth + 2;
    setCanLeft(scrollLeft > 4);
    setCanRight(overflowing && scrollLeft + clientWidth < scrollWidth - 4);
  }, [ref]);

  useEffect(() => {
    update();
    const el = ref.current;
    const onScroll = () => {
      setHasInteracted(true);
      update();
    };
    el?.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    // Re-check after layout settles
    const t = setTimeout(update, 100);
    return () => {
      el?.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
      clearTimeout(t);
    };
  }, [ref, update]);

  return { canLeft, canRight, hasInteracted, setHasInteracted };
}

// ─── Pure arrow buttons that operate on an external scroll container ────────
interface SliderArrowsProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  /** Step multiplier of clientWidth. Default 0.85. */
  step?: number;
  /** Hide on desktop. Default true. */
  mobileOnly?: boolean;
}

export const SliderArrows: React.FC<SliderArrowsProps> = ({
  containerRef,
  step = 0.85,
  mobileOnly = true,
}) => {
  const { canLeft, canRight, hasInteracted, setHasInteracted } = useSliderEdges(containerRef);

  const scroll = (dir: 'left' | 'right') => {
    setHasInteracted(true);
    const el = containerRef.current;
    if (!el) return;
    const distance = el.clientWidth * step;
    el.scrollBy({ left: dir === 'left' ? -distance : distance, behavior: 'smooth' });
  };

  const visibility = mobileOnly ? 'md:hidden' : '';
  const buttonBase = cn(
    visibility,
    'absolute top-1/2 -translate-y-1/2 z-20',
    'h-11 w-11 rounded-full',
    'bg-zinc-950/75 backdrop-blur-md border border-white/15 text-white',
    'shadow-[0_8px_24px_rgba(0,0,0,0.5)]',
    'flex items-center justify-center',
    'transition-all duration-200',
  );

  return (
    <>
      <button
        type="button"
        aria-label="Scroll previous"
        onClick={() => scroll('left')}
        className={cn(
          buttonBase,
          'left-2',
          canLeft
            ? 'opacity-100 hover:bg-zinc-900 active:scale-90'
            : 'opacity-0 pointer-events-none scale-75',
        )}
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
      </button>

      <button
        type="button"
        aria-label="Scroll next"
        onClick={() => scroll('right')}
        className={cn(
          buttonBase,
          'right-2',
          canRight
            ? 'opacity-100 hover:bg-zinc-900 active:scale-90'
            : 'opacity-0 pointer-events-none scale-75',
          /* Subtle nudge while user hasn't engaged yet */
          canRight && !hasInteracted && 'animate-pulse-x',
        )}
      >
        <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
      </button>
    </>
  );
};

// ─── Wrapper: own scroll container + arrows ─────────────────────────────────
interface HorizontalSliderProps {
  children: React.ReactNode;
  /** Classes for the inner scroll container. Pass your existing flex/grid classes. */
  className?: string;
  step?: number;
  mobileOnly?: boolean;
}

/**
 * Wraps a horizontally-scrolling row and adds mobile-only navigation
 * chevrons so users discover swipe affordance. Arrows fade at edges,
 * the right arrow gently nudges on first render to hint at swipeability.
 */
export const HorizontalSlider: React.FC<HorizontalSliderProps> = ({
  children,
  className,
  step,
  mobileOnly,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="relative">
      <div ref={ref} className={className}>
        {children}
      </div>
      <SliderArrows containerRef={ref} step={step} mobileOnly={mobileOnly} />
    </div>
  );
};

export default HorizontalSlider;
