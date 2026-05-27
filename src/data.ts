import { DemoCard, IntegrationApp, FeatureCard, Testimonial } from "./types";

export const CUSTOMER_LOGOS = [
  { name: "Siro", fontClass: "font-serif font-semibold tracking-wider text-2xl" },
  { name: "Mallard Bay", fontClass: "font-serif tracking-tight font-extrabold text-2xl text-amber-500" },
  { name: "Glitch", fontClass: "font-mono tracking-tighter uppercase font-black text-2xl text-emerald-400" },
  { name: "Fourthwall", fontClass: "font-serif italic font-bold text-2xl text-indigo-400" },
  { name: "Siro Workspace", fontClass: "font-sans tracking-wide font-light uppercase text-base text-gray-500" },
];

export const BLOG_COLUMNS = [
  {
    text: "Format turns scattered customer conversations into weekly reports that you can read as articles or listen to as podcasts. Perfect for catching up on busy days.",
  },
  {
    text: "Hear real conversation snippets from every channel with full emotional context, stitched together as a story so you know exactly how to prioritize and respond without looking at logs.",
  },
  {
    text: "Stay close to your customers while commuting, working out, or clearing your inbox. Deliver crystal clear summaries to your entire product team instantly.",
  },
];

export const INTERACTIVE_DEMOS: DemoCard[] = [
  {
    id: "demo-1",
    title: "Product Weekly",
    podcastDate: "Podcast • 22 Feb 2026",
    colors: {
      from: "#EF4444", // Red
      to: "#EAB308",   // Yellow
      accent: "#F97316"
    },
    audioFrequency: 196.00, // G3 - grounding warm sound
    audioWaveType: "triangle"
  },
  {
    id: "demo-2",
    title: "Leadership Weekly",
    podcastDate: "Podcast • 25 Feb 2026",
    colors: {
      from: "#EC4899", // Pink
      to: "#FFFFFF",   // White
      accent: "#DB2777"
    },
    audioFrequency: 293.66, // D4 - airy resonant sound
    audioWaveType: "triangle"
  },
  {
    id: "demo-3",
    title: "Go-To-Market Weekly",
    podcastDate: "Podcast • 28 Feb 2026",
    colors: {
      from: "#3B82F6", // Blue
      to: "#8B5CF6",   // Purple
      accent: "#6366F1"
    },
    audioFrequency: 329.63, // E4 - spacious cinematic sound
    audioWaveType: "sine"
  }
];

export const INTEGRATIONS: IntegrationApp[] = [
  { id: "gong", name: "Gong", category: "Call Recorder", iconName: "Volume2" },
  { id: "fireflies", name: "Fireflies", category: "Meeting AI", iconName: "Sparkles" },
  { id: "granola", name: "Granola", category: "Notes App", iconName: "Leaf" },
  { id: "slack", name: "Slack", category: "Messaging", iconName: "Slack" },
  { id: "intercom", name: "Intercom", category: "Support Chat", iconName: "MessageCircle" },
  { id: "zendesk", name: "Zendesk", category: "Helpdesk", iconName: "HelpCircle" },
  { id: "salesforce", name: "Salesforce", category: "CRM System", iconName: "Cloud" },
  { id: "hubspot", name: "HubSpot", category: "Marketing", iconName: "Activity" }
];

export const FEATURES: FeatureCard[] = [
  {
    id: "feat-1",
    title: "Personalized intelligence",
    description: "Format continuously learns what matters to you, so you get only the most valuable insights for your work. No noise, just crystal clear direct summaries of what your target audience demands."
  },
  {
    id: "feat-2",
    title: "Audio snippets",
    description: "Every report contains actual audio snippets from real customer conversations, stitched together so you hear their emotion. Hear customer sentiment with full voice fidelity without spending hours digging."
  },
  {
    id: "feat-3",
    title: "Listen & read along",
    description: "Follow along with a live, highlighted transcript that highlights each moment as it plays. Pause, skip between key sections, or jump straight to the original audio recording with a single click."
  }
];

export const TESTIMONIAL: Testimonial = {
  quote: "I'm not usually a podcast person, but this was absolutely worth tuning into. It's engaging, thoughtful, and gave me a much clearer sense of what our customers care about.",
  author: "Abby Minondo",
  title: "Chief of Staff, Equals",
  avatarUrl: "/images/gokulan-linkedin-profile.jpeg"
};
