import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import LandingPage from './components/pages/landing-page';
import EventCard from './components/events/event-card';
import EventMap from './components/events/event-map';
import AIChatbot from './components/ai/ai-chatbot';
import Button from './components/ui/button';
import { mockEvents, featuredEvents, upcomingEvents, popularEvents } from './data/mock-events';
import { Event } from './types';

export default function App() {
  const [selectedEvent, setSelectedEvent] = useState<Event | undefined>();
  const [activeTab, setActiveTab] = useState<'discover' | 'map'>('discover');
  const [showLanding, setShowLanding] = useState(true);

  const handleRSVP = (eventId: string) => {
    console.log('RSVP for event:', eventId);
  };

  const handleShare = (eventId: string) => {
    console.log('Share event:', eventId);
  };

  if (showLanding) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <LandingPage
          onSearchClick={() => setShowLanding(false)}
          onGetStartedClick={() => setShowLanding(false)}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cloud-50 dark:bg-gray-900">
      <Navbar />

      {/* Main Content */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-2 shadow-lg border border-gray-100 dark:border-gray-700">
              <button
                onClick={() => setActiveTab('discover')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'discover'
                    ? 'bg-gradient-to-r from-primary-900 to-sage-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Discover Events
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === 'map'
                    ? 'bg-gradient-to-r from-primary-900 to-sage-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                Event Map
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'discover' ? (
            <div className="space-y-16">
              {/* Featured Events */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Featured Events
                  </h2>
                  <Button variant="outline">View All</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      onRSVP={handleRSVP}
                      onShare={handleShare}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Popular Events */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Trending Now
                  </h2>
                  <Button variant="outline">View All</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {popularEvents.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      onRSVP={handleRSVP}
                      onShare={handleShare}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Upcoming Events
                  </h2>
                  <Button variant="outline">View All</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {upcomingEvents.slice(0, 9).map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      onRSVP={handleRSVP}
                      onShare={handleShare}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Explore Events on the Map
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Discover events happening around you. Click on any marker to see event details.
                </p>
              </div>
              <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-xl">
                <EventMap
                  events={mockEvents}
                  selectedEvent={selectedEvent}
                  onEventSelect={setSelectedEvent}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* AI Chatbot */}
      <AIChatbot onEventRecommendation={(query) => console.log('AI Recommendation:', query)} />

      {/* Footer */}
      <Footer />
    </div>
  );
}