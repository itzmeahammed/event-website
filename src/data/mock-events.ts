import { Event, EventCategory } from '@/types';

const categories: EventCategory[] = [
  'music', 'art', 'food', 'sports', 'technology', 'business', 
  'education', 'health', 'community', 'entertainment'
];

const locations = [
  { name: 'Golden Gate Park', address: '501 Stanyan St, San Francisco, CA 94117', lat: 37.7694, lng: -122.4862 },
  { name: 'Mission District', address: 'Mission St, San Francisco, CA 94110', lat: 37.7599, lng: -122.4148 },
  { name: 'Union Square', address: 'Union Square, San Francisco, CA 94108', lat: 37.7880, lng: -122.4074 },
  { name: 'Pier 39', address: 'Pier 39, San Francisco, CA 94133', lat: 37.8086, lng: -122.4098 },
  { name: 'Castro Theatre', address: '429 Castro St, San Francisco, CA 94114', lat: 37.7609, lng: -122.4350 },
  { name: 'MOMA SF', address: '151 3rd St, San Francisco, CA 94103', lat: 37.7857, lng: -122.4011 },
  { name: 'The Fillmore', address: '1805 Geary Blvd, San Francisco, CA 94115', lat: 37.7841, lng: -122.4332 },
  { name: 'Crissy Field', address: 'Crissy Field, San Francisco, CA 94129', lat: 37.8016, lng: -122.4477 }
];

const organizers = [
  { id: '1', name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b300?w=150&h=150&fit=crop&crop=face', verified: true },
  { id: '2', name: 'Marcus Johnson', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', verified: false },
  { id: '3', name: 'Elena Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face', verified: true },
  { id: '4', name: 'David Kim', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', verified: true },
  { id: '5', name: 'Amara Okafor', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face', verified: false }
];

const eventImages = [
  'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop', // music
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop', // art
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop', // food
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop', // sports
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop', // technology
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop', // business
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop', // education
  'https://images.unsplash.com/photo-1571672777059-1d0c9d5abbf0?w=800&h=600&fit=crop', // health
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop', // community
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop'  // entertainment
];

const eventTitles = {
  music: [
    'Summer Jazz Festival 2024',
    'Indie Rock Showcase',
    'Classical Symphony Night',
    'Electronic Music Experience',
    'Acoustic Coffee Sessions'
  ],
  art: [
    'Contemporary Art Exhibition',
    'Street Art Walking Tour',
    'Photography Masterclass',
    'Sculpture Garden Opening',
    'Digital Art Revolution'
  ],
  food: [
    'Gourmet Food Truck Rally',
    'Farm-to-Table Cooking Class',
    'Wine Tasting Experience',
    'International Food Festival',
    'Artisan Bread Workshop'
  ],
  sports: [
    'Community Running Club',
    'Beach Volleyball Tournament',
    'Yoga in the Park',
    'Basketball Skills Camp',
    'Cycling Adventure Tour'
  ],
  technology: [
    'AI & Machine Learning Summit',
    'Web Development Bootcamp',
    'Startup Pitch Competition',
    'Tech Networking Mixer',
    'Future of VR Workshop'
  ],
  business: [
    'Entrepreneur Meetup',
    'Digital Marketing Conference',
    'Leadership Skills Workshop',
    'Investment Strategy Seminar',
    'Women in Business Panel'
  ],
  education: [
    'Science Fair Exhibition',
    'Creative Writing Workshop',
    'Language Exchange Meetup',
    'Historical Society Lecture',
    'Kids STEM Discovery'
  ],
  health: [
    'Mental Health Awareness Event',
    'Nutrition and Wellness Fair',
    'Meditation Workshop',
    'Fitness Challenge Kickoff',
    'Community Health Screening'
  ],
  community: [
    'Neighborhood Clean-up Day',
    'Cultural Heritage Festival',
    'Senior Citizens Social',
    'Local Artists Showcase',
    'Community Garden Project'
  ],
  entertainment: [
    'Comedy Night at the Theater',
    'Movie Under the Stars',
    'Magic Show Spectacular',
    'Live Podcast Recording',
    'Game Night Tournament'
  ]
};

const descriptions = {
  music: [
    'Join us for an unforgettable evening of smooth jazz featuring local and international artists.',
    'Discover the next generation of indie rock bands in an intimate venue setting.',
    'Experience the beauty of classical music performed by a world-class symphony orchestra.',
    'Immerse yourself in cutting-edge electronic music with stunning visual effects.',
    'Enjoy intimate acoustic performances while sipping your favorite coffee.'
  ],
  art: [
    'Explore groundbreaking contemporary artworks from emerging and established artists.',
    'Take a guided tour through the city\'s most vibrant street art neighborhoods.',
    'Learn advanced photography techniques from professional photographers.',
    'Witness the unveiling of spectacular new sculptures in our gallery space.',
    'Discover how technology is revolutionizing the art world with interactive installations.'
  ],
  food: [
    'Sample delicious dishes from the city\'s top food trucks all in one location.',
    'Learn to cook with fresh, local ingredients from experienced chefs.',
    'Taste exceptional wines paired with artisanal cheeses and local delicacies.',
    'Celebrate diverse cultures through their traditional cuisines and flavors.',
    'Master the art of bread making with traditional and modern techniques.'
  ],
  sports: [
    'Join fellow runners for weekly group runs through scenic city routes.',
    'Compete in our annual beach volleyball tournament with prizes and fun.',
    'Find inner peace and improve flexibility with outdoor yoga sessions.',
    'Develop basketball skills with coaching from experienced players.',
    'Explore the city on two wheels with guided cycling tours.'
  ],
  technology: [
    'Learn about the latest developments in AI and machine learning from industry experts.',
    'Intensive hands-on training in modern web development frameworks and tools.',
    'Watch innovative startups pitch their ideas to investors and industry leaders.',
    'Connect with tech professionals and expand your network in a casual setting.',
    'Experience the future of virtual reality with cutting-edge demos and workshops.'
  ],
  business: [
    'Network with fellow entrepreneurs and share experiences and insights.',
    'Stay ahead of digital marketing trends with expert-led sessions and case studies.',
    'Develop essential leadership skills through interactive workshops and discussions.',
    'Learn from successful investors about building wealth and managing portfolios.',
    'Celebrate and support women entrepreneurs in our local business community.'
  ],
  education: [
    'Explore fascinating science projects created by students from local schools.',
    'Improve your writing skills with guidance from published authors.',
    'Practice new languages with native speakers in a friendly environment.',
    'Learn about local history from expert historians and community elders.',
    'Inspire children to explore science, technology, engineering, and mathematics.'
  ],
  health: [
    'Learn about mental health resources and connect with wellness professionals.',
    'Discover healthy eating habits and wellness practices from certified nutritionists.',
    'Find inner calm and reduce stress through guided meditation practices.',
    'Kick off your fitness journey with motivational speakers and workout demos.',
    'Access free health screenings and consultations from healthcare professionals.'
  ],
  community: [
    'Help beautify our neighborhood while meeting fellow community members.',
    'Celebrate our diverse cultural heritage with food, music, and performances.',
    'Connect with senior community members through games, stories, and activities.',
    'Support local artists and discover unique artworks and performances.',
    'Get involved in sustainable gardening and learn about urban agriculture.'
  ],
  entertainment: [
    'Laugh the night away with hilarious performances from talented comedians.',
    'Enjoy classic and contemporary films under the beautiful night sky.',
    'Be amazed by incredible magic tricks and illusions from professional magicians.',
    'Join the audience for a live recording of your favorite podcast show.',
    'Test your skills in board games, video games, and trivia competitions.'
  ]
};

function getRandomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateMockEvents(count: number = 50): Event[] {
  const events: Event[] = [];
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 90); // 3 months from now

  for (let i = 0; i < count; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const organizer = organizers[Math.floor(Math.random() * organizers.length)];
    const titles = eventTitles[category];
    const descs = descriptions[category];
    const title = titles[Math.floor(Math.random() * titles.length)];
    const description = descs[Math.floor(Math.random() * descs.length)];
    const date = getRandomDate(startDate, endDate);
    const isPaid = Math.random() > 0.4; // 60% paid events
    const price = isPaid ? Math.floor(Math.random() * 100) + 10 : 0;
    const imageIndex = categories.indexOf(category);

    const event: Event = {
      id: `event-${i + 1}`,
      title,
      description,
      shortDescription: description.length > 100 ? description.substring(0, 97) + '...' : description,
      imageUrl: eventImages[imageIndex],
      date,
      endDate: new Date(date.getTime() + Math.random() * 4 * 60 * 60 * 1000), // Random end time up to 4 hours later
      location,
      category,
      tags: [category, 'local', isPaid ? 'premium' : 'free'].concat(Math.random() > 0.5 ? ['popular'] : []),
      price,
      isPaid,
      organizer,
      attendees: Math.floor(Math.random() * 500) + 10,
      maxAttendees: Math.random() > 0.7 ? Math.floor(Math.random() * 200) + 50 : undefined,
      rsvpCount: Math.floor(Math.random() * 300) + 5,
      status: date > new Date() ? 'upcoming' : 'past',
      featured: Math.random() > 0.8, // 20% featured events
      createdAt: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Created within last 30 days
      updatedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000), // Updated within last 7 days
    };

    events.push(event);
  }

  return events.sort((a, b) => a.date.getTime() - b.date.getTime());
}

export const mockEvents = generateMockEvents(50);

export const featuredEvents = mockEvents.filter(event => event.featured).slice(0, 6);

export const upcomingEvents = mockEvents.filter(event => event.status === 'upcoming').slice(0, 12);

export const popularEvents = mockEvents
  .filter(event => event.status === 'upcoming')
  .sort((a, b) => b.attendees - a.attendees)
  .slice(0, 8);