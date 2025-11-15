import { Event } from '../../types';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  MapPinIcon, 
  UserIcon,
  HeartIcon,
  ShareIcon,
  TicketIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { formatDate, formatTime } from '../../lib/utils';
import Card from '../ui/card';
import Button from '../ui/button';
import { useState } from 'react';

interface EventCardProps {
  event: Event;
  onRSVP?: (eventId: string) => void;
  onShare?: (eventId: string) => void;
}

export default function EventCard({ event, onRSVP, onShare }: EventCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isRSVPd, setIsRSVPd] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleRSVP = () => {
    setIsRSVPd(!isRSVPd);
    onRSVP?.(event.id);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      music: 'bg-coral-100 text-coral-800 dark:bg-coral-900 dark:text-coral-300',
      art: 'bg-sage-100 text-sage-800 dark:bg-sage-900 dark:text-sage-300',
      food: 'bg-ochre-100 text-ochre-800 dark:bg-ochre-900 dark:text-ochre-300',
      sports: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300',
      technology: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      business: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      education: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      health: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      community: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      entertainment: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
    };
    return colors[category as keyof typeof colors] || colors.community;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card hover className="overflow-hidden group h-full flex flex-col">
        {/* Event Image */}
        <div className="relative h-48 overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay Actions */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-full shadow-lg backdrop-blur-sm"
          >
            {isLiked ? (
              <HeartSolidIcon className="w-5 h-5 text-coral-600" />
            ) : (
              <HeartIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            )}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => onShare?.(event.id)}
            className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-full shadow-lg backdrop-blur-sm"
          >
            <ShareIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </motion.button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
            {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
          </span>
        </div>

        {/* Featured Badge */}
        {event.featured && (
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-gradient-to-r from-ochre-500 to-coral-500 text-white rounded-full text-sm font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-6 space-y-4">
        {/* Title and Date */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
            {event.title}
          </h3>
          <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-4">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-4 h-4" />
              <span className="text-sm">
                {formatDate(event.date)} • {formatTime(event.date)}
              </span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 dark:text-gray-400 space-x-2">
          <MapPinIcon className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm truncate">{event.location.name}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
          {event.shortDescription}
        </p>

        {/* Organizer */}
        <div className="flex items-center space-x-3">
          <img
            src={event.organizer.avatar}
            alt={event.organizer.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {event.organizer.name}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Organizer</p>
          </div>
          {event.organizer.verified && (
            <div className="w-4 h-4 bg-primary-900 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <UserIcon className="w-4 h-4" />
              <span>{event.attendees} attending</span>
            </div>
            <div className="flex items-center space-x-1">
              <TicketIcon className="w-4 h-4" />
              <span>{event.isPaid ? `$${event.price}` : 'Free'}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          className={`w-full ${isRSVPd ? 'bg-green-600 hover:bg-green-700' : ''}`}
          onClick={handleRSVP}
        >
          {isRSVPd ? 'Going!' : 'RSVP'}
        </Button>
      </div>
    </Card>
      </motion.div>
  );
}