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

// ─── VIDEO ASSETS (Pexels CDN - public CC0, swap for owned assets later) ────
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
    titleLead: "People don't stop to figure out",
    titleAccent: 'your content.',
    intro:
      "They scroll past it in seconds.\nWe make sure your content:\n• Stops people mid-scroll before they even realise it.\n• Communicates the message clearly within the first few seconds.\n• Stays in their mind even after they've moved to the next post.",
    videoUrl: HERO_VIDEOS.socialMedia,
  },
  marqueeText: 'INSTAGRAM • FACEBOOK • LINKEDIN • TWITTER (X) • YOUTUBE •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'What You',
    titleAccent: 'Will Get',
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
    title: 'Our Social Media Marketing',
    titleAccent: 'Services',
    intro:
      "We don't try to be everywhere.\nWe help you show up where your customers are already paying attention.",
    items: [
      {
        title: 'Instagram Marketing Services',
        subtitle: 'Turn your scrolling audience into people who pause, notice, and act.',
        description:
          'Our content helps your audience:\n• Stop on your post before the scroll continues.\n• Recognises your content instantly in a crowded feed.\n• Understand your message without reading twice.',
        features: ['Stops Mid-Scroll', 'Instant Recognition', 'Message Clear First Try'],
        icon: <Instagram className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'Facebook Marketing Services',
        subtitle: 'Turn everyday Facebook scrolling into meaningful conversations and genuine interest.',
        description:
          'Our content helps your audience:\n• Start Real conversations in the comments instead of empty reactions.\n• Your offer becomes clear without needing to click away.\n• Your message stays consistent whether seen through posts or ads.',
        features: ['Real Conversations', 'Clear Offer Inline', 'Consistent Messaging'],
        icon: <Facebook className="h-6 w-6 text-white" />,
        color: '#3b82f6',
      },
      {
        title: 'LinkedIn Marketing Services',
        subtitle: 'Turn silent LinkedIn profile views into inbound business conversations.',
        description:
          'Our content helps your audience:\n• Pause and read because the content speaks directly to their work and challenges.\n• Relevant visitors land on your profile with a clear intent to understand your offering.\n• Your expertise becomes obvious through consistent, thoughtful content.',
        features: ['Inbound Conversations', 'Speaks To Their Work', 'Obvious Expertise'],
        icon: <Linkedin className="h-6 w-6 text-white" />,
        color: '#0284c7',
      },
      {
        title: 'Twitter (X) Marketing Services',
        subtitle: 'Stay visible in a feed where attention disappears in seconds.',
        description:
          'Our content helps your audience:\n• Stop scrolling because your tweet feels worth reacting to.\n• Reply, quote, or engage instead of just passing by.\n• See your brand inside trends without it feeling forced.',
        features: ['Worth Reacting To', 'Quote-Worthy Replies', 'Natural Trend Fit'],
        icon: <Twitter className="h-6 w-6 text-white" />,
        color: '#0f172a',
      },
      {
        title: 'YouTube Marketing Services',
        subtitle: 'Turn random viewers into repeat watchers.',
        description:
          'Our content helps your audience:\n• Maintains interest throughout without giving a reason to click away.\n• Delivers the message clearly by the time the video ends.\n• Leaves a lasting impression beyond just one watch.',
        features: ['Holds Interest', 'Message Lands By End', 'Lasting Impression'],
        icon: <Youtube className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
    ],
  },
  cta: {
    title: 'Attention Is Won',
    titleAccent: 'in Seconds!',
    subtitle:
      "People are seeing content like yours every day.\nThe difference is, some get ignored, some get remembered.\nContact Us to Make Sure You're the One They Remember.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'What do your social media marketing services include?',
      a: 'Our social media marketing services include content strategy, post creation, brand consistency, and platform-specific content for Instagram, Facebook, LinkedIn, X (Twitter), and YouTube.',
    },
    {
      q: 'How are you different from other social media marketing agencies?',
      a: 'Most agencies focus on posting more content.\nWe focus on making every post instantly understandable and memorable.',
    },
    {
      q: 'Which platforms should my business focus on?',
      a: "You don't need to be everywhere.\nYou need to be where your audience is already paying attention.\nWe help you identify the right platforms, whether that's Instagram, LinkedIn, Facebook, X, or YouTube, based on your business model and target audience.",
    },
    {
      q: 'How long does it take to see results from social media marketing?',
      a: 'You may start seeing improvements in engagement and profile activity within a few weeks.\nHowever, consistent brand recognition, inbound inquiries, and strong results typically build over 60 to 90 days of structured posting.',
    },
    {
      q: 'Will you handle content creation completely?',
      a: 'Yes.\nWe handle content planning, writing, and creative direction to ensure your brand stays consistent and clear across all platforms.',
    },
    {
      q: 'Can you work with my existing brand guidelines?',
      a: 'Absolutely.\nIf you already have brand guidelines, we align with them.\nIf not, we help you build a consistent visual and communication style from scratch.',
    },
    {
      q: 'Do you offer paid ads along with organic social media marketing?',
      a: 'Yes.\nWe create content that works for both organic reach and paid campaigns, ensuring your messaging stays consistent across all touchpoints.',
    },
    {
      q: 'How do I get started with your social media marketing services?',
      a: "Simple.\nReach out to us, and we'll:\n• Understand your business\n• Identify your audience\n• Build a clear content strategy",
    },
  ],
};

// ─── TAB 2: MARKETING AUTOMATION ────────────────────────────────────────────
export const marketingAutomationData: ServicePageData = {
  slug: 'marketing-automation',
  hero: {
    eyebrow: 'Marketing Automation Services',
    titleLead: "Good marketing automation doesn't replace",
    titleAccent: 'human interaction.',
    intro:
      "It makes sure customers hear from you at the right time.\n\nWe design marketing automation systems that:\n• Sends instant, human-sounding replies.\n• Re-engages people who didn't convert.\n• Leads move step by step instead of getting lost or distracted.",
    videoUrl: HERO_VIDEOS.marketingAutomation,
    gradientFrom: 'from-brand-teal',
    gradientVia: 'via-brand-teal',
    gradientTo: 'to-brand-purple',
  },
  marqueeText: 'INSTANT REPLY • EMAIL & WHATSAPP • LEAD NURTURING • CRM • RE-ENGAGEMENT •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'What You',
    titleAccent: 'Will Get',
    bullets: [
      'Your follow-ups happen automatically without feeling repetitive.',
      'Your team always knows who to contact and what to say next.',
      'No interested lead goes silent without a timely response.',
      'Cold leads are re-engaged with the right message at the right moment.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Our Marketing Automation',
    titleAccent: 'Services',
    intro:
      "We don't set up random automations.\nWe fix the exact moments where leads slow down, lose interest, or disappear.",
    items: [
      {
        title: 'Lead Capture & Instant Response Systems',
        subtitle: "The moment someone fills your form or clicks your ad, they're comparing you with 3 other options.",
        description:
          'We build systems that:\n• Capture leads from forms, ads, and landing pages.\n• Send instant, human-sounding replies.\n• Acknowledge interest and guide the next step immediately.',
        features: ['Forms & Ads & LPs', 'Instant Reply', 'Human-Sounding'],
        icon: <Bot className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'Email & WhatsApp Automation Services',
        subtitle: "Your follow-up shouldn't feel like marketing. It should feel like someone actually typed it.",
        description:
          'We create email and WhatsApp automation workflows that:\n• Send replies within seconds.\n• Sounds like a real conversation.\n• Change based on what the user clicks, ignores, or replies.',
        features: ['Replies in Seconds', 'Real-Conversation Tone', 'Behaviour-Based'],
        icon: <Mail className="h-6 w-6 text-white" />,
        color: '#22c55e',
      },
      {
        title: 'Lead Nurturing Workflows',
        subtitle: "Not every lead is ready today. But they shouldn't be forgotten tomorrow.",
        description:
          "We design lead-nurturing systems where:\n• Doubts are addressed automatically.\n• Trust is built through proof and value.\n• Leads stay engaged until they're ready.",
        features: ['Addresses Doubts', 'Builds Trust', 'Stays Top-Of-Mind'],
        icon: <Workflow className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'Follow-Up Automation Systems',
        subtitle: 'Most sales are lost in the follow-up.',
        description:
          'We fix that with systems that:\n• Automatically follow up without being repetitive.\n• Adjust timing based on user behaviour.\n• No lead goes silent without a response from your side.',
        features: ['Non-Repetitive', 'Behaviour-Aware Timing', 'No Silent Leads'],
        icon: <Repeat className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'CRM Integration & Lead Management Systems',
        subtitle: "Your leads shouldn't live in spreadsheets, inboxes, and forgotten tabs.",
        description:
          'We make sure:\n• Every lead is tracked in one place.\n• Each lead is assigned a clear next action.\n• Follow-ups are tracked so nothing gets forgotten.',
        features: ['Single Source of Truth', 'Clear Next Actions', 'Tracked Follow-Ups'],
        icon: <Database className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'Re-Engagement Campaigns',
        subtitle: "Some leads go silent. That doesn't mean they're gone.",
        description:
          'We bring them back with:\n• Timely reminders and nudges.\n• Fresh messaging angles.\n• Relevant offers that restart the conversation.',
        features: ['Timely Nudges', 'Fresh Angles', 'Relevant Offers'],
        icon: <Activity className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Behaviour-Based Marketing Automation',
        subtitle: "Not all leads behave the same. Your system shouldn't treat them the same.",
        description:
          '• Send different messages based on what people click, ignore, or revisit.\n• Change the follow-up when behaviour changes.\n• Move leads forward only when they\'re ready.',
        features: ['Click/Ignore Triggers', 'Adaptive Follow-Up', 'Ready-Aware Routing'],
        icon: <GitBranch className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
    ],
  },
  cta: {
    title: 'Respond Faster Than',
    titleAccent: 'Your Competition!',
    subtitle:
      "The moment a lead shows interest, they're already considering other options.\nContact Us and Let's Build a System That Responds Instantly.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'What are marketing automation services?',
      a: 'Marketing automation services help businesses automate repetitive tasks like follow-ups, lead nurturing, and customer communication without losing the human touch.',
    },
    {
      q: 'How can marketing automation increase my sales?',
      a: "Most leads don't convert on the first interaction.\nAutomation ensures:\n• Instant responses.\n• Consistent follow-ups.\n• Timely nudges.",
    },
    {
      q: 'What tools do you use for marketing automation?',
      a: "We don't lock you into one tool.\nWe work with platforms that best fit your business, including CRM systems, email marketing tools, and WhatsApp automation platforms.",
    },
    {
      q: 'Is marketing automation suitable for small businesses?',
      a: 'Yes, and in fact, small businesses benefit the most.\nAutomation helps you:\n• Respond instantly without hiring a big team.\n• Stay consistent with follow-ups.\n• Compete with larger brands.',
    },
    {
      q: 'Will automation make my communication feel robotic?',
      a: "Not if it's done right.\nOur focus is on:\n• Human-sounding messages.\n• Behaviour-based personalisation.\n• Natural conversation flow.",
    },
    {
      q: 'What is the difference between email automation and WhatsApp automation?',
      a: '• Email automation is best for detailed communication, nurturing, and long-term engagement.\n• WhatsApp automation is best for instant responses, quick follow-ups, and high open rates.\nWe combine both for maximum impact.',
    },
    {
      q: 'How long does it take to set up marketing automation?',
      a: 'It depends on your business and complexity.\nTypically:\n• Basic setup: a few days.\n• Advanced workflows: 1 to 2 weeks.\nBut results start showing as soon as automation goes live.',
    },
    {
      q: 'Can you integrate automation with my existing CRM?',
      a: 'Yes.\nWe integrate with your current CRM so:\n• Leads are tracked properly.\n• Follow-ups are automated.\n• Your team always knows the next step.',
    },
    {
      q: "What happens to leads who don't convert immediately?",
      a: "We don't let them disappear.\nThey enter lead nurturing workflows where:\n• Their doubts are addressed.\n• They receive value-driven content.\n• They are re-engaged at the right time.",
    },
    {
      q: 'Do I need technical knowledge to use these systems?',
      a: "No.\nWe set everything up in a way that:\n• It is easy to understand.\n• Requires minimal manual effort.\n• Let's you focus on closing deals, not managing tools.",
    },
  ],
};

// ─── TAB 3: PERFORMANCE MARKETING ────────────────────────────────────────────
export const performanceMarketingData: ServicePageData = {
  slug: 'performance-marketing',
  hero: {
    eyebrow: 'Performance Marketing Services',
    titleLead: 'Spending money on ads takes seconds.',
    titleAccent: "Getting customers from them doesn't.",
    intro:
      'Our performance marketing campaigns are designed to:\n• Show your ads exactly when someone is actively searching for a solution like yours.\n• Align the promise in the ad with what the customer sees after clicking.\n• Help your customers decide quickly instead of second-guessing after they land.',
    videoUrl: HERO_VIDEOS.performanceMarketing,
    gradientFrom: 'from-brand-magenta',
    gradientVia: 'via-brand-purple',
    gradientTo: 'to-brand-teal',
  },
  marqueeText: 'GOOGLE • META • RETARGETING • ROAS • CONVERSION TRACKING •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'What You',
    titleAccent: 'Will Get',
    bullets: [
      'A campaign that makes sense the moment you look at it.',
      "A clear match between what's promised in the ad and what appears after the click.",
      "Complete visibility into what's working and what needs improvement.",
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Our Performance Marketing',
    titleAccent: 'Services',
    intro:
      "We don't run ads randomly.\nWe fix the exact points where campaigns waste money, lose attention, and fail to convert.",
    items: [
      {
        title: 'Ad Strategy & Funnel Planning',
        subtitle: 'Most paid advertising campaigns fail before they even start.',
        description:
          "We define:\n• Who you're targeting (and who you're not).\n• What your customer needs to see first to feel this is relevant for them.\n• What makes your customer click, and what gives them enough clarity to act.",
        features: ['Target Definition', 'Relevance Hooks', 'Action Triggers'],
        icon: <Target className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'Paid Ads Management (Google, Meta & More)',
        subtitle: 'Running ads takes seconds. Watching the wrong people click them costs you daily.',
        description:
          'We manage:\n• Your ad performance in a way that turns attention into real actions like enquiries, calls, and purchases.\n• Your ads should reach people who are already interested in what you offer.\n• Your campaigns across Google, Facebook, and Instagram, where your customers are already spending time.',
        features: ['Google + Meta', 'Real Actions', 'Right-Audience Reach'],
        icon: <MousePointerClick className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'Ad Copy & Creative',
        subtitle: "People don't analyse ads. They either get it or ignore it.",
        description:
          "We make sure your ads:\n• Help your customers understand your message the moment they see it.\n• Show your customers exactly what you're offering without making them guess.\n• Make clicking feel like the natural next move.",
        features: ['Instantly Understood', 'No-Guess Offers', 'Click-Worthy'],
        icon: <Megaphone className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'Conversion Tracking',
        subtitle: '"Which ad is actually working?" "Where is my money going?"',
        description:
          'We set up advanced conversion tracking systems where:\n• You can see exactly which ads are bringing real enquiries.\n• Identify where your budget is being spent without meaningful returns.\n• Understand which pages move customers forward and where they lose interest.',
        features: ['Real-Enquiry Attribution', 'Budget Heatmap', 'Page-Level Drop-Off'],
        icon: <BarChart3 className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'Retargeting Campaigns',
        subtitle: "Most customers don't convert the first time.",
        description:
          'We bring them back with:\n• Reminding your customers about what they already showed interest in.\n• Give your customers a stronger reason to come back and choose you.\n• Show your customers a clearer message the second time they see you.',
        features: ['Reminders That Work', 'Stronger Second-Look', 'Clearer Repeat Message'],
        icon: <Sparkles className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Smart Budget Control & Optimisation',
        subtitle: "Spending more doesn't fix bad campaigns.",
        description:
          "We make sure:\n• Your budget is focused on the ads that are actually bringing in the right customers.\n• Your money isn't wasted on ads your customers are ignoring.\n• Every amount you spend is tied to a clear outcome your business needs.",
        features: ['Right-Customer Spend', 'No-Waste Filters', 'Outcome-Tied Budget'],
        icon: <Wallet className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
    ],
  },
  cta: {
    title: 'Be There When Your Customers',
    titleAccent: 'Are Ready to Buy!',
    subtitle:
      "If your ads aren't turning into customers, something is broken.\nContact Us and Let's Fix Where Your Budget Is Leaking.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'What are performance marketing services?',
      a: 'Performance marketing services are digital advertising strategies where you only pay for measurable results such as clicks, leads, or sales.\nThese include platforms like Google Ads, Meta Ads, and other PPC channels focused on ROI-driven campaigns.',
    },
    {
      q: 'How is performance marketing different from traditional advertising?',
      a: 'Unlike traditional advertising, performance marketing focuses on measurable outcomes.\nInstead of paying for visibility alone, businesses pay for specific actions like conversions, leads, or purchases, making it more cost-effective and data-driven.',
    },
    {
      q: 'Which platforms are used in performance marketing?',
      a: 'Performance marketing typically includes platforms like Google Ads (Search, Display, YouTube), Meta Ads (Facebook and Instagram), and sometimes LinkedIn Ads or other PPC platforms, depending on the target audience.',
    },
    {
      q: 'How long does it take to see results from performance marketing?',
      a: 'You can start seeing initial results within a few days of launching campaigns.\nHowever, consistent and optimised performance marketing results usually take 2 to 4 weeks as data is collected and campaigns are refined.',
    },
    {
      q: 'What is PPC in performance marketing?',
      a: 'PPC (Pay-Per-Click) is a core part of performance marketing where advertisers pay only when someone clicks on their ad.\nIt ensures that your budget is spent on actual user engagement rather than just impressions.',
    },
    {
      q: 'How do you measure success in performance marketing campaigns?',
      a: 'Success is measured through key metrics like cost per lead (CPL), cost per acquisition (CPA), return on ad spend (ROAS), click-through rate (CTR), and overall conversion rates.',
    },
    {
      q: 'Why is conversion tracking important in performance marketing?',
      a: 'Conversion tracking helps identify which ads, campaigns, and keywords are generating actual results.\nWithout it, businesses cannot optimize their ad spend or improve performance effectively.',
    },
    {
      q: 'Do performance marketing campaigns guarantee sales?',
      a: 'No agency can guarantee sales, but a well-structured performance marketing strategy significantly increases the chances by targeting high-intent audiences, optimising campaigns, and improving conversion rates over time.',
    },
    {
      q: 'What budget is required for performance marketing?',
      a: 'The budget depends on your industry, competition, and goals.\nHowever, even small budgets can generate results if campaigns are strategically planned and optimised for high-intent audiences.',
    },
    {
      q: 'What is retargeting in performance marketing?',
      a: "Retargeting is a strategy that shows ads to users who have previously visited your website but didn't convert.\nIt helps bring back potential customers and increases overall conversion rates.",
    },
  ],
};

// ─── TAB 4: CONTENT MARKETING ────────────────────────────────────────────────
export const contentMarketingData: ServicePageData = {
  slug: 'content-marketing',
  hero: {
    eyebrow: 'Content Marketing Services',
    titleLead: "People don't read content to admire it.",
    titleAccent: 'They read it to decide something.',
    intro:
      "If your content doesn't convince them, someone else's will.\n\nHow Our Content Marketing Works:\n• We start by understanding what your customers are already searching for and struggling with.\n• We create content that answers their questions in a way that feels clear and genuinely useful.\n• We structure every piece so your customers gain confidence as they move through it.",
    videoUrl: HERO_VIDEOS.contentMarketing,
    gradientFrom: 'from-brand-purple',
    gradientVia: 'via-brand-magenta',
    gradientTo: 'to-brand-teal',
  },
  marqueeText: 'WEBSITE CONTENT • SEO • EDUCATIONAL • SOCIAL • EMAIL • STRATEGY •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'What You',
    titleAccent: 'Will Get',
    bullets: [
      'Content attracts people who are already looking for your solution.',
      'Messaging filters out unqualified leads before they waste your time.',
      'Brand voice stays consistent across every platform and format.',
      'Content continues working long after it is published.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Our Content Marketing',
    titleAccent: 'Services',
    intro:
      "Content marketing isn't one service.\nIt's a system.\nWe offer specific content services, each designed to remove a different type of hesitation.",
    items: [
      {
        title: 'Website Content Writing Services',
        subtitle: "Your website shouldn't make people think. It should make them act.",
        description:
          'We create website content that:\n• Make a first-time visitor understand what you do within 5 seconds.\n• Attracts the right audience and filters out the wrong ones.\n• Removes "I\'ll think about it" moments by answering doubts before they arise.',
        features: ['5-Second Clarity', 'Right-Audience Filter', 'Pre-Empts Doubts'],
        icon: <FileText className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'SEO Content Writing Services',
        subtitle: "Traffic that doesn't convert is just numbers on a screen. Intent is what drives revenue.",
        description:
          'We create SEO content that:\n• Targets high-intent, decision-stage keywords.\n• Ranks on search engines like Google.\n• Answers queries clearly and completely.\n• Brings visitors who are ready to take action.',
        features: ['High-Intent Keywords', 'Decision-Stage Focus', 'Ranks On Google'],
        icon: <Search className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'Educational Content Creation',
        subtitle: "People don't buy what they don't understand.",
        description:
          'We create educational content that:\n• Simplifies complex ideas\n• Explains your product or service clearly\n• Builds confidence before the sale\n• Positions your brand as the obvious choice',
        features: ['Simplifies Complex', 'Builds Confidence', 'Obvious-Choice Positioning'],
        icon: <BookOpen className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'Social Media Content Services',
        subtitle: "Posting daily doesn't build a brand. Being understood does.",
        description:
          "We create social content that:\n• Share one clear message per post so your audience doesn't get confused.\n• Helps people quickly understand what you do and why it matters to them.\n• Sounds like a real conversation, not a marketing message.",
        features: ['One Message Per Post', 'Clear Why-It-Matters', 'Conversational Tone'],
        icon: <Edit3 className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'Email Marketing Content Service',
        subtitle: "Leads don't convert instantly. They need the right message at the right moment.",
        description:
          "We create email sequences that:\n• Land in the inbox exactly when interest is highest.\n• Answer the exact doubt that's stopping the reply.\n• Move leads from the first click to a booked call.",
        features: ['Right-Moment Send', 'Doubt-Specific Answers', 'Click-To-Call Path'],
        icon: <Send className="h-6 w-6 text-white" />,
        color: '#22c55e',
      },
      {
        title: 'Content Strategy Services',
        subtitle: "Most content fails before it's written.",
        description:
          'We build a content strategy that:\n• Pinpoints the exact moments where customers pause, doubt, and leave.\n• Replaces random posting with a clear content plan for the next 30 to 60 days.\n• Ensures every piece of content has a purpose.',
        features: ['Drop-Off Mapping', '30 to 60 Day Plan', 'Purpose Per Piece'],
        icon: <ClipboardList className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Content Optimisation Services',
        subtitle: "You don't always need more content. Sometimes you just need to fix what's already there.",
        description:
          "We improve your existing content so customers:\n• Quickly understand what you're offering.\n• Find the right information without searching around.\n• Stop feeling confused or unsure.\n• Take action instead of leaving your page.",
        features: ['Clarity Lift', 'Findability Fix', 'Action Recovery'],
        icon: <RefreshCw className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
    ],
  },
  cta: {
    title: 'Your Content Is Being Read.',
    titleAccent: 'But Is It Convincing?',
    subtitle:
      "If it's not moving people closer to action, it's not working.\nContact Us and Let's Fix What Your Content Is Missing.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'What are content marketing services?',
      a: 'Content marketing services involve creating and distributing content that helps your audience understand your product.\n\nInstead of pushing sales, it guides customers step by step until choosing you feels natural.',
    },
    {
      q: 'How is content marketing different from traditional advertising?',
      a: 'Instead of telling people to buy, content marketing answers their questions, removes doubts, and builds trust, so they decide on their own.',
    },
    {
      q: 'Do content marketing services really help generate leads?',
      a: 'Yes, when done right.\nContent that targets the right intent attracts people who are already looking for solutions.\nThis means better-quality traffic, higher engagement, and more conversions.',
    },
    {
      q: 'How long does it take to see results from content marketing?',
      a: 'Content marketing is a long-term strategy, but early signs can appear within a few weeks.\n• SEO content: 2 to 4 months for consistent traffic growth.\n• Website content: immediate improvement in clarity and conversions.\n• Email & social content: faster engagement and response rates.',
    },
    {
      q: 'What type of content is best for my business?',
      a: 'It depends on where your customers are in their decision journey.\n• Just exploring: Educational content\n• Comparing options: SEO content\n• Ready to act: Website & email content\nWe help you create the right content for each stage.',
    },
    {
      q: 'How do you decide what content to create?',
      a: "We don't guess.\nWe analyse:\n• What your audience is searching for\n• Where they feel confused or hesitant\n• What information do they need to make a decision\nThen we turn that into structured content.",
    },
    {
      q: 'Will you handle content strategy as well?',
      a: 'Yes.\n\nFrom topic planning to execution, everything is aligned with your business goals.',
    },
    {
      q: 'Can you improve or optimise our existing content?',
      a: "Absolutely.\nSometimes you don't need new content, you need better content.\nWe refine your existing pages to:\n• Improve clarity\n• Fix structure\n• Increase conversions",
    },
    {
      q: 'Is content marketing suitable for small businesses?',
      a: 'Yes, especially for small businesses.\nContent helps you compete with bigger brands by building trust, authority, and visibility without relying only on ads.',
    },
    {
      q: 'How do I get started with your content marketing services?',
      a: "Simple.\nReach out to us, and we'll:\n• Understand your business\n• Identify gaps in your current content\n• Suggest a clear action plan",
    },
  ],
};

// ─── TAB 5: WEBSITE DEVELOPMENT ──────────────────────────────────────────────
export const webDevelopmentData: ServicePageData = {
  slug: 'web-development',
  hero: {
    eyebrow: 'Website Development Service',
    titleLead: 'Most websites lose customers in',
    titleAccent: 'small, invisible moments.',
    intro:
      "Your customer doesn't care how your website is built.\nIf your website is slow, confusing, or breaks under pressure, they leave.",
    videoUrl: HERO_VIDEOS.webDevelopment,
    gradientFrom: 'from-brand-teal',
    gradientVia: 'via-brand-purple',
    gradientTo: 'to-brand-magenta',
  },
  marqueeText: 'CMS • MOBILE APP • E-COMMERCE • CUSTOM SOFTWARE • CUSTOMISED •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'What You',
    titleAccent: 'Will Get',
    bullets: [
      "Pages that don't glitch, freeze, or break mid-click.",
      'A mobile experience that feels as smooth as scrolling Instagram.',
      'A backend that works quietly without constant fixes.',
      'A website that handles growth without slowing down or crashing.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Our Website Development',
    titleAccent: 'Services',
    intro: '',
    items: [
      {
        title: 'CMS Development Services',
        subtitle: "You shouldn't need a developer to update your own website.",
        description:
          'We build CMS-based websites where you can:\n• Update content without technical knowledge.\n• Add pages without breaking design or layout.\n• Stay in control without depending on anyone.',
        features: ['No Dev Needed', 'Safe Layout Changes', 'In-Your-Control'],
        icon: <Settings className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'Mobile App Development',
        subtitle: 'Apps should feel obvious from the first tap.',
        description:
          'We develop mobile apps that:\n• Make it clear what to do from the first screen.\n• Respond instantly without lag or delays.\n• Help users complete actions without getting stuck.',
        features: ['Obvious First Tap', 'Zero Lag', 'No Stuck States'],
        icon: <Smartphone className="h-6 w-6 text-white" />,
        color: '#3b82f6',
      },
      {
        title: 'E-commerce Development',
        subtitle: "Most e-commerce websites don't lose customers on price. They lose them in the experience.",
        description:
          'We build stores where:\n• Customers find the right product without endless scrolling.\n• Product pages answer questions before they hesitate.\n• Nothing distracts from completing the purchase.',
        features: ['Find Fast', 'Pre-Empts Hesitation', 'Distraction-Free Checkout'],
        icon: <ShoppingCart className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'Custom Software Development',
        subtitle: "Your team shouldn't waste time repeating the same tasks.",
        description:
          'We build systems where:\n• Your workflow is built directly into the software.\n• Repetitive tasks run automatically in the background.\n• Work moves forward without constant follow-ups.',
        features: ['Workflow-Native', 'Background Automation', 'No Follow-Up Loops'],
        icon: <Cpu className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'Website Development',
        subtitle: "A website should feel effortless to use, where people don't pause, reload, or second-guess.",
        description:
          "We build websites where:\n• Pages load before your customer even thinks of leaving.\n• Traffic spikes don't crash your site in the middle of a click.\n• Visitors don't scan, search, or struggle.",
        features: ['Pre-Empts Bounce', 'Spike-Resistant', 'Effortless UX'],
        icon: <Globe className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'Customised Development Solutions',
        subtitle: "Not every business fits into a template. Your solution shouldn't either.",
        description:
          'We create custom-built solutions that:\n• Solves specific problems instead of generic ones.\n• Fits your workflow instead of forcing changes.\n• Handle increasing demand as your business grows.',
        features: ['Specific-Problem Built', 'Workflow Fit', 'Demand-Ready'],
        icon: <Layers className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
    ],
  },
  cta: {
    title: 'Your Website Should Work',
    titleAccent: 'the Moment People Land on It!',
    subtitle:
      "When your website is smooth and clear, people stay, explore, and act.\nContact Us and Let's Build Something Your Customers Enjoy Using.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'How long does it take to develop a website?',
      a: 'The timeline depends on the complexity of your project.\nA standard business website typically takes 2 to 4 weeks, while custom or e-commerce websites may take 4 to 8 weeks or more.',
    },
    {
      q: 'How much do website development services cost?',
      a: 'The cost varies based on your requirements, features, and level of customisation.\nInstead of offering one-size-fits-all pricing, we build solutions based on:\n• Your business goals\n• Required features\n• Scalability needs\nThis ensures you only pay for what actually drives results.',
    },
    {
      q: 'Will my website be mobile-friendly?',
      a: 'Yes, every website we build is fully responsive.\nYour site will work smoothly across all devices, including smartphones and tablets, delivering an experience similar to apps like Instagram.',
    },
    {
      q: 'Can I update my website content myself?',
      a: "Absolutely.\nWith our CMS development, you'll be able to:\n• Edit text and images\n• Add new pages\n• Manage content easily\nNo technical knowledge required. No dependency on developers.",
    },
    {
      q: 'Do you provide e-commerce website development?',
      a: "Yes, we build high-performing e-commerce websites designed to convert visitors into customers.\nWe focus on:\n• Smooth navigation\n• Clear product pages\n• Frictionless checkout experience\nSo your customers don't drop off before completing a purchase.",
    },
    {
      q: 'Will my website be SEO-friendly?',
      a: 'Yes, our websites are built with SEO best practices from the ground up.\nThis includes:\n• Fast loading speed\n• Clean code structure\n• Mobile optimization\n• Proper heading and content structure\nSo your website is ready to rank on search engines like Google.',
    },
    {
      q: 'Can you redesign my existing website?',
      a: 'Yes.\nIf your current website is slow, outdated, or not converting, we can redesign it to:\n• Improve performance\n• Enhance user experience\n• Increase conversions\nWithout losing your existing brand identity.',
    },
    {
      q: 'Do you offer custom website development?',
      a: 'Yes, custom development is one of our core strengths.\nWe build solutions that:\n• Match your exact business requirements\n• Fit your workflow\n• Scale as your business grows',
    },
    {
      q: 'What happens after the website is launched?',
      a: 'We ensure your website runs smoothly even after launch.\nDepending on your needs, we can provide:\n• Ongoing support\n• Performance monitoring\n• Updates and improvements\nSo your website continues to perform without issues.',
    },
  ],
};

// ─── TAB 6: APP DEVELOPMENT ──────────────────────────────────────────────────
export const appDevelopmentData: ServicePageData = {
  slug: 'app-development',
  hero: {
    eyebrow: 'App Development Service',
    titleLead: 'Most apps are deleted within 24 hours',
    titleAccent: "because a confusing app doesn't get a second chance.",
    intro:
      "What You Will Get:\n• Each screen presents one clear action instead of multiple choices.\n• A consistent experience is delivered across Android, iOS, and all devices.\n• Decisions are based on real user behaviour, not assumptions.\n• The app remains stable with ongoing support after launch.\n\nTechnologies and Platforms We Work On:\n• iOS App Development.\n• Android App Development.\n• Cross-platform apps (Flutter / React Native).\n• Web applications & dashboards.",
    videoUrl: HERO_VIDEOS.appDevelopment,
    gradientFrom: 'from-brand-purple',
    gradientVia: 'via-brand-teal',
    gradientTo: 'to-brand-magenta',
  },
  marqueeText: 'iOS • ANDROID • FLUTTER • REACT NATIVE • WEB DASHBOARDS •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'What You',
    titleAccent: 'Will Get',
    bullets: [
      'Each screen presents one clear action instead of multiple choices.',
      'A consistent experience is delivered across Android, iOS, and all devices.',
      'Decisions are based on real user behaviour, not assumptions.',
      'The app remains stable with ongoing support after launch.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Our App Development',
    titleAccent: 'Services',
    intro: "We don't build apps with random features.\nWe build systems where every screen has a purpose.",
    items: [
      {
        title: 'Mobile App Development (iOS & Android)',
        subtitle: "We design and develop apps that don't make users stop and think.",
        description:
          "Here's what you get:\n• Same experience whether it's opened on Android or the latest iPhone.\n• Your users always see one obvious action instead of multiple choices.\n• Your app stays fast even as traffic spikes and user growth increases.",
        features: ['iOS + Android Parity', 'One Obvious Action', 'Spike-Resilient'],
        icon: <Smartphone className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'UI/UX Design',
        subtitle: "If a screen needs explanation, it's already broken. We design screens that guide users without effort.",
        description:
          "Here's what you get:\n• Every screen shows one clear action, or it gets redesigned.\n• Users know exactly where to tap without reading a single line.\n• Layouts guide users forward instead of making them explore.",
        features: ['One-Action Screens', 'Tap-Without-Reading', 'Forward-Guiding Layouts'],
        icon: <Layout className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'MVP Development',
        subtitle: 'We take your idea out of "almost ready" and into the real world.',
        description:
          "Here's what you get:\n• Your core product goes live in 4 to 6 weeks.\n• Every feature is built to show where users click, drop, and come back.\n• Your product reaches real users instead of staying stuck in development loops.",
        features: ['Live in 4 to 6 Weeks', 'Click & Drop Insights', 'Real-User Validation'],
        icon: <Rocket className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'App Redesign & Optimisation',
        subtitle: 'If users are dropping off, we find the exact screen and fix it.',
        description:
          '• We identify the exact screen where users drop off within the first few interactions.\n• We remove unnecessary steps that slow users down or cause hesitation.\n• We turn multi-step, confusing flows into clear, straight paths.',
        features: ['Drop-Off Pinpointing', 'Step Removal', 'Straight-Path Flows'],
        icon: <RefreshCw className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Backend Development & API Integration',
        subtitle: "Users don't see your backend, but they feel it the second something breaks.",
        description:
          "Here's what you get:\n• Data loads without users staring at a spinning loader.\n• Payments and logins complete without errors or retries.\n• APIs respond consistently even during traffic spikes.",
        features: ['No Spinner Hell', 'Reliable Payments/Logins', 'Spike-Stable APIs'],
        icon: <Server className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'App Maintenance & Support',
        subtitle: "Apps don't fail at launch. They fail when no one is fixing what breaks after.",
        description:
          "Here's what you get:\n• Issues are fixed before users report them.\n• Performance stays stable even when usage increases over time.\n• Bugs, crashes, and slowdowns are identified before they affect retention.",
        features: ['Pre-Report Fixes', 'Stable Long-Term', 'Crash Prevention'],
        icon: <LifeBuoy className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
      {
        title: 'Cross-Platform App Development',
        subtitle: "We build apps that behave the same no matter where they're opened. Your users don't notice the platform. They just use the app.",
        description:
          'Here\'s what you get:\n• Your app shows the same screen and flow on Android and iPhone.\n• Users never face "this works here but not there" moments.\n• Every update is rolled out to both platforms at the same time.',
        features: ['Same Flow Both Sides', 'No Platform Surprises', 'Synchronous Updates'],
        icon: <MonitorSmartphone className="h-6 w-6 text-white" />,
        color: '#22c55e',
      },
    ],
  },
  cta: {
    title: 'Most Apps Get Downloaded. Then Deleted.',
    titleAccent: "Yours shouldn't be one of them.",
    subtitle: "Contact Us and Let's Build an App People Keep Using.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'How much does app development cost?',
      a: 'App development cost depends on features, complexity, and platforms.\nA simple MVP can be built on a lower budget, while advanced apps with integrations, payments, and custom features require more investment.',
    },
    {
      q: 'How long does it take to build an app?',
      a: "Most apps don't fail because they're late, they fail because they're overbuilt.\nWe launch a functional MVP in 4 to 6 weeks, focused on real user actions.\nFull-scale apps may take longer depending on complexity.",
    },
    {
      q: 'What is MVP in app development?',
      a: 'MVP (Minimum Viable Product) is the first usable version of your app.\nIt includes only the features needed for users to take the first meaningful action.',
    },
    {
      q: 'Do you develop apps for both Android and iOS?',
      a: 'Yes.\nWe build apps for:\n• Android\n• iOS\n• Cross-platform (Flutter / React Native)\nYou get a consistent experience across all devices.',
    },
    {
      q: 'Will my app work on low-end devices?',
      a: 'Yes.\nWe build apps that perform smoothly across all devices, from budget smartphones to high-end flagships.',
    },
    {
      q: 'What makes your app development approach different?',
      a: 'Most agencies start with code.\nWe start with user behaviour.\n• We design before we develop\n• We map the user journey first\n• We remove confusion at every step',
    },
    {
      q: 'Can you redesign or improve my existing app?',
      a: 'Yes.\nIf users are dropping off, we:\n• Identify exactly where they leave\n• Simplify the flow\n• Fix confusing screens',
    },
    {
      q: 'Do you provide post-launch support?',
      a: "Absolutely.\nWe don't disappear after launch.\n• Regular updates\n• Bug fixes\n• Performance improvements\nApps fail after launch if no one maintains them, we make sure that doesn't happen.",
    },
    {
      q: 'Will my app be scalable as users grow?',
      a: "Yes.\nWe build apps with scalability in mind:\n• Fast performance under load\n• Stable backend architecture\n• Ready for growth from day one\nSo your app doesn't break when it starts working.",
    },
    {
      q: 'How do we get started?',
      a: "Simple.\nBook a free consultation.\nWell:\n• Understand your idea\n• Identify gaps\n• Show you the clearest path to build and launch",
    },
  ],
};

// ─── TAB 7: GRAPHIC DESIGN ───────────────────────────────────────────────────
export const graphicDesignData: ServicePageData = {
  slug: 'graphic-design',
  hero: {
    eyebrow: 'Graphic Design Services',
    titleLead: "Most graphic design services don't fail",
    titleAccent: 'because they look bad.',
    intro:
      'It fails because it makes people think too much.\n\nOur Approach:\n• Define the message Before Design Starts.\n• Remove unnecessary elements.\n• Structure the design for clarity.',
    videoUrl: HERO_VIDEOS.graphicDesign,
    gradientFrom: 'from-brand-magenta',
    gradientVia: 'via-brand-purple',
    gradientTo: 'to-brand-teal',
  },
  marqueeText: 'BRANDING • ADS • PRINT • WEB • PACKAGING • MOTION •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'What You',
    titleAccent: 'Will Get',
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
    title: 'Our Graphic Design',
    titleAccent: 'Services',
    intro: '',
    items: [
      {
        title: 'Branding & Visual Identity Design',
        subtitle: 'Your visuals should identify your brand before your name does.',
        description:
          "We create:\n• Logos that still look clear on a tiny mobile screen.\n• Colour and typography systems people can spot in a crowded feed.\n• A visual identity that looks the same whether it's your ad, website, or packaging.",
        features: ['Mobile-Crisp Logos', 'Spot-In-Feed Systems', 'Consistent Identity'],
        icon: <Brush className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'Marketing & Advertising Design',
        subtitle: 'Your design should communicate the offer before attention is lost.',
        description:
          'We create:\n• Ad creatives that explain your offer at a glance.\n• Campaign visuals where the headline, visual, and CTA point to the same action.\n• Designs built to turn scrolling into clicks and clicks into action.',
        features: ['Glance-Read Offers', 'Aligned Visual + CTA', 'Click-Driving'],
        icon: <Megaphone className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Print & Publication Design',
        subtitle: 'Your design should communicate clearly on the first page itself.',
        description:
          "We create:\n• Brochures people don't have to \"figure out\".\n• Catalogues that move from browsing to buying.\n• Layouts that remove noise and highlight what matters.",
        features: ['No-Figure-Out Brochures', 'Browse-To-Buy Catalogues', 'Noise-Removed Layouts'],
        icon: <Printer className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'Digital & Web Design',
        subtitle: 'No one should land on your website and wonder what to do next.',
        description:
          'We create:\n• Website and landing pages that people understand without reading everything.\n• UI that guides the eye from headline to message to action.\n• Designs that replace confusion with clarity, section by section.',
        features: ['No-Read-All Pages', 'Eye-Guiding UI', 'Section Clarity'],
        icon: <MonitorPlay className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'Packaging & Merchandise',
        subtitle: 'Your product should get picked before the label gets read.',
        description:
          'We create:\n• Packaging that stands out on a crowded shelf.\n• Merchandise people recognise instantly without checking the logo.\n• Designs that show what your product is and why it matters.',
        features: ['Shelf-Standout', 'Logo-Free Recognition', 'Why-It-Matters Visuals'],
        icon: <Package className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'Motion Graphics & Illustrations',
        subtitle: 'Clarity should come from the design, not from long explanations.',
        description:
          'We create:\n• Motion graphics that show the idea in the first 3 seconds.\n• Illustrations that replace paragraphs with a single clear visual.\n• Short visual stories that hold attention till the message lands.',
        features: ['3-Second Idea', 'Paragraph to Visual', 'Attention-Holding Stories'],
        icon: <Film className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
    ],
  },
  cta: {
    title: "Good Design Isn't Enough",
    titleAccent: "Anymore!",
    subtitle:
      "If people see it but don't act, something's missing.\nContact Us and Let's Make Your Design Work the Moment It's Seen.",
    buttonText: 'Contact Us',
  },
  faqs: [
    {
      q: 'What graphic design services do you offer?',
      a: 'We offer complete graphic design services, including branding, advertising creatives, website and UI design, packaging design, print materials, motion graphics, and illustrations.',
    },
    {
      q: 'Do you design for specific industries or all businesses?',
      a: 'We work with businesses across industries, especially brands that want:\n• More conversions from ads\n• Better-performing websites\n• Strong, consistent branding\nIf your business depends on people taking action, our design works.',
    },
    {
      q: 'Can you help improve my existing designs or only create new ones?',
      a: "Both.\nIf your current designs aren't converting, we:\n• Identify where people get confused\n• Simplify the message\n• Redesign for clarity and action",
    },
    {
      q: 'Do you offer branding along with graphic design?',
      a: 'Yes. We provide complete branding and visual identity design.\nThis includes:\n• Logo design\n• Colour and typography systems\n• Brand guidelines for consistency\nSo your brand looks the same and is recognisable everywhere.',
    },
    {
      q: 'How long does a graphic design project take?',
      a: "It depends on the scope.\n• Ad creatives: A few days\n• Branding: 1 to 2 weeks\n• Website design: 2 to 4 weeks\nBut speed is not the priority.\nWe don't rush designs that impact your business decisions.",
    },
    {
      q: 'Do your designs help increase conversions?',
      a: "Yes, that's the entire point.\nWe design to:\n• Reduce confusion\n• Highlight the right message\n• Guide users toward action",
    },
    {
      q: 'Do you create designs for ads and social media?',
      a: 'Yes. We design high-performing ad creatives for platforms like Instagram, Facebook, and more.\nEach design is built to:\n• Stop the scroll\n• Communicate instantly\n• Drive action',
    },
    {
      q: 'Can you design websites and landing pages as well?',
      a: "Yes. We design conversion-focused websites and landing pages.\nOur focus:\n• Clear structure\n• Easy navigation\n• Strong call-to-action\nSo users don't have to think about what to do next.",
    },
  ],
};

// ─── TAB 8: WEBSITE DESIGN ──────────────────────────────────────────────────
export const webDesignData: ServicePageData = {
  slug: 'web-design',
  hero: {
    eyebrow: 'Website Design Services',
    titleLead: 'Most websites fail for one simple reason.',
    titleAccent: 'They make customers work too hard.',
    intro:
      "What Makes Our Website Design Different:\nOur websites are designed to help businesses grow online by focusing on what actually matters.\n• Mobile-first designs that stay clear and usable on small screens.\n• Fast loading pages that don't lose visitors in the first few seconds.\n• Call-to-actions are placed where decisions actually happen.",
    videoUrl: HERO_VIDEOS.webDesign,
    gradientFrom: 'from-brand-teal',
    gradientVia: 'via-brand-purple',
    gradientTo: 'to-brand-magenta',
  },
  marqueeText: 'CONVERSION • MOBILE FIRST • FAST LOADING • CLEAR CTAs • CONSISTENT BRANDING •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'What You',
    titleAccent: 'Will Get',
    bullets: [
      'Pages that lead users step-by-step instead of making them wander.',
      'A mobile experience that works without pinching, zooming, or retrying.',
      'A backend where you can update content without calling a developer.',
      'Pages built around real user drop-off points, not design trends.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Our Website Design',
    titleAccent: 'Services',
    intro:
      "We create visuals that lead the viewer naturally, highlighting what's important, what stays with them, and what they should do next.",
    items: [
      {
        title: 'Static Website Design',
        subtitle: 'Perfect for businesses that need a fast, simple, and professional online presence.',
        description:
          'We design static websites that:\n• Clearly present your services so people instantly understand what you offer.\n• Work smoothly and load fast across all devices, so every visitor gets the same experience.\n• Require minimal maintenance so you can focus on your business, not on your website.',
        features: ['Loads Extremely Fast', 'Clearly Presents Services', 'Minimal Maintenance'],
        icon: <Globe className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'Dynamic Website Development',
        subtitle: 'Our dynamic website development services help you build websites that are easy to manage and can grow with your business.',
        description:
          'We build dynamic websites that:\n• Add or edit pages directly from a simple dashboard without developer support.\n• Publish blogs instantly without writing or touching a single line of code.\n• Update images, text, and sections in minutes whenever your content changes.',
        features: ['Edit Content Easily', 'Blog Publishing', 'No Developer Needed'],
        icon: <Zap className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'E-Commerce Website Development',
        subtitle: "Your customer doesn't come to explore. They come to decide quickly and buy without friction.",
        description:
          'Our e-commerce websites help your customers:\n• Understand your product instantly without zooming, rereading, or guessing.\n• Move from product to purchase without second-guessing.\n• Feel in control while browsing with clear options and simple navigation.\n• Trust the checkout enough to complete payment without hesitation.',
        features: ['Instant Product Clarity', 'Frictionless Purchase', 'Trusted Checkout'],
        icon: <ShoppingCart className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'UI/UX Website Design',
        subtitle: "Your visitors don't want to figure out your website. They want to find what they need without thinking.",
        description:
          "Our UI/UX design helps your visitors:\n• Move through your website with clear navigation that shows exactly where to go next.\n• Understand each page instantly with a simple, logical structure.\n• Find what they're looking for without searching or getting lost.\n• Notice what matters most without scanning the entire page.",
        features: ['Clear Navigation', 'Logical Structure', 'Highlights What Matters'],
        icon: <Layout className="h-6 w-6 text-white" />,
        color: '#3b82f6',
      },
      {
        title: 'Responsive Website Design',
        subtitle: "Your customers don't visit your website from just one device. They switch between phone, tablet, and desktop.",
        description:
          'Our responsive website design helps your customers:\n• Use your website smoothly on mobile, tablet, and desktop without glitches or broken layouts.\n• Get a consistent design experience across all devices.\n• Load pages quickly without waiting or refreshing again and again.',
        features: ['Mobile, Tablet & Desktop', 'Consistent Design', 'Fast Loading'],
        icon: <Smartphone className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Custom Web Application Development',
        subtitle: 'Some businesses require more than a standard website.',
        description:
          'Our team develops custom web applications tailored to specific business needs using modern technologies such as React and Next.js.\nThese solutions help your website:\n• Get things done without waiting, reloading, or dealing with errors.\n• Use features that feel natural instead of figuring out how things work.\n• Move through your platform smoothly without stopping or getting stuck.',
        features: ['React & Next.js', 'Business-Specific', 'Smooth Experience'],
        icon: <Rocket className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
      {
        title: 'Website Redesign Services',
        subtitle: "When your website feels outdated or confusing, your customers don't complain, they just leave.",
        description:
          'We redesign websites so your customers can:\n• Reach the next step without opening five tabs or going back and forth.\n• Stay engaged instead of dropping off halfway through the page.\n• Focus on your offer instead of getting distracted by the layout.',
        features: ['Improves Clarity', 'Fixes Drop-Off Points', 'Increases Engagement'],
        icon: <Search className="h-6 w-6 text-white" />,
        color: '#a855f7',
      },
    ],
  },
  cta: {
    title: 'Not Every Website Works',
    titleAccent: 'for Every Business!',
    subtitle:
      "The wrong choice costs you time, money, and customers.\nContact Us and Let's Get It Right From the Start.",
    buttonText: 'Book Free Consultation',
  },
  faqs: [
    {
      q: 'How long does it take to design a website?',
      a: 'Most websites take 2 to 6 weeks, depending on complexity.\nA simple static website can be ready faster, while dynamic or e-commerce websites may take more time due to features and integrations.',
    },
    {
      q: 'What type of website is right for my business?',
      a: "It depends on your goal:\n• Static website: Best for simple presence\n• Dynamic website: Best if you want to update content regularly\n• E-commerce website: Best if you want to sell products online\nIf you're unsure, we guide you based on your business model and customer journey.",
    },
    {
      q: 'Will my website work properly on mobile devices?',
      a: 'Yes. Every website we build is mobile-first and fully responsive.\nYour customers will be able to:\n• Browse without zooming\n• Navigate easily\n• Take action quickly\nBecause most traffic today comes from mobile, this is non-negotiable.',
    },
    {
      q: 'Can I update my website without technical knowledge?',
      a: 'Absolutely.\nWe build websites with a simple backend/dashboard, so you can:\n• Edit text\n• Upload images\n• Publish blogs',
    },
    {
      q: 'Will my website be optimized for speed?',
      a: 'Yes.\nWe design websites to:\n• Load fast\n• Reduce bounce rates\n• Keep visitors engaged\nBecause even a 1-second delay can cost conversions.',
    },
    {
      q: 'Do you design websites for conversions or just looks?',
      a: "We don't design for looks alone.\nEvery page is built to:\n• Guide users step-by-step\n• Reduce confusion\n• Increase action (calls, leads, sales)",
    },
    {
      q: 'What is the difference between UI/UX design and website design?',
      a: '• Website design focuses on overall structure and visuals\n• UI/UX design focuses on how users interact and move through the site',
    },
    {
      q: 'Can you redesign my existing website?',
      a: "Yes.\nIf your current website:\n• Feels outdated\n• Confuses visitors\n• Isn't converting\nWe redesigned it to:\n• Improve clarity\n• Fix drop-off points\n• Increase engagement",
    },
    {
      q: 'Do you offer SEO with website design?',
      a: 'Yes, we build websites with SEO fundamentals in place, including:\n• Clean structure\n• Fast loading speed\n• Proper headings and layout\nThis helps your website rank better and attract the right audience.',
    },
    {
      q: 'What happens after the website is launched?',
      a: 'After launch, you can:\n• Manage content yourself\n• Continue growing your website\nWe can also support you with:\n• Updates\n• SEO\n• Performance improvements',
    },
    {
      q: 'How much does a website cost?',
      a: 'Pricing depends on:\n• Type of website\n• Features required\n• Level of customization\nInstead of fixed packages, we recommend the right solution based on your needs.',
    },
    {
      q: 'Why is choosing the right website important?',
      a: "Because a wrong website doesn't just look bad, it loses customers silently.\nA clear, well-designed website:\n• Builds trust instantly\n• Guides decisions\n• Converts visitors into customers",
    },
  ],
};

// ─── TAB 9: SEO ──────────────────────────────────────────────────────────────
export const seoServiceData: ServicePageData = {
  slug: 'seo',
  hero: {
    eyebrow: 'SEO Services',
    titleLead: 'Most SEO fails because',
    titleAccent: 'it chases numbers.',
    intro:
      "• Traffic\n• Rankings\n• Impressions\n\nWe focus on putting you in front of customers the moment they type your solution on Google.\n\nWhat Happens When Our SEO Starts Working:\n• You stay visible every month instead of disappearing after a short spike.\n• Reach people while they are comparing options on different tabs.\n• Get the click while others get ignored on the same results page.",
    videoUrl: HERO_VIDEOS.seo,
    gradientFrom: 'from-brand-teal',
    gradientVia: 'via-brand-purple',
    gradientTo: 'to-brand-magenta',
  },
  marqueeText: 'KEYWORDS • ON-PAGE • TECHNICAL • OFF-PAGE • OPTIMISATION • COMPETITORS •',
  whatYouGet: {
    eyebrow: 'What You Will Get',
    title: 'What You',
    titleAccent: 'Will Get',
    bullets: [
      'Your website appears right when someone searches for the exact solution you offer.',
      'Your link stands out on Google while competitors get ignored on the same page.',
      'Your content shows up when customers are comparing options across multiple tabs.',
      'Your site structure helps Google understand and rank your pages correctly.',
    ],
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Our SEO',
    titleAccent: 'Services',
    intro:
      'Most SEO brings visitors who scroll and leave.\nWe focus on searches where decisions are already happening.',
    items: [
      {
        title: 'Keyword Research',
        subtitle: "We don't chase high-volume keywords. Instead, focus on why someone is searching.",
        description:
          'We identify:\n• Keywords used when people are ready to compare or choose.\n• Real questions your customers type into Google.\n• Keywords that lead directly to decisions.',
        features: ['Decision-Stage Keywords', 'Real Customer Questions', 'High-Intent Targets'],
        icon: <Search className="h-6 w-6 text-white" />,
        color: '#14b8a6',
      },
      {
        title: 'On-Page SEO',
        subtitle: "On-page SEO isn't about keyword stuffing. It's about helping users understand your page within seconds.",
        description:
          'We optimise:\n• Page structure and headings\n• Content that answers questions clearly\n• CTAs appear exactly at the moment a visitor is ready to decide.',
        features: ['Clear Page Structure', 'Question-Answering Content', 'Decision-Moment CTAs'],
        icon: <Eye className="h-6 w-6 text-white" />,
        color: '#0ea5e9',
      },
      {
        title: 'Technical SEO',
        subtitle: 'Good technical SEO goes unnoticed. Bad technical SEO makes visitors leave before the page even loads.',
        description:
          'We fix:\n• Site speed and mobile performance.\n• Indexing and crawl issues.\n• Broken structure that confuses search engines and users.',
        features: ['Speed Fix', 'Indexing Audit', 'Mobile Performance'],
        icon: <Wrench className="h-6 w-6 text-white" />,
        color: '#8b5cf6',
      },
      {
        title: 'Off-Page SEO',
        subtitle: "We don't chase backlinks just to boost numbers. We build real trust signals around your brand.",
        description:
          'Our approach includes:\n• Links placed on relevant websites where your audience already spends time.\n• Mentions that position your brand as a credible option, not just another link.\n• Consistent visibility across trusted platforms instead of one-time spikes.',
        features: ['Audience-Aligned Links', 'Credibility Mentions', 'Trusted Platforms'],
        icon: <Link2 className="h-6 w-6 text-white" />,
        color: '#ec4899',
      },
      {
        title: 'Web Page Optimisation',
        subtitle: 'Ranking a page is only half the job. The real goal is getting customers to take action.',
        description:
          'We optimise pages where:\n• Doubts get resolved at the exact moment users pause and consider leaving.\n• The page pulls attention to what matters instead of making users scan everything.\n• The next step feels obvious instead of forcing users to decide what to do.',
        features: ['Pause-Moment Doubts', 'Attention Direction', 'Obvious Next Step'],
        icon: <FileSearch className="h-6 w-6 text-white" />,
        color: '#f59e0b',
      },
      {
        title: 'Competitor Analysis',
        subtitle: "We don't follow competitors. We find what's bringing them customers and outrank them where it matters.",
        description:
          'We analyse:\n• Exactly which Google searches are bringing them customers.\n• Spot the pages where they rank but fail to convert visitors.\n• Find gaps where clearer content can outrank them.',
        features: ['Customer-Driving Searches', 'Convert-Failure Pages', 'Content-Gap Wins'],
        icon: <BarChart className="h-6 w-6 text-white" />,
        color: '#ef4444',
      },
    ],
  },
  cta: {
    title: 'Get Found When',
    titleAccent: 'It Actually Matters',
    subtitle:
      "If your customers are already searching, the question is: will they find you or your competitor?\nGet a free SEO consultation and see where you're losing potential customers.",
    buttonText: 'Get Free SEO Consultation',
  },
  faqs: [
    {
      q: 'How long does SEO take to show results?',
      a: 'SEO is a long-term strategy, not an instant fix.\nIn most cases, you may start noticing early improvements within 6 to 12 weeks, while more meaningful results like consistent traffic and enquiries typically build over 3 to 6 months. The exact timeline depends on your industry, competition, and current website condition.',
    },
    {
      q: 'Do you guarantee rankings on Google?',
      a: "No, and it's important to be cautious of anyone who does.\nSearch rankings depend on multiple factors, many of which are outside direct control. What we focus on is building a structured, sustainable SEO strategy that improves your visibility and attracts the right audience over time.",
    },
    {
      q: 'How is your approach different from other SEO providers?',
      a: 'Most SEO efforts focus heavily on traffic numbers.\nOur approach is centred around search intent and conversions, helping your business appear when potential customers are actively evaluating their options, and guiding them toward taking action.',
    },
    {
      q: 'Will SEO work for my business?',
      a: 'If your customers use Google to research or compare before making a decision, SEO can be effective.\nIt tends to work particularly well for service-based businesses, B2B companies, and brands where customers take time to evaluate options before choosing.',
    },
    {
      q: 'What do you need from us to get started?',
      a: 'We keep the process straightforward.\n\nTypically, we require access to your website, a basic understanding of your services, and any existing data you may have. From there, we handle the strategy, implementation, and ongoing improvements.',
    },
    {
      q: 'Do you focus only on rankings?',
      a: 'No. Rankings are only one part of the process.\nWe also focus on how users interact with your website, including click-through rates, engagement, and how effectively your pages convert visitors into enquiries.',
    },
    {
      q: 'Can you work with our existing website?',
      a: "Yes, in most cases, we optimize your current website.\nIf there are structural or technical limitations affecting performance, we'll highlight them and suggest practical improvements.",
    },
    {
      q: 'How do you measure success?',
      a: 'We look beyond traffic alone.\nSuccess is measured through a combination of relevant traffic, visibility for high-intent searches, and the number of enquiries or conversions generated.',
    },
    {
      q: 'Do you offer one-time SEO services or ongoing support?',
      a: 'SEO is most effective when treated as an ongoing process.\nSearch behaviour, competition, and algorithms evolve, so continuous optimisation helps maintain and improve your position over time.',
    },
  ],
};
