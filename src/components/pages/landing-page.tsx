import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  MapPinIcon, 
  CalendarIcon,
  UsersIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import Button from '../ui/button';
import Input from '../ui/input';
import Card from '../ui/card';
import FeatureCard from '../ui/feature-card';
import TestimonialCard from '../ui/testimonial-card';
import Badge from '../ui/badge';

interface LandingPageProps {
  onSearchClick?: () => void;
  onGetStartedClick?: () => void;
}

export default function LandingPage({ onSearchClick, onGetStartedClick }: LandingPageProps) {
  const stats = [
    { icon: CalendarIcon, label: 'Events This Week', value: '247', color: 'text-primary-900' },
    { icon: UsersIcon, label: 'Active Members', value: '12.4K', color: 'text-sage-600' },
    { icon: MapPinIcon, label: 'Cities Covered', value: '45', color: 'text-coral-600' },
    { icon: ChartBarIcon, label: 'Events Created', value: '1.2M', color: 'text-ochre-600' },
  ];

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Recommendations',
      description: 'Get personalized event suggestions based on your interests, location, and past activities.'
    },
    {
      icon: '📍',
      title: 'Smart Location Discovery',
      description: 'Find events happening near you with our interactive map and location-based filtering.'
    },
    {
      icon: '⚡',
      title: 'Real-Time Updates',
      description: 'Stay updated with instant notifications about events you care about.'
    },
    {
      icon: '👥',
      title: 'Community Connection',
      description: 'Connect with like-minded people and build meaningful relationships through events.'
    },
    {
      icon: '🎟️',
      title: 'Easy Ticketing',
      description: 'Seamless RSVP and ticketing system with digital QR codes.'
    },
    {
      icon: '📊',
      title: 'Event Analytics',
      description: 'For organizers: Track attendance, engagement, and event performance metrics.'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Event Enthusiast',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      content: 'EventAI helped me discover the most amazing concerts and festivals in my city. The AI recommendations are spot-on!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Event Organizer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      content: 'As an organizer, the analytics dashboard has been invaluable for understanding my audience and improving future events.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      role: 'Community Manager',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      content: 'The community features on EventAI have helped us build a vibrant network of event-goers. Highly recommended!',
      rating: 5
    },
  ];

  const benefits = [
    'Discover events tailored to your interests',
    'Connect with your local community',
    'Get real-time event updates and notifications',
    'Easy RSVP and ticket management',
    'Share events with friends instantly',
    'Access exclusive early-bird offers',
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cloud-50 via-white to-sage-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="info">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Welcome to the Future of Event Discovery
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Discover Amazing
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-900 via-sage-400 to-coral-600">
                  Events Near You
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Let AI help you find the perfect events based on your interests, location, and preferences. 
                Connect with your community through amazing experiences.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
            >
              <div className="flex-1 w-full">
                <Input
                  placeholder="What kind of events are you looking for?"
                  icon={<MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />}
                  className="text-lg h-12"
                />
              </div>
              <Button size="lg" className="px-8 h-12" onClick={onSearchClick}>
                <SparklesIcon className="w-5 h-5 mr-2" />
                Search with AI
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 pt-4"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                <span>Trusted by 50K+ users</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                <span>100% Free to Use</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircleIcon className="w-5 h-5 text-green-500" />
                <span>No Credit Card Required</span>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-xl transition-all">
                <div className={`inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-800 mb-4 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              <LightBulbIcon className="w-4 h-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need to Discover Events
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with an intuitive interface to make event discovery effortless.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-900 to-sage-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge variant="info" className="mb-6">
                <RocketLaunchIcon className="w-4 h-4 mr-2" />
                Why Choose EventAI
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-8">
                The Smarter Way to Find Events
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 text-white"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <CalendarIcon className="w-24 h-24 text-white/40 mx-auto mb-4" />
                    <p className="text-white/60 text-lg">Your Perfect Event Awaits</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="warning" className="mb-4">
              <HeartIcon className="w-4 h-4 mr-2" />
              Loved by Users
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join thousands of happy users who have discovered their favorite events through EventAI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-900 via-sage-600 to-coral-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Discover Your Next Amazing Event?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join our community of event enthusiasts and start discovering events tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="px-8"
                onClick={onGetStartedClick}
              >
                Get Started Now
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
