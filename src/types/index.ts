export interface Event {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageUrl: string;
  date: Date;
  endDate?: Date;
  location: {
    name: string;
    address: string;
    lat: number;
    lng: number;
  };
  category: EventCategory;
  tags: string[];
  price: number;
  isPaid: boolean;
  organizer: {
    id: string;
    name: string;
    avatar: string;
    verified: boolean;
  };
  attendees: number;
  maxAttendees?: number;
  rsvpCount: number;
  status: 'upcoming' | 'ongoing' | 'past' | 'cancelled';
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type EventCategory = 
  | 'music'
  | 'art'
  | 'food'
  | 'sports'
  | 'technology'
  | 'business'
  | 'education'
  | 'health'
  | 'community'
  | 'entertainment';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio?: string;
  interests: EventCategory[];
  location?: {
    city: string;
    country: string;
    lat: number;
    lng: number;
  };
  isOrganizer: boolean;
  verified: boolean;
  createdAt: Date;
}

export interface RSVP {
  id: string;
  eventId: string;
  userId: string;
  status: 'attending' | 'maybe' | 'not_attending';
  ticketCount: number;
  qrCode: string;
  createdAt: Date;
}

export interface Discussion {
  id: string;
  eventId: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: Date;
  replies: Discussion[];
  likes: number;
  isLiked?: boolean;
}

export interface Poll {
  id: string;
  eventId: string;
  question: string;
  options: {
    id: string;
    text: string;
    votes: number;
  }[];
  totalVotes: number;
  endsAt: Date;
  createdBy: string;
}

export interface EventAnalytics {
  views: number;
  rsvps: number;
  ticketsSold: number;
  revenue: number;
  engagementRate: number;
  demographicData: {
    ageGroups: { [key: string]: number };
    locations: { [key: string]: number };
    interests: { [key: string]: number };
  };
  dailyStats: {
    date: string;
    views: number;
    rsvps: number;
    revenue: number;
  }[];
}

export interface Recommendation {
  event: Event;
  score: number;
  reasons: string[];
}

export interface SearchFilters {
  category?: EventCategory;
  location?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  priceRange?: {
    min: number;
    max: number;
  };
  tags?: string[];
  radius?: number;
  sortBy?: 'date' | 'popularity' | 'price' | 'relevance';
}