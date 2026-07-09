export const NAV_OFFSET = 68

export const REGISTER_URL = "https://www.whartondc.com/store.html?event_id=5029"

export type LogoItem = {
  name: string
  img: string
  size?: "lg"
  pill?: boolean
  label?: string
}

export const CAROUSEL_LOGOS: LogoItem[] = [
  { name: "Amazon Web Services", img: "/images/logos/attendees/aws.png" },
  { name: "Johnson & Johnson", img: "/images/logos/attendees/jnj.png", size: "lg" },
  { name: "NVIDIA", img: "/images/logos/attendees/nvidia.png" },
  { name: "Salesforce", img: "/images/logos/attendees/salesforce.png" },
  { name: "Bank of America", img: "/images/logos/attendees/bank-of-america.png", pill: true },
  { name: "Morgan Stanley", img: "/images/logos/attendees/morgan-stanley.png", pill: true },
  { name: "Wells Fargo", img: "/images/logos/attendees/wells-fargo.png", pill: true },
  { name: "Merrill Lynch", img: "/images/logos/attendees/merrill-lynch.png", size: "lg" },
  { name: "Tyson Foods", img: "/images/logos/attendees/tyson.png" },
  { name: "Truist", img: "/images/logos/attendees/truist.png", size: "lg" },
  { name: "Booz Allen", img: "/images/logos/attendees/booz-allen.png" },
  { name: "MedStar Health", img: "/images/logos/attendees/medstar.png" },
  { name: "Databricks", img: "/images/logos/attendees/databricks.png" },
  { name: "Huron", img: "/images/logos/attendees/huron.png" },
  { name: "Xometry", img: "/images/logos/attendees/xometry.png" },
  { name: "Georgetown University", img: "/images/logos/attendees/georgetown.png" },
  { name: "George Washington University", img: "/images/logos/attendees/gwu.png" },
  { name: "Talkspace", img: "/images/logos/attendees/talkspace.png" },
  { name: "TTR Sotheby's International Realty", img: "/images/logos/attendees/ttr-sothebys.png" },
  { name: "Springboard Enterprises", img: "/images/logos/attendees/springboard.png" },
]

export type PricingTier = {
  name: string
  price: string
  desc: string
  featured?: boolean
}

export const PRICING: PricingTier[] = [
  {
    name: "2026 Wharton DC Innov Summit: Wharton DC Member/Guest - Super Early Bird",
    price: "$195.00",
    desc: "Just $195/person for full access for all sessions live (for you and each of your guests — must pay this rate per person) & Embassy. Maximum of 4/member.",
  },
  {
    name: "2026 Wharton DC Innov Summit: Public - All Welcome - SUPER EARLY BIRD",
    price: "$395.00",
    desc: "Just $395/person for full access for all sessions live (for you and each of your guests — must pay this rate per person) & Embassy. 30-day money back guarantee.",
    featured: true,
  },
  {
    name: "2026 Wharton DC Innov Summit: Strategic Partner Member/Guest - Super Early Bird",
    price: "$195.00",
    desc: 'Just $195/person for full access for all sessions live (for you and each of your guests — must pay this rate per person) & Embassy. Maximum of 4/member. You must list the name of the Strategic Partner of which you are currently a member to qualify for this rate. Please do so in the "Special Instructions" when you register. Thank you.',
  },
  {
    name: "Innovation Summit: VIP Thomas Edison Innovation Supporter",
    price: "$500.00",
    desc: "$500/person, inclusive. Includes Innovation Summit and Embassy reception. Thanks for your tax-deductible contribution!",
  },
]

export type AgendaItem = { time: string; title: string; desc: string }

export const AGENDA: AgendaItem[] = [
  { time: "8:00 AM", title: "Registration & Networking Breakfast", desc: "Welcome reception and partner showcase." },
  { time: "9:30 AM", title: "AI Guardrails for Enterprise", desc: "Opening keynote on responsible AI adoption." },
  { time: "11:00 AM", title: "Future of Healthcare", desc: "Panel on digital health, policy, and investment." },
  { time: "12:30 PM", title: "Unicorn CEO Lunch Keynote", desc: "Founder stories from scaling to market leadership." },
  { time: "2:00 PM", title: "Breakout Tracks", desc: "Choose from three parallel innovation tracks." },
  {
    time: "6:30 PM",
    title: "Fireside Chat + Reception",
    desc: "Closing conversation at Refraction Hub with Embassy Reception.",
  },
]

export type Track = { title: string; panels: string[] }

export const TRACKS: Track[] = [
  {
    title: "Healthcare & Life Sciences",
    panels: ["Digital therapeutics", "Policy and reimbursement", "Biotech venture outlook"],
  },
  {
    title: "Funding & Fintech",
    panels: ["Growth equity trends", "AI in financial services", "Founder fundraising playbook"],
  },
  {
    title: "Transformative Technologies",
    panels: ["Generative AI in operations", "Cybersecurity for scale-ups", "Future of work automation"],
  },
]

export type SponsorTier = { tier: string; items: LogoItem[] }

export const SPONSORS: SponsorTier[] = [
  {
    tier: "Platinum",
    items: [{ name: "Bank of America", img: "/images/logos/partners/bank-of-america.png" }],
  },
  {
    tier: "Bronze",
    items: [{ name: "Fairfax County Economic Development Authority", img: "/images/logos/partners/fceda.png" }],
  },
  {
    tier: "Strategic Partners",
    items: [
      {
        name: "Oxford University Society of DC",
        img: "/images/logos/partners/oxford.png",
        label: "Oxford University Society of DC",
      },
      { name: "Harvard Club", img: "/images/logos/partners/harvard-club.png" },
      { name: "Cornell Club of Maryland", img: "/images/logos/partners/cornell-club-md.png" },
      { name: "French-American Chamber of Commerce", img: "/images/logos/partners/french-american-chamber.png" },
    ],
  },
]

export type Review = { quote: string; author: string; org: string }

export const REVIEWS: Review[] = [
  {
    quote: "The Wharton DC Innovation Summit consistently delivers actionable insight and unmatched networking.",
    author: "Ruth Ann Hudson",
    org: "IBM",
  },
  {
    quote: "A must-attend for anyone building at the intersection of policy, technology, and capital.",
    author: "Aneesh Chopra",
    org: "First White House CTO",
  },
]

export const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "speakers", label: "Speakers" },
  { id: "agenda", label: "Agenda" },
  { id: "sponsors", label: "Sponsors" },
  { id: "reviews", label: "Reviews" },
  { id: "register", label: "Register" },
] as const
