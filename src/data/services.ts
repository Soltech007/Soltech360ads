import {
  Search,
  Server,
  Shield,
  Share2,
  Target,
  MessageCircle,
  Palette,
  Globe,
  Code,
  Smartphone,
  ShoppingCart,
  Video,
  PenTool,
  BarChart3,
  Mail,
  ExternalLink,
} from "lucide-react";

export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  icon: any;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  features: ServiceFeature[];
  stats: ServiceStat[];
  process: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  color: string;
  bgColor: string;
  isExternal?: boolean;
  externalLink?: string;
}

export const services: Service[] = [
  {
    id: "website-development",
    icon: Code,
    title: "Website Design & Development",
    shortTitle: "Websites",
    subtitle: "Build Your Digital Foundation",
    description:
      "Custom, responsive websites that convert visitors into customers with modern design and seamless functionality.",
    longDescription:
      "We create stunning, high-performance websites tailored to your business needs. From simple landing pages to complex web applications, our team delivers pixel-perfect designs with clean code that ranks well on search engines and converts visitors into loyal customers.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
    features: [
      { title: "Custom Design", desc: "Unique, brand-aligned aesthetics" },
      { title: "Responsive", desc: "Perfect on all devices" },
      { title: "Fast Loading", desc: "Optimized performance" },
      { title: "SEO Ready", desc: "Built for visibility" },
      { title: "CMS Integration", desc: "Easy content management" },
      { title: "Security", desc: "SSL & best practices" },
    ],
    stats: [
      { value: "500+", label: "Websites Built" },
      { value: "99%", label: "Client Satisfaction" },
      { value: "<2s", label: "Load Time" },
    ],
    process: [
      "Discovery & requirements gathering",
      "Wireframing & design mockups",
      "Development & coding",
      "Content integration",
      "Testing & QA",
      "Launch & support",
    ],
    benefits: [
      "Increase brand credibility and trust",
      "Generate more leads and sales",
      "Provide 24/7 customer access",
      "Outperform competitors online",
      "Easy to update and manage",
    ],
    faqs: [
      {
        question: "How long does it take to build a website?",
        answer: "Typically 2-6 weeks depending on complexity. Simple sites take 2-3 weeks, while complex web applications may take 6-8 weeks.",
      },
      {
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops.",
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer various maintenance packages to keep your website secure, updated, and running smoothly.",
      },
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: "seo-optimization",
    icon: Search,
    title: "SEO & Performance Optimization",
    shortTitle: "SEO",
    subtitle: "Rank Higher, Get Found",
    description:
      "Data-driven SEO strategies to improve your search rankings and drive organic traffic to your website.",
    longDescription:
      "Our comprehensive SEO services go beyond keywords. We analyze your entire digital presence, optimize technical aspects, create valuable content, and build quality backlinks to establish your authority and drive sustainable organic growth.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    features: [
      { title: "Technical SEO", desc: "Site structure optimization" },
      { title: "Keyword Research", desc: "Target high-intent terms" },
      { title: "Content Strategy", desc: "Valuable, optimized content" },
      { title: "Link Building", desc: "Quality backlinks" },
      { title: "Local SEO", desc: "Dominate local search" },
      { title: "Analytics", desc: "Track & measure results" },
    ],
    stats: [
      { value: "300%", label: "Avg Traffic Increase" },
      { value: "#1", label: "Page Rankings" },
      { value: "150+", label: "Keywords Ranked" },
    ],
    process: [
      "Comprehensive website audit",
      "Competitor analysis",
      "Keyword research & strategy",
      "On-page optimization",
      "Content creation & optimization",
      "Link building & outreach",
    ],
    benefits: [
      "Increase organic website traffic",
      "Higher search engine rankings",
      "Better user experience",
      "Long-term sustainable results",
      "Higher ROI than paid ads",
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer: "SEO is a long-term strategy. You may see initial improvements in 3-4 months, with significant results typically appearing in 6-12 months.",
      },
      {
        question: "Do you guarantee #1 rankings?",
        answer: "No ethical SEO company can guarantee #1 rankings. We focus on sustainable strategies that improve visibility and drive qualified traffic.",
      },
      {
        question: "What's included in your SEO services?",
        answer: "Our SEO services include technical audits, on-page optimization, content strategy, link building, local SEO, and monthly reporting.",
      },
    ],
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    id: "social-media-marketing",
    icon: Share2,
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    subtitle: "Build Your Community",
    description:
      "Strategic social media management to build brand awareness, engage audiences, and drive conversions.",
    longDescription:
      "Transform your social media presence from ordinary to extraordinary. Our data-driven approach combines creative content with strategic targeting to build engaged communities, increase brand awareness, and drive measurable business results across all major platforms.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    features: [
      { title: "Platform Strategy", desc: "Channel-specific plans" },
      { title: "Content Creation", desc: "Engaging posts & reels" },
      { title: "Community Management", desc: "Active engagement" },
      { title: "Paid Social Ads", desc: "Targeted campaigns" },
      { title: "Influencer Marketing", desc: "Strategic partnerships" },
      { title: "Analytics", desc: "Performance insights" },
    ],
    stats: [
      { value: "500%", label: "Engagement Boost" },
      { value: "10M+", label: "Reach Generated" },
      { value: "150+", label: "Brands Managed" },
    ],
    process: [
      "Brand & audience analysis",
      "Content strategy development",
      "Creative production",
      "Scheduling & publishing",
      "Community engagement",
      "Performance optimization",
    ],
    benefits: [
      "Increase brand awareness",
      "Build customer loyalty",
      "Drive website traffic",
      "Generate leads and sales",
      "Gain valuable customer insights",
    ],
    faqs: [
      {
        question: "Which social media platforms should I be on?",
        answer: "It depends on your target audience. We analyze where your customers spend their time and focus efforts on the most impactful platforms for your business.",
      },
      {
        question: "How often should I post on social media?",
        answer: "Quality over quantity! We recommend posting consistently based on platform best practices - typically 3-5 times per week for most platforms.",
      },
      {
        question: "Can you handle negative comments?",
        answer: "Yes, our community management includes monitoring and responding to all comments, including addressing negative feedback professionally.",
      },
    ],
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
  {
    id: "google-meta-ads",
    icon: Target,
    title: "Google & Meta Ads",
    shortTitle: "Paid Ads",
    subtitle: "Targeted Advertising",
    description:
      "High-performance PPC campaigns that deliver qualified leads and maximize your advertising ROI.",
    longDescription:
      "Maximize your advertising ROI with our expert-managed PPC campaigns. We combine advanced targeting, compelling creatives, and continuous optimization to deliver qualified leads at the lowest possible cost across Google, Facebook, Instagram, and more.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    features: [
      { title: "Campaign Strategy", desc: "Goal-aligned planning" },
      { title: "Keyword Research", desc: "High-intent targeting" },
      { title: "Ad Copywriting", desc: "Compelling creatives" },
      { title: "Landing Pages", desc: "Conversion-optimized" },
      { title: "Retargeting", desc: "Re-engage visitors" },
      { title: "A/B Testing", desc: "Continuous improvement" },
    ],
    stats: [
      { value: "4.5x", label: "Average ROAS" },
      { value: "₹50Cr+", label: "Ad Spend Managed" },
      { value: "-40%", label: "Lower CPA" },
    ],
    process: [
      "Account audit & strategy",
      "Campaign structure setup",
      "Creative development",
      "Launch & monitoring",
      "A/B testing & optimization",
      "Scaling successful campaigns",
    ],
    benefits: [
      "Immediate visibility and traffic",
      "Precise audience targeting",
      "Measurable results and ROI",
      "Flexible budget control",
      "Quick market testing",
    ],
    faqs: [
      {
        question: "What budget do I need for Google Ads?",
        answer: "We recommend starting with at least ₹30,000-50,000/month to gather enough data for optimization. Budget varies based on industry and competition.",
      },
      {
        question: "How soon will I see results from ads?",
        answer: "You can see traffic immediately after launch. However, we recommend 2-3 months to fully optimize campaigns for best performance.",
      },
      {
        question: "Do you manage both Google and Meta ads?",
        answer: "Yes, we're certified partners for both Google Ads and Meta (Facebook/Instagram) advertising platforms.",
      },
    ],
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    id: "branding-design",
    icon: Palette,
    title: "Branding & Identity Design",
    shortTitle: "Branding",
    subtitle: "Define Your Brand",
    description:
      "Complete brand identity solutions from logo design to brand guidelines that make you unforgettable.",
    longDescription:
      "Create a memorable brand identity that resonates with your audience. From logo design to complete brand systems, we help you stand out in a crowded marketplace and build lasting connections with your customers through strategic visual storytelling.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    features: [
      { title: "Logo Design", desc: "Memorable brand marks" },
      { title: "Brand Identity", desc: "Complete visual system" },
      { title: "Brand Guidelines", desc: "Consistency rules" },
      { title: "Marketing Materials", desc: "Print & digital assets" },
      { title: "Packaging Design", desc: "Product presentation" },
      { title: "Brand Strategy", desc: "Positioning & messaging" },
    ],
    stats: [
      { value: "200+", label: "Brands Created" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "Award", label: "Winning Designs" },
    ],
    process: [
      "Discovery & research",
      "Brand strategy development",
      "Concept exploration",
      "Design refinement",
      "Final deliverables",
      "Brand guidelines",
    ],
    benefits: [
      "Stand out from competitors",
      "Build customer trust and loyalty",
      "Create consistent brand experience",
      "Increase perceived value",
      "Attract your ideal customers",
    ],
    faqs: [
      {
        question: "What's included in a brand identity package?",
        answer: "Our packages typically include logo design, color palette, typography, brand guidelines, business cards, letterhead, and social media templates.",
      },
      {
        question: "How many logo concepts will I receive?",
        answer: "We typically present 3-5 unique logo concepts based on our discovery process, then refine your chosen direction.",
      },
      {
        question: "Do I own the final designs?",
        answer: "Yes, upon final payment you receive full ownership and rights to all deliverables including source files.",
      },
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    id: "content-marketing",
    icon: PenTool,
    title: "Content Marketing",
    shortTitle: "Content",
    subtitle: "Tell Your Story",
    description:
      "Strategic content creation that educates, engages, and converts your target audience.",
    longDescription:
      "Content is king, and we help you rule. Our content marketing services include blog posts, articles, infographics, videos, and more - all designed to attract, engage, and convert your target audience while establishing your brand as an industry authority.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    features: [
      { title: "Blog Writing", desc: "SEO-optimized articles" },
      { title: "Copywriting", desc: "Persuasive sales copy" },
      { title: "Video Content", desc: "Engaging video production" },
      { title: "Infographics", desc: "Visual storytelling" },
      { title: "Email Content", desc: "Newsletter campaigns" },
      { title: "Social Content", desc: "Platform-specific posts" },
    ],
    stats: [
      { value: "1000+", label: "Articles Written" },
      { value: "3x", label: "More Engagement" },
      { value: "50%", label: "Lead Increase" },
    ],
    process: [
      "Content audit & strategy",
      "Topic research & planning",
      "Content creation",
      "Editing & optimization",
      "Publishing & promotion",
      "Performance analysis",
    ],
    benefits: [
      "Establish thought leadership",
      "Improve SEO rankings",
      "Generate qualified leads",
      "Build audience trust",
      "Support sales process",
    ],
    faqs: [
      {
        question: "How often should I publish new content?",
        answer: "Consistency is key. We recommend at least 2-4 blog posts per month, plus regular social media content to maintain engagement.",
      },
      {
        question: "Do you handle content strategy or just writing?",
        answer: "We provide end-to-end content marketing including strategy, creation, optimization, and performance tracking.",
      },
      {
        question: "Can you write for technical industries?",
        answer: "Yes, our team includes writers with expertise in various industries including tech, healthcare, finance, and more.",
      },
    ],
    color: "text-indigo-600",
    bgColor: "bg-indigo-100",
  },
  {
    id: "email-whatsapp-marketing",
    icon: MessageCircle,
    title: "Email & WhatsApp Marketing",
    shortTitle: "Email & WhatsApp",
    subtitle: "Direct Communication",
    description:
      "Automated messaging campaigns that nurture leads and drive repeat customers.",
    longDescription:
      "Build lasting customer relationships with personalized messaging across email and WhatsApp. Our automation workflows nurture leads, recover abandoned carts, onboard new customers, and keep your brand top-of-mind with targeted, timely communications.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&q=80",
    features: [
      { title: "Email Automation", desc: "Trigger-based flows" },
      { title: "WhatsApp API", desc: "Business messaging" },
      { title: "Drip Campaigns", desc: "Nurture sequences" },
      { title: "Personalization", desc: "Dynamic content" },
      { title: "Segmentation", desc: "Targeted lists" },
      { title: "Analytics", desc: "Open & click tracking" },
    ],
    stats: [
      { value: "45%", label: "Avg Open Rate" },
      { value: "12%", label: "Click Rate" },
      { value: "25%", label: "Revenue Lift" },
    ],
    process: [
      "List audit & segmentation",
      "Workflow design",
      "Template creation",
      "Automation setup",
      "Testing & launch",
      "Performance optimization",
    ],
    benefits: [
      "Direct customer communication",
      "High ROI marketing channel",
      "Personalized messaging at scale",
      "Automated lead nurturing",
      "Increased customer retention",
    ],
    faqs: [
      {
        question: "Is WhatsApp marketing effective?",
        answer: "Yes! WhatsApp has 98% open rates compared to 20% for email. It's perfect for transactional messages, support, and promotional campaigns.",
      },
      {
        question: "How do you build email lists?",
        answer: "We help you grow your list through lead magnets, opt-in forms, landing pages, and compliant list-building strategies.",
      },
      {
        question: "Can you integrate with our CRM?",
        answer: "Yes, we integrate with popular CRMs and marketing platforms including HubSpot, Salesforce, Mailchimp, and more.",
      },
    ],
    color: "text-teal-600",
    bgColor: "bg-teal-100",
  },
  {
    id: "ecommerce-solutions",
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    shortTitle: "E-Commerce",
    subtitle: "Sell Online Successfully",
    description:
      "Complete e-commerce solutions from store setup to marketing that drive sales and growth.",
    longDescription:
      "Launch and scale your online store with our comprehensive e-commerce solutions. From Shopify and WooCommerce setup to product optimization and marketing, we help you create a seamless shopping experience that converts browsers into buyers.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    features: [
      { title: "Store Setup", desc: "Shopify, WooCommerce" },
      { title: "Product Pages", desc: "Conversion-optimized" },
      { title: "Payment Integration", desc: "Multiple gateways" },
      { title: "Inventory Management", desc: "Stock tracking" },
      { title: "Order Fulfillment", desc: "Shipping setup" },
      { title: "Analytics", desc: "Sales tracking" },
    ],
    stats: [
      { value: "200+", label: "Stores Launched" },
      { value: "35%", label: "Conversion Lift" },
      { value: "₹100Cr+", label: "Revenue Generated" },
    ],
    process: [
      "Requirements analysis",
      "Platform selection",
      "Store design & setup",
      "Product upload & optimization",
      "Payment & shipping setup",
      "Launch & marketing",
    ],
    benefits: [
      "Sell 24/7 globally",
      "Reduce operational costs",
      "Scale without limits",
      "Detailed customer insights",
      "Multiple revenue streams",
    ],
    faqs: [
      {
        question: "Which e-commerce platform is best?",
        answer: "It depends on your needs. Shopify is great for simplicity, WooCommerce for WordPress users, and custom solutions for complex requirements.",
      },
      {
        question: "Can you migrate my existing store?",
        answer: "Yes, we handle complete store migrations including products, customers, and order history with minimal downtime.",
      },
      {
        question: "Do you help with product photography?",
        answer: "We can connect you with professional product photographers or provide guidelines for DIY photography that converts.",
      },
    ],
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
  },
  {
    id: "video-production",
    icon: Video,
    title: "Video Production & Editing",
    shortTitle: "Video",
    subtitle: "Visual Storytelling",
    description:
      "Professional video content for ads, social media, and brand storytelling.",
    longDescription:
      "Video is the most engaging content format. We produce high-quality video content including commercials, social media videos, explainers, testimonials, and more that capture attention and drive action.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
    features: [
      { title: "Commercial Videos", desc: "Brand advertising" },
      { title: "Social Media Videos", desc: "Reels & shorts" },
      { title: "Explainer Videos", desc: "Product demos" },
      { title: "Testimonials", desc: "Customer stories" },
      { title: "Animation", desc: "Motion graphics" },
      { title: "Editing", desc: "Post-production" },
    ],
    stats: [
      { value: "500+", label: "Videos Produced" },
      { value: "10M+", label: "Views Generated" },
      { value: "4K", label: "Quality Standard" },
    ],
    process: [
      "Concept development",
      "Script writing",
      "Pre-production planning",
      "Filming/Animation",
      "Editing & post-production",
      "Delivery & optimization",
    ],
    benefits: [
      "Higher engagement rates",
      "Better message retention",
      "Increased conversions",
      "Improved SEO performance",
      "Shareable content",
    ],
    faqs: [
      {
        question: "What types of videos do you create?",
        answer: "We create all types including brand videos, product demos, social media content, testimonials, animations, and more.",
      },
      {
        question: "Do you handle scripting and concepts?",
        answer: "Yes, our creative team handles everything from concept development to final delivery.",
      },
      {
        question: "What's the typical turnaround time?",
        answer: "Simple edits take 2-3 days, while full production videos typically take 2-4 weeks depending on complexity.",
      },
    ],
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
];

// External Partner Services (redirect to external sites)
export const externalServices = [
  {
    id: "domain-registration",
    icon: Globe,
    title: "Domain Registration",
    shortTitle: "Domains",
    description: "Register your perfect domain name with our trusted partner",
    externalLink: "https://www.hostinger.in/domain-name-search",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: "hosting-services",
    icon: Server,
    title: "Web Hosting",
    shortTitle: "Hosting",
    description: "Reliable and fast web hosting solutions",
    externalLink: "https://www.whmcs.com/",
    color: "text-slate-600",
    bgColor: "bg-slate-100",
  },
  {
    id: "seo-audit-tool",
    icon: BarChart3,
    title: "SEO Audit Tool",
    shortTitle: "SEO Audit",
    description: "Analyze your website's SEO performance",
    externalLink: "https://www.seoptimer.com/",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

// Helper function to get service by ID
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}

// Helper function to get related services
export function getRelatedServices(currentId: string, limit: number = 3): Service[] {
  return services.filter((service) => service.id !== currentId).slice(0, limit);
}