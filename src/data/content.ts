// TODO: placeholder number — swap for the real WhatsApp business number
export const WHATSAPP_URL = 'https://wa.me/919876543210'

export const stats = [
  { value: 250, suffix: '+', label: 'Home Spaces' },
  { value: 100, suffix: '%', label: 'Customer Satisfaction' },
  { value: 24, suffix: ' hrs', label: 'Report Delivery' },
  { value: 200, suffix: '+', label: 'Inspection Checkpoints' },
] as const

export type Feature = { title: string; description: string; icon: string }
export const features: Feature[] = [
  {
    title: 'Certified Engineers',
    description: 'Civil and structural engineers trained specifically for residential inspection standards.',
    icon: 'badge',
  },
  {
    title: 'Digital Reports',
    description: 'Photo-annotated, categorised, and shareable PDF reports on any device.',
    icon: 'report',
  },
  {
    title: 'Quick Turnaround',
    description: 'On-site inspection completed the same day and the final report within 24 hours.',
    icon: 'clock',
  },
]

export type ProcessStep = { step: string; title: string; description: string }
export const processSteps: ProcessStep[] = [
  { step: '01', title: 'Book Your Inspection', description: 'Reserve a slot online or on WhatsApp in under a minute.' },
  { step: '02', title: 'Engineer Visits Property', description: 'A certified engineer arrives on schedule with full equipment.' },
  { step: '03', title: '200+ Quality Checks', description: 'Every room is inspected against our detailed checklist.' },
  { step: '04', title: 'Digital Inspection Report', description: 'Photo-annotated PDF delivered to your inbox within 24 hours.' },
  { step: '05', title: 'Builder Rectification Support', description: 'We help you draft the snag list and share it with your builder.' },
]

export type Category = { title: string; icon: string }
export const categories: Category[] = [
  { title: 'Civil & Finishing', icon: 'wall' },
  { title: 'Electrical Systems', icon: 'bolt' },
  { title: 'Plumbing', icon: 'pipe' },
  { title: 'Bathrooms', icon: 'bath' },
  { title: 'Doors & Windows', icon: 'door' },
  { title: 'Flooring', icon: 'floor' },
  { title: 'Kitchen', icon: 'kitchen' },
  { title: 'Balcony', icon: 'balcony' },
  { title: 'Ceiling', icon: 'ceiling' },
  { title: 'Paint Quality', icon: 'paint' },
]

export const checklistItems: string[] = [
  'Wall Quality', 'Paint Finish', 'Tile Alignment', 'Hollow Tile Testing',
  'Door Alignment', 'Window Sealing', 'Electrical Safety', 'MCB Testing',
  'Socket Testing', 'Water Leakage', 'Drainage', 'Bathroom Slope',
  'Kitchen Finish', 'Balcony Drainage', 'Railing Safety', 'Lighting',
  'Ventilation', 'Ceiling Finish', 'Measurements', 'Overall Workmanship',
]

export type Plan = {
  id: string
  name: string
  price: string
  suitableFor: string
  features: string[]
  cta: string
  popular?: boolean
}
export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹5,000',
    suitableFor: 'Suitable for 1 BHK',
    features: ['Full property inspection', '250+ checkpoints', 'Thermal imaging', 'Digital PDF report'],
    cta: 'Get Started',
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '₹6,000',
    suitableFor: 'Suitable for 2 BHK',
    features: ['Everything in Starter', 'Detailed snag list', 'Builder handover support', 'One free re-inspection'],
    cta: 'Get Started',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹7,000',
    suitableFor: 'Suitable for 3+ BHK',
    features: ['Everything in Professional', 'Extended civil checks', 'Utility load testing', 'Priority scheduling'],
    cta: 'Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    suitableFor: 'Suitable for villas & commercial',
    features: ['Multi-unit inspection', 'Dedicated engineer team', 'Custom checklist', 'SLA-backed reports'],
    cta: 'Get Started',
  },
]

export const benefits: string[] = [
  'Avoid expensive repairs down the line',
  'Identify hidden defects before possession',
  'Improve builder accountability',
  'Receive professional documentation',
  'Ensure quality workmanship',
  'Save time and money in the long run',
]

export type Testimonial = { name: string; role: string; quote: string }
export const testimonials: Testimonial[] = [
  { name: 'Ananya Sharma', role: 'Homebuyer, Pune', quote: "The engineers were professional, punctual, and remarkably thorough. Their report caught tile-hollowness issues we'd never have noticed on our own." },
  { name: 'Rohit Deshmukh', role: 'Homebuyer, Mumbai', quote: 'The detailed report made it easy to raise a snag list with our builder. Every defect was documented with photos and clear notes.' },
  { name: 'Priya Iyer', role: 'Homebuyer, Bangalore', quote: 'They found hidden moisture behind the bathroom wall — a defect that would have cost us dearly a year later. Worth every rupee.' },
  { name: 'Vikram Menon', role: 'Homebuyer, Hyderabad', quote: 'Our builder took the GharInspect report seriously and fixed everything within two weeks. That accountability alone paid for the inspection.' },
  { name: 'Sneha Kapoor', role: 'Homebuyer, Thane', quote: 'From the thermal imaging to the electrical safety tests, the depth of the inspection genuinely surprised us. Highly recommended.' },
  { name: 'Arjun Rao', role: 'Homebuyer, Delhi NCR', quote: 'Peace of mind before signing the possession letter is priceless. The team explained every finding patiently. Truly a premium experience.' },
]

export type FAQItem = { question: string; answer: string }
export const faqs: FAQItem[] = [
  { question: 'What is a home inspection?', answer: 'A home inspection is a detailed, independent assessment of a property’s civil, electrical, plumbing, and finishing work, carried out by a certified engineer before you take possession or purchase a resale home.' },
  { question: 'How long does an inspection take?', answer: 'Most apartments take 2–4 hours on-site depending on size and layout. Villas and larger properties may take longer, and we schedule accordingly.' },
  { question: 'Do you inspect resale properties?', answer: 'Yes. We inspect new-possession homes as well as resale apartments, villas, and independent houses, adjusting our checklist for the property’s age and usage history.' },
  { question: 'Will builders accept the report?', answer: 'Our reports are structured, photo-documented, and reference measurable standards, which builders across India routinely accept as the basis for rectification requests.' },
  { question: 'How soon is the report delivered?', answer: 'Your digital inspection report is delivered to your inbox within 24 hours of the on-site visit.' },
  { question: 'Can I attend the inspection?', answer: 'Absolutely — we encourage homeowners to walk through the property with our engineer so you can see the findings firsthand.' },
  { question: 'How many checkpoints are covered?', answer: 'Our standard checklist covers 200+ checkpoints across civil, electrical, plumbing, and finishing categories.' },
  { question: 'How is pricing decided?', answer: 'Pricing is fixed and based on property size (BHK configuration), with no hidden charges. Villas and commercial properties are quoted on request.' },
  { question: 'How do I book an inspection?', answer: 'You can book online through our booking form or message us directly on WhatsApp — we’ll confirm a slot within a few hours.' },
]

export const iconPaths: Record<string, string> = {
  badge: 'M12 2 4 5v6c0 5 3.4 8.9 8 10 4.6-1.1 8-5 8-10V5l-8-3Zm-1.3 12.6L7.4 11.3l1.4-1.4 1.9 1.9 4.5-4.5 1.4 1.4-5.9 5.9Z',
  gauge: 'M12 3a9 9 0 0 0-7.4 14.1l1.6-1.2A7 7 0 1 1 19 12a6.9 6.9 0 0 1-1.4 4.2l1.6 1.2A9 9 0 0 0 12 3Zm.9 4.3-2.3 5.4a1.5 1.5 0 1 0 1.8 1.1l1.9-5.9-1.4-.6Z',
  thermal: 'M13 14.8V5a1 1 0 0 0-2 0v9.8a3 3 0 1 0 2 0ZM10 5a2 2 0 1 1 4 0v8.3a4 4 0 1 1-4 0V5Z',
  report: 'M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm8 1.5V8h4.5L14 3.5ZM8 13h8v1.5H8V13Zm0 3.5h8V18H8v-1.5ZM8 9.5h4V11H8V9.5Z',
  clock: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm.9 5v5.4l4.2 2.5-.8 1.4-5.1-3V7Z',
  tag: 'm20.6 12.3-8-8A1 1 0 0 0 12 4H5a1 1 0 0 0-1 1v7a1 1 0 0 0 .3.7l8 8a1 1 0 0 0 1.4 0l7-7a1 1 0 0 0 0-1.4ZM8 9.5A1.5 1.5 0 1 1 9.5 8 1.5 1.5 0 0 1 8 9.5Z',
  wall: 'M3 4h18v6h-8v10H3V4Zm10 6h8v10h-8V10Z',
  bolt: 'M13 2 4 14h6l-1 8 9-12h-6l1-8Z',
  pipe: 'M3 8h11a4 4 0 0 1 4 4v1h3v6h-6v-6h1v-1a2 2 0 0 0-2-2H3V8Zm0 0V4h4v4H3Z',
  bath: 'M4 12h16v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3Zm2-2V6a3 3 0 0 1 5.7-1.4l-1.6 1a1 1 0 1 0-1.9.9L6 10H4Z',
  door: 'M6 2h9v20H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm11 0h1v20h-1V2Zm-4 10a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z',
  floor: 'M3 3h8v8H3V3Zm10 0h8v8h-8V3ZM3 13h8v8H3v-8Zm10 0h8v8h-8v-8Z',
  kitchen: 'M4 3h2v9H4V3Zm3 0h2v6H8V3H7Zm0 6h2v12H7V9Zm5-6h2v18h-2V3Zm4 0h5v5a3 3 0 0 1-2 2.8V21h-2V10.8A3 3 0 0 1 16 8V3Z',
  balcony: 'M3 21V9l9-6 9 6v12h-2v-4H5v4H3Zm4-4h2v-6H7v6Zm4 0h2v-6h-2v6Zm4 0h2v-6h-2v6Z',
  ceiling: 'M3 4h18v3H3V4Zm2 5h2v11H5V9Zm5 0h2v11h-2V9Zm5 0h2v11h-2V9Zm5 0h2v11h-2V9Z',
  paint: 'M18 2 7 13a5 5 0 1 0 4 8l11-11-4-8Zm-2.5 4.9 1.6 1.6-1 1-1.6-1.6 1-1Z',
  droplet: 'M12 2s7 8.1 7 13a7 7 0 1 1-14 0c0-4.9 7-13 7-13Z',
  check: 'm5 13 4 4 10-10',
  quote: 'M9 7H4a1 1 0 0 0-1 1v6a3 3 0 0 0 3 3h1v-2H6a1 1 0 0 1-1-1v-1h4V7Zm11 0h-5a1 1 0 0 0-1 1v6a3 3 0 0 0 3 3h1v-2h-1a1 1 0 0 1-1-1v-1h4V7Z',
}
