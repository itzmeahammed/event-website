import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  index?: number;
}

export default function TestimonialCard({ name, role, avatar, content, rating, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-ochre-500' : 'text-gray-300 dark:text-gray-600'}`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">
            {name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
