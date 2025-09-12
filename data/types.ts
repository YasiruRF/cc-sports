export interface Event {
  id?: number
  title?: string
  name?: string
  category: string
  date: string
  time: string
  location?: string
  venue?: string
  participants: string
  description: string
  image?: string
  images?: string[]
  icon?: any
}

export interface House {
  name: string
  element: string
  color: string
  animal: string
  description: string
  traits: string[]
  score: number
  icon: any
  textColor: string
  bgColor: string
}

export interface Sponsor {
  name: string
  logo: string
}

export interface SponsorTiers {
  title: Sponsor[]
  platinum: Sponsor[]
  gold: Sponsor[]
  silver: Sponsor[]
}

export interface GalleryItem {
  type: "photo" | "video"
  title: string
  query: string
}

export interface EventDates {
  eventStart: string
  countdownTarget: string
  eventEnd: string
}
