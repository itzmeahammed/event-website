import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Event } from '../../types';
import { 
  MapPinIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import Button from '../ui/button';
import Input from '../ui/input';
import Card from '../ui/card';

interface EventMapProps {
  events: Event[];
  selectedEvent?: Event;
  onEventSelect?: (event: Event) => void;
  className?: string;
}

// Mock map component since we can't use real Google Maps in WebContainer
function MapContainer({ events, selectedEvent, onEventSelect }: EventMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 }); // San Francisco
  const [zoom, setZoom] = useState(12);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary-50 to-sage-50 dark:from-primary-900/20 dark:to-sage-900/20 rounded-lg overflow-hidden">
      {/* Map Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="map-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-pattern)"/>
        </svg>
      </div>

      {/* Event Markers */}
      {events.map((event, index) => (
        <motion.div
          key={event.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-full ${
            selectedEvent?.id === event.id ? 'z-20' : 'z-10'
          }`}
          style={{
            left: `${20 + (index % 5) * 15}%`,
            top: `${20 + Math.floor(index / 5) * 20}%`,
          }}
          onClick={() => onEventSelect?.(event)}
        >
          {/* Map Pin */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`relative w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              selectedEvent?.id === event.id 
                ? 'bg-coral-600 ring-4 ring-coral-300' 
                : 'bg-primary-900 hover:bg-primary-800'
            }`}
          >
            <MapPinIcon className="w-5 h-5 text-white" />
            
            {/* Floating indicator */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-ochre-500 rounded-full animate-pulse"></div>
          </motion.div>

          {/* Event Preview Tooltip */}
          {selectedEvent?.id === event.id && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-64 z-30"
            >
              <Card className="p-4 shadow-xl border-2 border-coral-200">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {event.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {event.location.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary-900 dark:text-primary-400 font-medium">
                      {event.attendees} attending
                    </span>
                    <span className="text-xs text-ochre-600 dark:text-ochre-400 font-medium">
                      {event.isPaid ? `$${event.price}` : 'Free'}
                    </span>
                  </div>
                </div>
                {/* Triangle pointer */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white dark:bg-gray-800 border-r border-b border-coral-200 dark:border-gray-600 rotate-45"></div>
              </Card>
            </motion.div>
          )}
        </motion.div>
      ))}

      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setZoom(Math.min(zoom + 1, 18))}
          className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors"
        >
          +
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setZoom(Math.max(zoom - 1, 1))}
          className="w-10 h-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors"
        >
          −
        </motion.button>
      </div>

      {/* Location Search */}
      <div className="absolute top-4 left-4 right-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <Input
              placeholder="Search location..."
              icon={<MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
            />
          </div>
          <Button variant="outline" className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <AdjustmentsHorizontalIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Event Types</h4>
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary-900 rounded-full"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Regular Events</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-coral-600 rounded-full"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Selected Event</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-ochre-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-600 dark:text-gray-400">Live Events</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EventMap(props: EventMapProps) {
  return (
    <div className={`${props.className}`}>
      <MapContainer {...props} />
    </div>
  );
}