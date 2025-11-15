import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bars3Icon, 
  XMarkIcon, 
  MagnifyingGlassIcon,
  BellIcon,
  UserCircleIcon,
  CalendarIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';
import Button from '../ui/button';
import Input from '../ui/input';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-900 to-sage-400 rounded-xl flex items-center justify-center">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                EventAI
              </h1>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors">
              Discover
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors">
              Events
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors">
              Create
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors">
              Community
            </a>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors"
            >
              <MagnifyingGlassIcon className="w-5 h-5" />
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors"
            >
              {isDark ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </motion.button>

            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors relative"
            >
              <BellIcon className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-coral-600 rounded-full"></span>
            </motion.button>

            {/* Profile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors"
            >
              <UserCircleIcon className="w-6 h-6" />
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors"
              >
                {isOpen ? (
                  <XMarkIcon className="w-6 h-6" />
                ) : (
                  <Bars3Icon className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="py-4 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <Input
                  placeholder="What's happening this Saturday near me for free?"
                  icon={<MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />}
                  className="text-lg"
                />
              </div>
              <Button size="lg">
                Search with AI
              </Button>
            </div>
          </motion.div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4 border-t border-gray-200 dark:border-gray-700"
          >
            <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors">
              Discover
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors">
              Events
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors">
              Create
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-900 dark:hover:text-primary-400 transition-colors">
              Community
            </a>
            <div className="px-3 py-2">
              <Button className="w-full">
                Sign In
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}