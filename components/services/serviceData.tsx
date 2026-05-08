import React from 'react';
import {
  Instagram, Facebook, Linkedin, Twitter, Youtube,
  Bot, Mail, Workflow, GitBranch, Database, Repeat, Activity,
  Target, MousePointerClick, Megaphone, BarChart3, Sparkles, Wallet,
  FileText, Search, BookOpen, Send, ClipboardList, Edit3,
  Code2, Smartphone, ShoppingCart, Cpu, Globe, Settings,
  Layout, Rocket, Layers, RefreshCw, Server, LifeBuoy, MonitorSmartphone,
  Brush, Palette, Printer, MonitorPlay, Package, Film,
  Zap, ShieldCheck,
  Eye, MapPin, Wrench, Link2, FileSearch, BarChart,
} from 'lucide-react';
import type { ServicePageData } from './ServicePage';

// ─── VIDEO ASSETS (Pexels CDN — public CC0, swap for owned assets later) ────
// All URLs verified 200 OK. Each service gets a unique, theme-matched video.
const HERO_VIDEOS = {
  socialMedia: 'https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_24fps.mp4',
  marketingAutomation: 'https://videos.pexels.com/video-files/5538137/5538137-hd_1920_1080_25fps.mp4',
  performanceMarketing: 'https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4',
  contentMarketing: 'https://videos.pexels.com/video-files/1409899/1409899-hd_1920_1080_25fps.mp4',
  webDevelopment: 'https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4',
  appDevelopment: 'https://videos.pexels.com/video-files/855505/855505-hd_1920_1080_25fps.mp4',
  graphicDesign: 'https://videos.pexels.com/video-files/4779866/4779866-hd_1920_1080_30fps.mp4',
  webDesign: 'https://videos.pexels.com/video-files/2796083/2796083-hd_1920_1080_25fps.mp4',
  seo: 'https://videos.pexels.com/video-files/854195/854195-hd_1920_1080_30fps.mp4',
};

// ─── TAB 1: SOCIAL MEDIA MARKETING ──────────────────────────────────────────
export const socialMediaServiceData: ServicePageData = {
  slug: 'social-media',
  hero: {
    eyebrow: 'Social Media Marketing',
    titleLead: "People don't stop to",
    titleAccent: 'figure out content.',
    intro:
      "They scroll past it in seconds. We make sure your content stops people mid-scroll, communicates the message clearly within the first few seconds, and stays in their mind even after they've moved to the next post.",
    videoUrl: HERO_VIDEOS.socialMedia,
  },
  marqueeText: 'INSTAGRAM • FACEBOOK • LINKEDIN • TWITTER (X) • YOUTUBE •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'Content people',
    titleAccent: "don't scroll past.",
    intro: '',
    bullets: [
      'Content that people understand without re-reading.',
      "Your content feels so unified that every post instantly signals it's from you.",
      'Strangers who scroll past your posts start clicking your profile to know more.',
      'Your profile turns silent visitors into people who reach out and ask about your services.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Show up where',
    titleAccent: 'attention already lives.',
    intro:
      "We don't try to be everywhere. We help you show up where your customers are already paying attention.",
    items: [
      {
        title: 'Instagram Marketing',
        subtitle: 'Turn your scrolling audience into people who pause, notice, and act.',
        description:
          'Our content helps your audience stop on your post before the scroll continues, recognises your content instantly in a crowded feed, and understands your message without reading twice.',
        features: ['Stops Mid-Scroll', 'Instant Recognition', 'Message Clear First Try', 'Action-Oriented'],
        icon: <Instagram className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'Facebook Marketing',
        subtitle: 'Turn everyday Facebook scrolling into meaningful conversations and genuine interest.',
        description:
          'Our content starts real conversations in the comments instead of empty reactions, makes your offer clear without needing to click away, and keeps your message consistent whether seen through posts or ads.',
        features: ['Real Conversations', 'Clear Offer Inline', 'Consistent Across Posts & Ads', 'Genuine Interest'],
        icon: <Facebook className="h-6 w-6 text-white" />,
        color: '#3b82f6',
      },
      {
        title: 'LinkedIn Marketing',
        subtitle: 'Turn silent LinkedIn profile views into inbound business conversations.',
        description:
          'Our content makes your audience pause and read because it speaks directly to their work and challenges. Relevant visitors land on your profile with clear intent, and your expertise becomes obvious through consistent, thoughtful posting.',
        features: ['Inbound Conversations', 'Speaks To Their Work', 'Intent-Driven Visitors', 'Obvious Expertise'],
        icon: <Linkedin className="h-6 w-6 text-white" />,
        color: '#0284c7',
      },
      {
        title: 'Twitter (X) Marketing',
        subtitle: 'Stay visible in a feed where attention disappears in seconds.',
        description:
          'Our content makes your audience stop scrolling because your tweet feels worth reacting to. They reply, quote, or engage instead of just passing by — and they see your brand inside trends without it feeling forced.',
        features: ['Worth Reacting To', 'Quote-Worthy Replies', 'Natural Trend Fit', 'Stays Visible'],
        icon: <Twitter className="h-6 w-6 text-white" />,
        color: '#0f172a',
      },
      {
        title: 'YouTube Marketing',
        subtitle: 'Turn random viewers into repeat watchers.',
        description:
          'Our content maintains interest throughout without giving a reason to click away, delivers the message clearly by the time the video ends, and leaves a lasting impression beyond just one watch.',
        features: ['Holds Interest', 'Message Lands By End', 'Lasting Impression', 'Repeat Viewers'],
        icon: <Youtube className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
    ],
  },
  cta: {
    title: 'Attention is won',
    titleAccent: 'in seconds.',
    subtitle:
      'People are seeing content like yours every day. The difference is — some get ignored, some get remembered. Contact us to make sure you\'re the one they remember.',
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'What do your social media marketing services include?',
      a: 'Our social media marketing services include content strategy, post creation, brand consistency, and platform-specific content for Instagram, Facebook, LinkedIn, X (Twitter), and YouTube.',
    },
    {
      q: 'How are you different from other social media marketing agencies?',
      a: 'Most agencies focus on posting more content. We focus on making every post instantly understandable and memorable.',
    },
    {
      q: 'Which platforms should my business focus on?',
      a: "You don't need to be everywhere. You need to be where your audience is already paying attention. We help you identify the right platforms — whether that's Instagram, LinkedIn, Facebook, X, or YouTube — based on your business model and target audience.",
    },
    {
      q: 'How long does it take to see results from social media marketing?',
      a: 'You may start seeing improvements in engagement and profile activity within a few weeks. However, consistent brand recognition, inbound inquiries, and strong results typically build over 60–90 days of structured posting.',
    },
    {
      q: 'Will you handle content creation completely?',
      a: 'Yes. We handle content planning, writing, and creative direction to ensure your brand stays consistent and clear across all platforms.',
    },
    {
      q: 'Can you work with my existing brand guidelines?',
      a: 'Absolutely. If you already have brand guidelines, we align with them. If not, we help you build a consistent visual and communication style from scratch.',
    },
    {
      q: 'Do you offer paid ads along with organic social media marketing?',
      a: 'Yes. We create content that works for both organic reach and paid campaigns, ensuring your messaging stays consistent across all touchpoints.',
    },
    {
      q: 'How do I get started with your social media marketing services?',
      a: "Simple. Reach out to us, and we'll:\n• Understand your business\n• Identify your audience\n• Build a clear content strategy",
    },
  ],
};

// ─── TAB 2: MARKETING AUTOMATION ────────────────────────────────────────────
export const marketingAutomationData: ServicePageData = {
  slug: 'marketing-automation',
  hero: {
    eyebrow: 'Marketing Automation',
    titleLead: "Hear from you",
    titleAccent: 'at the right time.',
    intro:
      "Good marketing automation doesn't replace human interaction. It makes sure customers hear from you at the right time. We design systems that send instant, human-sounding replies, re-engage people who didn't convert, and move leads step by step instead of letting them get lost.",
    videoUrl: HERO_VIDEOS.marketingAutomation,
    gradientFrom: 'from-brand-teal',
    gradientVia: 'via-brand-teal',
    gradientTo: 'to-brand-purple',
  },
  marqueeText: 'INSTANT REPLY • EMAIL & WHATSAPP • LEAD NURTURING • CRM • RE-ENGAGEMENT •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'No interested lead',
    titleAccent: 'goes silent.',
    bullets: [
      'Your follow-ups happen automatically without feeling repetitive.',
      'Your team always knows who to contact and what to say next.',
      'No interested lead goes silent without a timely response.',
      'Cold leads are re-engaged with the right message at the right moment.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Fix the moments',
    titleAccent: 'leads disappear.',
    intro:
      "We don't set up random automations. We fix the exact moments where leads slow down, lose interest, or disappear.",
    items: [
      {
        title: 'Lead Capture & Instant Response',
        subtitle: "The moment someone fills your form, they're comparing you with 3 other options.",
        description:
          'We build systems that capture leads from forms, ads, and landing pages, send instant human-sounding replies, and acknowledge interest while guiding the next step immediately.',
        features: ['Forms & Ads & LPs', 'Instant Reply', 'Human-Sounding', 'Guides Next Step'],
        icon: <Bot className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'Email & WhatsApp Automation',
        subtitle: "Your follow-up shouldn't feel like marketing. It should feel like someone actually typed it.",
        description:
          'We create email and WhatsApp workflows that send replies within seconds, sound like a real conversation, and adapt based on what the user clicks, ignores, or replies.',
        features: ['Replies in Seconds', 'Real-Conversation Tone', 'Behaviour-Based', 'Multi-Channel'],
        icon: <Mail className="h-6 w-6 text-white" />,
        color: '#22c55e',
      },
      {
        title: 'Lead Nurturing Workflows',
        subtitle: "Not every lead is ready today. But they shouldn't be forgotten tomorrow.",
        description:
          'We design lead-nurturing systems where doubts are addressed automatically, trust is built through proof and value, and leads stay engaged until they\'re ready to buy.',
        features: ['Addresses Doubts', 'Builds Trust', 'Proof & Value', 'Stays Top-Of-Mind'],
        icon: <Workflow className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'Follow-Up Automation',
        subtitle: 'Most sales are lost in the follow-up.',
        description:
          'We build systems that automatically follow up without being repetitive, adjust timing based on user behaviour, and ensure no lead goes silent without a response from your side.',
        features: ['Non-Repetitive', 'Behaviour-Aware Timing', 'No Silent Leads', 'Hands-Off Cadence'],
        icon: <Repeat className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'CRM Integration & Lead Management',
        subtitle: "Your leads shouldn't live in spreadsheets, inboxes, and forgotten tabs.",
        description:
          'We make sure every lead is tracked in one place, each lead is assigned a clear next action, and follow-ups are tracked so nothing gets forgotten.',
        features: ['Single Source of Truth', 'Clear Next Actions', 'Tracked Follow-Ups', 'Zero Forgotten Leads'],
        icon: <Database className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'Re-Engagement Campaigns',
        subtitle: "Some leads go silent. That doesn't mean they're gone.",
        description:
          'We bring them back with timely reminders and nudges, fresh messaging angles, and relevant offers that restart the conversation.',
        features: ['Timely Nudges', 'Fresh Angles', 'Relevant Offers', 'Restart Conversations'],
        icon: <Activity className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Behaviour-Based Automation',
        subtitle: "Not all leads behave the same. Your system shouldn't treat them the same.",
        description:
          'We send different messages based on what people click, ignore, or revisit; change the follow-up when behaviour changes; and move leads forward only when they\'re ready.',
        features: ['Click/Ignore Triggers', 'Adaptive Follow-Up', 'Behaviour Branching', 'Ready-Aware Routing'],
        icon: <GitBranch className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
    ],
  },
  cta: {
    title: 'Respond faster',
    titleAccent: 'than your competition.',
    subtitle:
      "The moment a lead shows interest — they're already considering other options. Contact us and let's build a system that responds instantly.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'What are marketing automation services?',
      a: 'Marketing automation services help businesses automate repetitive tasks like follow-ups, lead nurturing, and customer communication without losing the human touch.',
    },
    {
      q: 'How can marketing automation increase my sales?',
      a: "Most leads don't convert on the first interaction. Automation ensures:\n• Instant responses\n• Consistent follow-ups\n• Timely nudges",
    },
    {
      q: 'What tools do you use for marketing automation?',
      a: "We don't lock you into one tool. We work with platforms that best fit your business, including CRM systems, email marketing tools, and WhatsApp automation platforms.",
    },
    {
      q: 'Is marketing automation suitable for small businesses?',
      a: 'Yes — and in fact, small businesses benefit the most. Automation helps you respond instantly without hiring a big team, stay consistent with follow-ups, and compete with larger brands.',
    },
    {
      q: 'Will automation make my communication feel robotic?',
      a: "Not if it's done right. Our focus is on human-sounding messages, behaviour-based personalisation, and natural conversation flow.",
    },
    {
      q: 'What is the difference between email automation and WhatsApp automation?',
      a: 'Email automation is best for detailed communication, nurturing, and long-term engagement. WhatsApp automation is best for instant responses, quick follow-ups, and high open rates. We combine both for maximum impact.',
    },
    {
      q: 'How long does it take to set up marketing automation?',
      a: 'It depends on your business and complexity. Typically:\n• Basic setup: a few days\n• Advanced workflows: 1–2 weeks\nResults start showing as soon as automation goes live.',
    },
    {
      q: 'Can you integrate automation with my existing CRM?',
      a: 'Yes. We integrate with your current CRM so leads are tracked properly, follow-ups are automated, and your team always knows the next step.',
    },
    {
      q: "What happens to leads who don't convert immediately?",
      a: "We don't let them disappear. They enter lead-nurturing workflows where their doubts are addressed, they receive value-driven content, and they're re-engaged at the right time.",
    },
    {
      q: 'Do I need technical knowledge to use these systems?',
      a: 'No. We set everything up so it is easy to understand, requires minimal manual effort, and lets you focus on closing deals — not managing tools.',
    },
  ],
};

// ─── TAB 3: PERFORMANCE MARKETING ────────────────────────────────────────────
export const performanceMarketingData: ServicePageData = {
  slug: 'performance-marketing',
  hero: {
    eyebrow: 'Performance Marketing',
    titleLead: 'Spending takes seconds.',
    titleAccent: 'Customers don\'t.',
    intro:
      'Our performance marketing campaigns show your ads exactly when someone is actively searching for a solution like yours, align the promise in the ad with what the customer sees after clicking, and help your customers decide quickly instead of second-guessing after they land.',
    videoUrl: HERO_VIDEOS.performanceMarketing,
    gradientFrom: 'from-brand-magenta',
    gradientVia: 'via-brand-purple',
    gradientTo: 'to-brand-teal',
  },
  marqueeText: 'GOOGLE • META • RETARGETING • ROAS • CONVERSION TRACKING •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'Every click',
    titleAccent: 'tied to a result.',
    bullets: [
      'A campaign that makes sense the moment you look at it.',
      "A clear match between what's promised in the ad and what appears after the click.",
      'Complete visibility into what\'s working and what needs improvement.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Fix where',
    titleAccent: 'budgets leak.',
    intro:
      "We don't run ads randomly. We fix the exact points where campaigns waste money, lose attention, and fail to convert.",
    items: [
      {
        title: 'Ad Strategy & Funnel Planning',
        subtitle: 'Most paid advertising campaigns fail before they even start.',
        description:
          "We define who you're targeting (and who you're not), what your customer needs to see first to feel this is relevant, and what makes them click — and gives them enough clarity to act.",
        features: ['Target Definition', 'Relevance Hooks', 'Clarity-First Funnels', 'Action Triggers'],
        icon: <Target className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'Paid Ads Management',
        subtitle: 'Running ads takes seconds. Watching the wrong people click them costs you daily.',
        description:
          'We manage ad performance so attention turns into real actions like enquiries, calls, and purchases — across Google, Facebook, and Instagram, where your customers are already spending time.',
        features: ['Google + Meta', 'Real Actions', 'Right-Audience Reach', 'Daily Cost Control'],
        icon: <MousePointerClick className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'Ad Copy & Creative',
        subtitle: "People don't analyse ads. They either get it or ignore it.",
        description:
          "We make sure your ads help customers understand your message the moment they see it, show exactly what you're offering without making them guess, and make clicking feel like the natural next move.",
        features: ['Instantly Understood', 'No-Guess Offers', 'Click-Worthy', 'Native Feel'],
        icon: <Megaphone className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'Conversion Tracking',
        subtitle: '"Which ad is actually working?" "Where is my money going?"',
        description:
          'We set up advanced conversion tracking where you see exactly which ads are bringing real enquiries, identify where your budget is being spent without returns, and understand which pages move customers forward.',
        features: ['Real-Enquiry Attribution', 'Budget Heatmap', 'Page-Level Drop-Off', 'Source-Of-Truth Data'],
        icon: <BarChart3 className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'Retargeting Campaigns',
        subtitle: "Most customers don't convert the first time.",
        description:
          'We bring them back by reminding customers about what they already showed interest in, giving stronger reasons to come back and choose you, and showing a clearer message the second time they see you.',
        features: ['Reminders That Work', 'Stronger Second-Look', 'Clearer Repeat Message', 'Recovers Lost Intent'],
        icon: <Sparkles className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Smart Budget Control',
        subtitle: "Spending more doesn't fix bad campaigns.",
        description:
          "We make sure your budget is focused on the ads actually bringing in the right customers, your money isn't wasted on ads customers ignore, and every amount spent is tied to a clear outcome your business needs.",
        features: ['Right-Customer Spend', 'No-Waste Filters', 'Outcome-Tied Budget', 'Continuous Optimisation'],
        icon: <Wallet className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
    ],
  },
  cta: {
    title: 'Be there when customers',
    titleAccent: 'are ready to buy.',
    subtitle:
      "If your ads aren't turning into customers, something is broken. Contact us and let's fix where your budget is leaking.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'What are performance marketing services?',
      a: 'Performance marketing services are digital advertising strategies where you only pay for measurable results such as clicks, leads, or sales. These include platforms like Google Ads, Meta Ads, and other PPC channels focused on ROI-driven campaigns.',
    },
    {
      q: 'How is performance marketing different from traditional advertising?',
      a: 'Unlike traditional advertising, performance marketing focuses on measurable outcomes. Instead of paying for visibility alone, businesses pay for specific actions like conversions, leads, or purchases — making it more cost-effective and data-driven.',
    },
    {
      q: 'Which platforms are used in performance marketing?',
      a: 'Performance marketing typically includes platforms like Google Ads (Search, Display, YouTube), Meta Ads (Facebook and Instagram), and sometimes LinkedIn Ads or other PPC platforms, depending on the target audience.',
    },
    {
      q: 'How long does it take to see results from performance marketing?',
      a: 'You can start seeing initial results within a few days of launching campaigns. However, consistent and optimised performance marketing results usually take 2–4 weeks as data is collected and campaigns are refined.',
    },
    {
      q: 'What is PPC in performance marketing?',
      a: 'PPC (Pay-Per-Click) is a core part of performance marketing where advertisers pay only when someone clicks on their ad. It ensures that your budget is spent on actual user engagement rather than just impressions.',
    },
    {
      q: 'How do you measure success in performance marketing campaigns?',
      a: 'Success is measured through key metrics like cost per lead (CPL), cost per acquisition (CPA), return on ad spend (ROAS), click-through rate (CTR), and overall conversion rates.',
    },
    {
      q: 'Why is conversion tracking important in performance marketing?',
      a: 'Conversion tracking helps identify which ads, campaigns, and keywords are generating actual results. Without it, businesses cannot optimize their ad spend or improve performance effectively.',
    },
    {
      q: 'Do performance marketing campaigns guarantee sales?',
      a: 'No agency can guarantee sales, but a well-structured performance marketing strategy significantly increases the chances by targeting high-intent audiences, optimising campaigns, and improving conversion rates over time.',
    },
    {
      q: 'What budget is required for performance marketing?',
      a: 'The budget depends on your industry, competition, and goals. However, even small budgets can generate results if campaigns are strategically planned and optimised for high-intent audiences.',
    },
    {
      q: 'What is retargeting in performance marketing?',
      a: "Retargeting is a strategy that shows ads to users who have previously visited your website but didn't convert. It helps bring back potential customers and increases overall conversion rates.",
    },
  ],
};

// ─── TAB 4: CONTENT MARKETING ────────────────────────────────────────────────
export const contentMarketingData: ServicePageData = {
  slug: 'content-marketing',
  hero: {
    eyebrow: 'Content Marketing',
    titleLead: "People read to",
    titleAccent: 'decide something.',
    intro:
      "People don't read content to admire it. They read it to decide something. If your content doesn't convince them — someone else's will. We start by understanding what your customers are already searching for, then create content that answers them clearly and useful.",
    videoUrl: HERO_VIDEOS.contentMarketing,
    gradientFrom: 'from-brand-purple',
    gradientVia: 'via-brand-magenta',
    gradientTo: 'to-brand-teal',
  },
  marqueeText: 'WEBSITE CONTENT • SEO • EDUCATIONAL • SOCIAL • EMAIL • STRATEGY •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'Content that keeps',
    titleAccent: 'working long after.',
    bullets: [
      'Content attracts people who are already looking for your solution.',
      'Messaging filters out unqualified leads before they waste your time.',
      'Brand voice stays consistent across every platform and format.',
      'Content continues working long after it is published.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Remove a different',
    titleAccent: 'type of hesitation.',
    intro:
      "Content marketing isn't one service. It's a system. We offer specific content services, each designed to remove a different type of hesitation.",
    items: [
      {
        title: 'Website Content Writing',
        subtitle: "Your website shouldn't make people think. It should make them act.",
        description:
          'We create website content that makes a first-time visitor understand what you do within 5 seconds, attracts the right audience while filtering out the wrong ones, and removes "I\'ll think about it" moments by answering doubts before they arise.',
        features: ['5-Second Clarity', 'Right-Audience Filter', 'Pre-Empts Doubts', 'Action-Oriented'],
        icon: <FileText className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'SEO Content Writing',
        subtitle: 'Traffic that doesn\'t convert is just numbers on a screen.',
        description:
          'We create SEO content that targets high-intent decision-stage keywords, ranks on search engines like Google, answers queries clearly and completely, and brings visitors who are ready to take action.',
        features: ['High-Intent Keywords', 'Decision-Stage Focus', 'Complete Answers', 'Ranks On Google'],
        icon: <Search className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'Educational Content',
        subtitle: "People don't buy what they don't understand.",
        description:
          'We create educational content that simplifies complex ideas, explains your product or service clearly, builds confidence before the sale, and positions your brand as the obvious choice.',
        features: ['Simplifies Complex', 'Builds Confidence', 'Pre-Sale Trust', 'Obvious-Choice Positioning'],
        icon: <BookOpen className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'Social Media Content',
        subtitle: "Posting daily doesn't build a brand. Being understood does.",
        description:
          "We create social content that shares one clear message per post, helps people quickly understand what you do and why it matters to them, and sounds like a real conversation — not a marketing message.",
        features: ['One Message Per Post', 'Clear Why-It-Matters', 'Conversational Tone', 'Brand Builder'],
        icon: <Edit3 className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'Email Marketing Content',
        subtitle: "Leads don't convert instantly. They need the right message at the right moment.",
        description:
          'We create email sequences that land in the inbox exactly when interest is highest, answer the exact doubt that\'s stopping the reply, and move leads from the first click to a booked call.',
        features: ['Right-Moment Send', 'Doubt-Specific Answers', 'Click-To-Call Path', 'Sequence-Based'],
        icon: <Send className="h-6 w-6 text-white" />,
        color: '#22c55e',
      },
      {
        title: 'Content Strategy',
        subtitle: "Most content fails before it's written.",
        description:
          'We build a content strategy that pinpoints the exact moments where customers pause, doubt, and leave; replaces random posting with a clear 30–60 day plan; and ensures every piece of content has a purpose.',
        features: ['Drop-Off Mapping', '30–60 Day Plan', 'Purpose Per Piece', 'No Random Posting'],
        icon: <ClipboardList className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Content Optimisation',
        subtitle: "Sometimes you don't need more content. You need to fix what's already there.",
        description:
          "We improve existing content so customers quickly understand what you're offering, find the right information without searching, stop feeling confused or unsure, and take action instead of leaving your page.",
        features: ['Clarity Lift', 'Findability Fix', 'Confusion Removal', 'Action Recovery'],
        icon: <RefreshCw className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
    ],
  },
  cta: {
    title: 'Your content is read.',
    titleAccent: 'But is it convincing?',
    subtitle:
      "If it's not moving people closer to action, it's not working. Contact us and let's fix what your content is missing.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'What are content marketing services?',
      a: 'Content marketing services involve creating and distributing content that helps your audience understand your product. Instead of pushing sales, it guides customers step by step until choosing you feels natural.',
    },
    {
      q: 'How is content marketing different from traditional advertising?',
      a: 'Instead of telling people to buy, content marketing answers their questions, removes doubts, and builds trust — so they decide on their own.',
    },
    {
      q: 'Do content marketing services really help generate leads?',
      a: 'Yes — when done right. Content that targets the right intent attracts people who are already looking for solutions. This means better-quality traffic, higher engagement, and more conversions.',
    },
    {
      q: 'How long does it take to see results from content marketing?',
      a: 'Content marketing is a long-term strategy, but early signs can appear within a few weeks.\n• SEO content: 2–4 months for consistent traffic growth\n• Website content: immediate improvement in clarity and conversions\n• Email & social content: faster engagement and response rates',
    },
    {
      q: 'What type of content is best for my business?',
      a: 'It depends on where your customers are in their decision journey:\n• Just exploring → Educational content\n• Comparing options → SEO content\n• Ready to act → Website & email content\nWe help you create the right content for each stage.',
    },
    {
      q: 'How do you decide what content to create?',
      a: "We don't guess. We analyse:\n• What your audience is searching for\n• Where they feel confused or hesitant\n• What information they need to make a decision\nThen we turn that into structured content.",
    },
    {
      q: 'Will you handle content strategy as well?',
      a: 'Yes. From topic planning to execution, everything is aligned with your business goals.',
    },
    {
      q: 'Can you improve or optimise our existing content?',
      a: "Absolutely. Sometimes you don't need new content — you need better content. We refine your existing pages to improve clarity, fix structure, and increase conversions.",
    },
    {
      q: 'Is content marketing suitable for small businesses?',
      a: 'Yes — especially for small businesses. Content helps you compete with bigger brands by building trust, authority, and visibility without relying only on ads.',
    },
    {
      q: 'How do I get started with your content marketing services?',
      a: "Simple. Reach out to us, and we'll:\n• Understand your business\n• Identify gaps in your current content\n• Suggest a clear action plan",
    },
  ],
};

// ─── TAB 5: WEBSITE DEVELOPMENT ──────────────────────────────────────────────
export const webDevelopmentData: ServicePageData = {
  slug: 'web-development',
  hero: {
    eyebrow: 'Website Development',
    titleLead: 'Lose customers in',
    titleAccent: 'invisible moments.',
    intro:
      "Most websites lose customers in small, invisible moments. Your customer doesn't care how your website is built. If it's slow, confusing, or breaks under pressure — they leave.",
    videoUrl: HERO_VIDEOS.webDevelopment,
    gradientFrom: 'from-brand-teal',
    gradientVia: 'via-brand-purple',
    gradientTo: 'to-brand-magenta',
  },
  marqueeText: 'CMS • MOBILE APP • E-COMMERCE • CUSTOM SOFTWARE • CUSTOMISED •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: "Pages that don't",
    titleAccent: 'break mid-click.',
    bullets: [
      "Pages that don't glitch, freeze, or break mid-click.",
      'A mobile experience that feels as smooth as scrolling Instagram.',
      'A backend that works quietly without constant fixes.',
      'A website that handles growth without slowing down or crashing.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: "Build the engine,",
    titleAccent: 'not just the surface.',
    intro: 'Our development services are designed for the moments customers actually live in.',
    items: [
      {
        title: 'CMS Development',
        subtitle: "You shouldn't need a developer to update your own website.",
        description:
          'We build CMS-based websites where you can update content without technical knowledge, add pages without breaking design or layout, and stay in control without depending on anyone.',
        features: ['No Dev Needed', 'Safe Layout Changes', 'In-Your-Control', 'Easy Updates'],
        icon: <Settings className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'Mobile App Development',
        subtitle: 'Apps should feel obvious from the first tap.',
        description:
          'We develop mobile apps that make it clear what to do from the first screen, respond instantly without lag or delays, and help users complete actions without getting stuck.',
        features: ['Obvious First Tap', 'Zero Lag', 'No Stuck States', 'Action-Complete'],
        icon: <Smartphone className="h-6 w-6 text-white" />,
        color: '#3b82f6',
      },
      {
        title: 'E-commerce Development',
        subtitle: "Most e-commerce websites lose customers in the experience, not the price.",
        description:
          'We build stores where customers find the right product without endless scrolling, product pages answer questions before they hesitate, and nothing distracts from completing the purchase.',
        features: ['Find Fast', 'Pre-Empts Hesitation', 'Distraction-Free Checkout', 'Conversion-First'],
        icon: <ShoppingCart className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'Custom Software Development',
        subtitle: "Your team shouldn't waste time repeating the same tasks.",
        description:
          'We build systems where your workflow is built directly into the software, repetitive tasks run automatically in the background, and work moves forward without constant follow-ups.',
        features: ['Workflow-Native', 'Background Automation', 'No Follow-Up Loops', 'Scales With You'],
        icon: <Cpu className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'Website Development',
        subtitle: "A website should feel effortless to use.",
        description:
          "We build websites where pages load before your customer even thinks of leaving, traffic spikes don't crash your site mid-click, and visitors don't scan, search, or struggle.",
        features: ['Pre-Empts Bounce', 'Spike-Resistant', 'No Search-And-Struggle', 'Effortless UX'],
        icon: <Globe className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'Customised Solutions',
        subtitle: "Not every business fits into a template. Your solution shouldn't either.",
        description:
          'We create custom-built solutions that solve specific problems instead of generic ones, fit your workflow instead of forcing changes, and handle increasing demand as your business grows.',
        features: ['Specific-Problem Built', 'Workflow Fit', 'Demand-Ready', 'No Forced Templates'],
        icon: <Layers className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
    ],
  },
  cta: {
    title: 'Your website should work',
    titleAccent: 'the moment people land.',
    subtitle:
      "When your website is smooth and clear, people stay, explore, and act. Contact us and let's build something your customers enjoy using.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'How long does it take to develop a website?',
      a: 'The timeline depends on the complexity of your project. A standard business website typically takes 2–4 weeks, while custom or e-commerce websites may take 4–8 weeks or more.',
    },
    {
      q: 'How much do website development services cost?',
      a: "The cost varies based on your requirements, features, and level of customisation. Instead of offering one-size-fits-all pricing, we build solutions based on:\n• Your business goals\n• Required features\n• Scalability needs\nThis ensures you only pay for what actually drives results.",
    },
    {
      q: 'Will my website be mobile-friendly?',
      a: 'Yes — every website we build is fully responsive. Your site will work smoothly across all devices, including smartphones and tablets, delivering an experience similar to apps like Instagram.',
    },
    {
      q: 'Can I update my website content myself?',
      a: "Absolutely. With our CMS development, you'll be able to:\n• Edit text and images\n• Add new pages\n• Manage content easily\nNo technical knowledge required. No dependency on developers.",
    },
    {
      q: 'Do you provide e-commerce website development?',
      a: "Yes, we build high-performing e-commerce websites designed to convert visitors into customers. We focus on:\n• Smooth navigation\n• Clear product pages\n• Frictionless checkout experience\nSo your customers don't drop off before completing a purchase.",
    },
    {
      q: 'Will my website be SEO-friendly?',
      a: 'Yes — our websites are built with SEO best practices from the ground up. This includes:\n• Fast loading speed\n• Clean code structure\n• Mobile optimization\n• Proper heading and content structure\nSo your website is ready to rank on search engines like Google.',
    },
    {
      q: 'Can you redesign my existing website?',
      a: 'Yes. If your current website is slow, outdated, or not converting, we can redesign it to:\n• Improve performance\n• Enhance user experience\n• Increase conversions\nWithout losing your existing brand identity.',
    },
    {
      q: 'Do you offer custom website development?',
      a: 'Yes — custom development is one of our core strengths. We build solutions that:\n• Match your exact business requirements\n• Fit your workflow\n• Scale as your business grows',
    },
    {
      q: 'What happens after the website is launched?',
      a: 'We ensure your website runs smoothly even after launch. Depending on your needs, we can provide:\n• Ongoing support\n• Performance monitoring\n• Updates and improvements\nSo your website continues to perform without issues.',
    },
  ],
};

// ─── TAB 6: APP DEVELOPMENT ──────────────────────────────────────────────────
export const appDevelopmentData: ServicePageData = {
  slug: 'app-development',
  hero: {
    eyebrow: 'App Development',
    titleLead: 'A confusing app',
    titleAccent: "doesn't get a second chance.",
    intro:
      'Most apps are deleted within 24 hours of being downloaded. We build apps where every screen presents one clear action, the experience stays consistent across Android, iOS, and devices, and decisions are based on real user behaviour — not assumptions.',
    videoUrl: HERO_VIDEOS.appDevelopment,
    gradientFrom: 'from-brand-purple',
    gradientVia: 'via-brand-teal',
    gradientTo: 'to-brand-magenta',
  },
  marqueeText: 'iOS • ANDROID • FLUTTER • REACT NATIVE • WEB DASHBOARDS •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'One clear action',
    titleAccent: 'per screen.',
    bullets: [
      'Each screen presents one clear action instead of multiple choices.',
      'A consistent experience is delivered across Android, iOS, and all devices.',
      'Decisions are based on real user behaviour, not assumptions.',
      'The app remains stable with ongoing support after launch.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: "Every screen has a",
    titleAccent: 'purpose.',
    intro: "We don't build apps with random features. We build systems where every screen has a purpose.",
    items: [
      {
        title: 'Mobile App Development',
        subtitle: "We design and develop apps that don't make users stop and think.",
        description:
          'You get the same experience whether opened on Android or the latest iPhone, your users always see one obvious action instead of multiple choices, and your app stays fast even as traffic spikes and user growth increases.',
        features: ['iOS + Android Parity', 'One Obvious Action', 'Spike-Resilient', 'Growth-Ready'],
        icon: <Smartphone className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'UI/UX Design',
        subtitle: "If a screen needs explanation, it's already broken.",
        description:
          'Every screen shows one clear action or gets redesigned, users know exactly where to tap without reading a single line, and layouts guide users forward instead of making them explore.',
        features: ['One-Action Screens', 'Tap-Without-Reading', 'Forward-Guiding Layouts', 'Effort-Free Flows'],
        icon: <Layout className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'MVP Development',
        subtitle: 'We take your idea out of "almost ready" and into the real world.',
        description:
          'Your core product goes live in 4–6 weeks, every feature is built to show where users click, drop, and come back, and your product reaches real users instead of staying stuck in development loops.',
        features: ['Live in 4–6 Weeks', 'Click & Drop Insights', 'Real-User Validation', 'No Dev Loops'],
        icon: <Rocket className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'App Redesign & Optimisation',
        subtitle: 'If users are dropping off, we find the exact screen and fix it.',
        description:
          'We identify the exact screen where users drop off within the first few interactions, remove unnecessary steps that slow users down, and turn multi-step confusing flows into clear straight paths.',
        features: ['Drop-Off Pinpointing', 'Step Removal', 'Straight-Path Flows', 'Hesitation Fix'],
        icon: <RefreshCw className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Backend Development & API',
        subtitle: "Users don't see your backend, but they feel it the second something breaks.",
        description:
          'Data loads without users staring at a spinning loader, payments and logins complete without errors or retries, and APIs respond consistently even during traffic spikes.',
        features: ['No Spinner Hell', 'Reliable Payments/Logins', 'Spike-Stable APIs', 'Quiet Backend'],
        icon: <Server className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'App Maintenance & Support',
        subtitle: "Apps don't fail at launch. They fail when no one is fixing what breaks after.",
        description:
          'Issues are fixed before users report them, performance stays stable even when usage increases over time, and bugs, crashes, and slowdowns are identified before they affect retention.',
        features: ['Pre-Report Fixes', 'Stable Long-Term', 'Crash Prevention', 'Retention-Aware'],
        icon: <LifeBuoy className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
      {
        title: 'Cross-Platform Development',
        subtitle: 'We build apps that behave the same no matter where they\'re opened.',
        description:
          "Your app shows the same screen and flow on Android and iPhone, users never face \"this works here but not there\" moments, and every update rolls out to both platforms at the same time.",
        features: ['Same Flow Both Sides', 'No Platform Surprises', 'Synchronous Updates', 'Single Codebase'],
        icon: <MonitorSmartphone className="h-6 w-6 text-white" />,
        color: '#22c55e',
      },
    ],
  },
  cta: {
    title: 'Most apps get downloaded.',
    titleAccent: "Yours shouldn't get deleted.",
    subtitle: "Contact us and let's build an app people keep using.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'How much does app development cost?',
      a: 'App development cost depends on features, complexity, and platforms. A simple MVP can be built on a lower budget, while advanced apps with integrations, payments, and custom features require more investment.',
    },
    {
      q: 'How long does it take to build an app?',
      a: "Most apps don't fail because they're late — they fail because they're overbuilt. We launch a functional MVP in 4–6 weeks, focused on real user actions. Full-scale apps may take longer depending on complexity.",
    },
    {
      q: 'What is MVP in app development?',
      a: 'MVP (Minimum Viable Product) is the first usable version of your app. It includes only the features needed for users to take the first meaningful action.',
    },
    {
      q: 'Do you develop apps for both Android and iOS?',
      a: 'Yes. We build apps for:\n• Android\n• iOS\n• Cross-platform (Flutter / React Native)\nYou get a consistent experience across all devices.',
    },
    {
      q: 'Will my app work on low-end devices?',
      a: 'Yes. We build apps that perform smoothly across all devices — from budget smartphones to high-end flagships.',
    },
    {
      q: 'What makes your app development approach different?',
      a: 'Most agencies start with code. We start with user behaviour:\n• We design before we develop\n• We map the user journey first\n• We remove confusion at every step',
    },
    {
      q: 'Can you redesign or improve my existing app?',
      a: 'Yes. If users are dropping off, we identify exactly where they leave, simplify the flow, and fix confusing screens.',
    },
    {
      q: 'Do you provide post-launch support?',
      a: "Absolutely. We don't disappear after launch:\n• Regular updates\n• Bug fixes\n• Performance improvements\nApps fail after launch if no one maintains them — we make sure that doesn't happen.",
    },
    {
      q: 'Will my app be scalable as users grow?',
      a: "Yes. We build apps with scalability in mind:\n• Fast performance under load\n• Stable backend architecture\n• Ready for growth from day one\nSo your app doesn't break when it starts working.",
    },
    {
      q: 'How do we get started?',
      a: "Simple. Book a free consultation. We'll:\n• Understand your idea\n• Identify gaps\n• Show you the clearest path to build and launch",
    },
  ],
};

// ─── TAB 7: GRAPHIC DESIGN ───────────────────────────────────────────────────
export const graphicDesignData: ServicePageData = {
  slug: 'graphic-design',
  hero: {
    eyebrow: 'Graphic Design',
    titleLead: 'Design fails when',
    titleAccent: 'people think too much.',
    intro:
      "Most graphic design services don't fail because they look bad. They fail because they make people think too much. We define the message before design starts, remove unnecessary elements, and structure the design for clarity.",
    videoUrl: HERO_VIDEOS.graphicDesign,
    gradientFrom: 'from-brand-magenta',
    gradientVia: 'via-brand-purple',
    gradientTo: 'to-brand-teal',
  },
  marqueeText: 'BRANDING • ADS • PRINT • WEB • PACKAGING • MOTION •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'Visuals that earn',
    titleAccent: 'recognition and trust.',
    bullets: [
      'A clear visual identity that stays consistent across every platform.',
      'A structured layout that guides attention to what matters most.',
      'High-performing creatives optimised for ads, web, and print.',
      'Mobile-friendly designs that stay clear on every screen size.',
      'Visuals that make your brand easier to recognise and trust.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Design that',
    titleAccent: 'works the moment seen.',
    intro: '',
    items: [
      {
        title: 'Branding & Visual Identity',
        subtitle: 'Your visuals should identify your brand before your name does.',
        description:
          "We create logos that still look clear on a tiny mobile screen, colour and typography systems people can spot in a crowded feed, and a visual identity that looks the same whether it's your ad, website, or packaging.",
        features: ['Mobile-Crisp Logos', 'Spot-In-Feed Systems', 'Consistent Identity', 'Ad/Web/Pack Parity'],
        icon: <Brush className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'Marketing & Advertising Design',
        subtitle: 'Your design should communicate the offer before attention is lost.',
        description:
          'We create ad creatives that explain your offer at a glance, campaign visuals where headline, visual, and CTA point to the same action, and designs built to turn scrolling into clicks and clicks into action.',
        features: ['Glance-Read Offers', 'Aligned Visual + CTA', 'Click-Driving', 'Action-Closing'],
        icon: <Megaphone className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Print & Publication',
        subtitle: 'Your design should communicate clearly on the first page itself.',
        description:
          "We create brochures people don't have to figure out, catalogues that move from browsing to buying, and layouts that remove noise and highlight what matters.",
        features: ['No-Figure-Out Brochures', 'Browse-To-Buy Catalogues', 'Noise-Removed Layouts', 'First-Page Clarity'],
        icon: <Printer className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'Digital & Web Design',
        subtitle: 'No one should land on your website and wonder what to do next.',
        description:
          'We create website and landing pages people understand without reading everything, UI that guides the eye from headline → message → action, and designs that replace confusion with clarity, section by section.',
        features: ['No-Read-All Pages', 'Eye-Guiding UI', 'Section Clarity', 'Confusion → Clarity'],
        icon: <MonitorPlay className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'Packaging & Merchandise',
        subtitle: 'Your product should get picked before the label gets read.',
        description:
          'We create packaging that stands out on a crowded shelf, merchandise people recognise instantly without checking the logo, and designs that show what your product is and why it matters.',
        features: ['Shelf-Standout', 'Logo-Free Recognition', 'Why-It-Matters Visuals', 'Pickup-First Design'],
        icon: <Package className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'Motion Graphics & Illustrations',
        subtitle: 'Clarity should come from the design, not from long explanations.',
        description:
          'We create motion graphics that show the idea in the first 3 seconds, illustrations that replace paragraphs with a single clear visual, and short visual stories that hold attention till the message lands.',
        features: ['3-Second Idea', 'Paragraph → Visual', 'Attention-Holding Stories', 'Message-Landing'],
        icon: <Film className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
    ],
  },
  cta: {
    title: "Good design isn't enough.",
    titleAccent: "Make it work the moment seen.",
    subtitle:
      "If people see it but don't act, something's missing. Contact us and let's make your design work the moment it's seen.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'What graphic design services do you offer?',
      a: 'We offer complete graphic design services, including branding, advertising creatives, website and UI design, packaging design, print materials, motion graphics, and illustrations.',
    },
    {
      q: 'Do you design for specific industries or all businesses?',
      a: 'We work with businesses across industries — especially brands that want:\n• More conversions from ads\n• Better-performing websites\n• Strong, consistent branding\nIf your business depends on people taking action, our design works.',
    },
    {
      q: 'Can you help improve my existing designs or only create new ones?',
      a: "Both. If your current designs aren't converting, we identify where people get confused, simplify the message, and redesign for clarity and action.",
    },
    {
      q: 'Do you offer branding along with graphic design?',
      a: 'Yes. We provide complete branding and visual identity design. This includes:\n• Logo design\n• Colour and typography systems\n• Brand guidelines for consistency\nSo your brand looks the same and is recognisable everywhere.',
    },
    {
      q: 'How long does a graphic design project take?',
      a: "It depends on the scope:\n• Ad creatives: a few days\n• Branding: 1–2 weeks\n• Website design: 2–4 weeks\nBut speed is not the priority — we don't rush designs that impact your business decisions.",
    },
    {
      q: 'Do your designs help increase conversions?',
      a: "Yes — that's the entire point. We design to reduce confusion, highlight the right message, and guide users toward action.",
    },
    {
      q: 'Do you create designs for ads and social media?',
      a: 'Yes. We design high-performing ad creatives for platforms like Instagram, Facebook, and more. Each design is built to stop the scroll, communicate instantly, and drive action.',
    },
    {
      q: 'Can you design websites and landing pages as well?',
      a: "Yes. We design conversion-focused websites and landing pages with clear structure, easy navigation, and strong call-to-action — so users don't have to think about what to do next.",
    },
  ],
};

// ─── TAB 8: WEBSITE DESIGN ──────────────────────────────────────────────────
export const webDesignData: ServicePageData = {
  slug: 'web-design',
  hero: {
    eyebrow: 'Website Design',
    titleLead: 'Customers understand',
    titleAccent: 'in seconds.',
    intro:
      "Most websites fail for one simple reason. They make customers work too hard to understand the business. We design websites where people don't scroll to figure things out — they instantly know what you do, who it's for, and what to do next.",
    videoUrl: HERO_VIDEOS.webDesign,
    gradientFrom: 'from-brand-teal',
    gradientVia: 'via-brand-purple',
    gradientTo: 'to-brand-magenta',
  },
  marqueeText: 'CONVERSION • MOBILE FIRST • FAST LOADING • CLEAR CTAs • CONSISTENT BRANDING •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'Pages built around',
    titleAccent: 'real drop-off points.',
    bullets: [
      'Pages that lead users step-by-step instead of making them wander.',
      'A mobile experience that works without pinching, zooming, or retrying.',
      'A backend where you can update content without calling a developer.',
      'Pages built around real user drop-off points, not design trends.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Every type of website.',
    titleAccent: 'Done right.',
    intro:
      "We create visuals that lead the viewer naturally — highlighting what's important, what stays with them, and what they should do next.",
    items: [
      {
        title: 'Static Website Design',
        subtitle: 'Fast, simple, and professional online presence.',
        description:
          'We design static websites that clearly present your services so people instantly understand what you offer, work smoothly and load fast across all devices, and require minimal maintenance.',
        features: ['Loads Extremely Fast', 'Clearly Presents Services', 'Works Across All Devices', 'Minimal Maintenance'],
        icon: <Globe className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'Dynamic Website Development',
        subtitle: 'Easy to manage and grows with your business.',
        description:
          'We build dynamic websites that let you add or edit pages from a simple dashboard, publish blogs instantly without writing code, and update images, text, and sections in minutes.',
        features: ['Edit Content Easily', 'Blog Publishing', 'No Developer Needed', 'Scales With You'],
        icon: <Zap className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'E-Commerce Website',
        subtitle: 'Your customer comes to decide quickly and buy without friction.',
        description:
          'Our e-commerce websites help your customers understand your product instantly without guessing, move from product to purchase without second-guessing, and trust the checkout enough to complete payment.',
        features: ['Instant Product Clarity', 'Frictionless Purchase', 'Simple Navigation', 'Secure Checkout'],
        icon: <ShoppingCart className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'UI/UX Website Design',
        subtitle: "Your visitors don't want to figure out your website.",
        description:
          'Our UI/UX design helps visitors move through your website with clear navigation, understand each page instantly with a simple logical structure, and find what they\'re looking for without searching or getting lost.',
        features: ['Clear Navigation', 'Logical Structure', 'Effortless Browsing', 'Highlights What Matters'],
        icon: <Layout className="h-6 w-6 text-white" />,
        color: '#3b82f6',
      },
      {
        title: 'Responsive Website Design',
        subtitle: 'Your customers switch between phone, tablet, and desktop.',
        description:
          'Our responsive design helps customers use your site smoothly on mobile, tablet, and desktop without glitches, get a consistent experience across all devices, and load pages quickly.',
        features: ['Mobile, Tablet & Desktop', 'Consistent Design', 'Fast Loading', 'No Broken Layouts'],
        icon: <Smartphone className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Custom Web Application',
        subtitle: 'Some businesses require more than a standard website.',
        description:
          'Our team develops custom web applications tailored to specific business needs using modern technologies such as React and Next.js — helping your platform get things done without waiting, reloading, or errors.',
        features: ['React & Next.js', 'Business-Specific', 'Smooth Experience', 'No Errors or Stops'],
        icon: <Rocket className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
      {
        title: 'Website Redesign',
        subtitle: "When your website feels outdated, customers don't complain — they just leave.",
        description:
          'We redesign websites so your customers can reach the next step without opening five tabs, stay engaged instead of dropping off halfway, and focus on your offer instead of getting distracted by the layout.',
        features: ['Improves Clarity', 'Fixes Drop-Off Points', 'Modernizes Design', 'Increases Engagement'],
        icon: <Search className="h-6 w-6 text-white" />,
        color: '#a855f7',
      },
    ],
  },
  cta: {
    title: 'Not every website works',
    titleAccent: 'for every business.',
    subtitle:
      "The wrong choice costs you time, money, and customers. Contact us and let's get it right from the start.",
    buttonText: 'Book Free Consultation',
  },
  faqs: [
    {
      q: 'How long does it take to design a website?',
      a: 'Most websites take 2 to 6 weeks, depending on complexity. A simple static website can be ready faster, while dynamic or e-commerce websites may take more time due to features and integrations.',
    },
    {
      q: 'What type of website is right for my business?',
      a: "It depends on your goal:\n• Static website → Best for simple presence\n• Dynamic website → Best if you want to update content regularly\n• E-commerce website → Best if you want to sell products online\nIf you're unsure, we guide you based on your business model and customer journey.",
    },
    {
      q: 'Will my website work properly on mobile devices?',
      a: 'Yes. Every website we build is mobile-first and fully responsive. Your customers will be able to:\n• Browse without zooming\n• Navigate easily\n• Take action quickly\nBecause most traffic today comes from mobile, this is non-negotiable.',
    },
    {
      q: 'Can I update my website without technical knowledge?',
      a: 'Absolutely. We build websites with a simple backend/dashboard, so you can edit text, upload images, and publish blogs.',
    },
    {
      q: 'Will my website be optimized for speed?',
      a: 'Yes. We design websites to load fast, reduce bounce rates, and keep visitors engaged. Even a 1-second delay can cost conversions.',
    },
    {
      q: 'Do you design websites for conversions or just looks?',
      a: "We don't design for looks alone. Every page is built to:\n• Guide users step-by-step\n• Reduce confusion\n• Increase action (calls, leads, sales)",
    },
    {
      q: 'What is the difference between UI/UX design and website design?',
      a: '• Website design focuses on overall structure and visuals\n• UI/UX design focuses on how users interact and move through the site',
    },
    {
      q: 'Can you redesign my existing website?',
      a: 'Yes. If your current website feels outdated, confuses visitors, or isn\'t converting, we redesign it to improve clarity, fix drop-off points, and increase engagement.',
    },
    {
      q: 'Do you offer SEO with website design?',
      a: 'Yes. We build websites with SEO fundamentals in place, including clean structure, fast loading speed, and proper headings and layout — so your website ranks better and attracts the right audience.',
    },
    {
      q: 'What happens after the website is launched?',
      a: 'After launch, you can manage content yourself and continue growing your website. We can also support you with updates, SEO, and performance improvements.',
    },
    {
      q: 'How much does a website cost?',
      a: 'Pricing depends on:\n• Type of website\n• Features required\n• Level of customization\nInstead of fixed packages, we recommend the right solution based on your needs.',
    },
    {
      q: 'Why is choosing the right website important?',
      a: "Because a wrong website doesn't just look bad — it loses customers silently. A clear, well-designed website builds trust instantly, guides decisions, and converts visitors into customers.",
    },
  ],
};

// ─── TAB 9: SEO ──────────────────────────────────────────────────────────────
export const seoServiceData: ServicePageData = {
  slug: 'seo',
  hero: {
    eyebrow: 'SEO Services',
    titleLead: 'In front of customers',
    titleAccent: 'when they search.',
    intro:
      'Most SEO fails because it chases numbers — traffic, rankings, impressions. We focus on putting you in front of customers the moment they type your solution on Google.',
    videoUrl: HERO_VIDEOS.seo,
    gradientFrom: 'from-brand-teal',
    gradientVia: 'via-brand-purple',
    gradientTo: 'to-brand-magenta',
  },
  marqueeText: 'KEYWORDS • ON-PAGE • TECHNICAL • OFF-PAGE • OPTIMISATION • COMPETITORS •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'Visibility where',
    titleAccent: 'decisions happen.',
    bullets: [
      'Your website appears right when someone searches for the exact solution you offer.',
      'Your link stands out on Google while competitors get ignored on the same page.',
      'Your content shows up when customers are comparing options across multiple tabs.',
      'Your site structure helps Google understand and rank your pages correctly.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Searches where',
    titleAccent: 'decisions happen.',
    intro:
      'Most SEO brings visitors who scroll and leave. We focus on searches where decisions are already happening.',
    items: [
      {
        title: 'Keyword Research',
        subtitle: "We don't chase high-volume keywords. We focus on why someone is searching.",
        description:
          'We identify keywords used when people are ready to compare or choose, real questions your customers type into Google, and keywords that lead directly to decisions.',
        features: ['Decision-Stage Keywords', 'Real Customer Questions', 'High-Intent Targets', 'No Volume Chasing'],
        icon: <Search className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'On-Page SEO',
        subtitle: "On-page SEO isn't about keyword stuffing. It's about helping users understand your page within seconds.",
        description:
          'We optimise page structure and headings, content that answers questions clearly, and CTAs that appear exactly at the moment a visitor is ready to decide.',
        features: ['Clear Page Structure', 'Question-Answering Content', 'Decision-Moment CTAs', 'Skim-Friendly Headings'],
        icon: <Eye className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'Technical SEO',
        subtitle: 'Good technical SEO goes unnoticed. Bad technical SEO makes visitors leave before the page loads.',
        description:
          'We fix site speed and mobile performance, indexing and crawl issues, and broken structure that confuses search engines and users.',
        features: ['Speed Fix', 'Indexing Audit', 'Crawl Issues', 'Mobile Performance'],
        icon: <Wrench className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'Off-Page SEO',
        subtitle: "We don't chase backlinks just to boost numbers. We build real trust signals.",
        description:
          'Our approach includes links placed on relevant websites where your audience already spends time, mentions that position your brand as a credible option, and consistent visibility across trusted platforms.',
        features: ['Audience-Aligned Links', 'Credibility Mentions', 'Trusted Platforms', 'Consistent Visibility'],
        icon: <Link2 className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'Web Page Optimisation',
        subtitle: 'Ranking a page is only half the job. The real goal is getting customers to take action.',
        description:
          "We optimise pages where doubts get resolved at the exact moment users pause and consider leaving, the page pulls attention to what matters, and the next step feels obvious.",
        features: ['Pause-Moment Doubts', 'Attention Direction', 'Obvious Next Step', 'Action-First Layout'],
        icon: <FileSearch className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Competitor Analysis',
        subtitle: "We don't follow competitors. We find what's bringing them customers and outrank them.",
        description:
          'We analyse exactly which Google searches are bringing them customers, spot pages where they rank but fail to convert, and find gaps where clearer content can outrank them.',
        features: ['Customer-Driving Searches', 'Convert-Failure Pages', 'Content-Gap Wins', 'Outrank Strategy'],
        icon: <BarChart className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
    ],
  },
  cta: {
    title: 'Get found when',
    titleAccent: 'it actually matters.',
    subtitle:
      'If your customers are already searching — the question is: will they find you or your competitor? Get a free SEO consultation and see where you\'re losing potential customers.',
    buttonText: 'Get Free SEO Consultation',
  },
  faqs: [
    {
      q: 'How long does SEO take to show results?',
      a: 'SEO is a long-term strategy, not an instant fix. In most cases, you may start noticing early improvements within 6–12 weeks, while more meaningful results like consistent traffic and enquiries typically build over 3–6 months. The exact timeline depends on your industry, competition, and current website condition.',
    },
    {
      q: 'Do you guarantee rankings on Google?',
      a: "No, and it's important to be cautious of anyone who does. Search rankings depend on multiple factors, many of which are outside direct control. What we focus on is building a structured, sustainable SEO strategy that improves your visibility and attracts the right audience over time.",
    },
    {
      q: 'How is your approach different from other SEO providers?',
      a: 'Most SEO efforts focus heavily on traffic numbers. Our approach is centred around search intent and conversions — helping your business appear when potential customers are actively evaluating their options, and guiding them toward taking action.',
    },
    {
      q: 'Will SEO work for my business?',
      a: 'If your customers use Google to research or compare before making a decision, SEO can be effective. It tends to work particularly well for service-based businesses, B2B companies, and brands where customers take time to evaluate options before choosing.',
    },
    {
      q: 'What do you need from us to get started?',
      a: 'We keep the process straightforward. Typically, we require access to your website, a basic understanding of your services, and any existing data you may have. From there, we handle the strategy, implementation, and ongoing improvements.',
    },
    {
      q: 'Do you focus only on rankings?',
      a: 'No. Rankings are only one part of the process. We also focus on how users interact with your website — including click-through rates, engagement, and how effectively your pages convert visitors into enquiries.',
    },
    {
      q: 'Can you work with our existing website?',
      a: "Yes, in most cases, we optimize your current website. If there are structural or technical limitations affecting performance, we'll highlight them and suggest practical improvements.",
    },
    {
      q: 'How do you measure success?',
      a: 'We look beyond traffic alone. Success is measured through a combination of relevant traffic, visibility for high-intent searches, and the number of enquiries or conversions generated.',
    },
    {
      q: 'Do you offer one-time SEO services or ongoing support?',
      a: 'SEO is most effective when treated as an ongoing process. Search behaviour, competition, and algorithms evolve, so continuous optimisation helps maintain and improve your position over time.',
    },
  ],
};
