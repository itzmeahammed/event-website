import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  XMarkIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  MicrophoneIcon,
  StopIcon
} from '@heroicons/react/24/outline';
import Button from '../ui/button';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}

interface AIChatbotProps {
  onEventRecommendation?: (query: string) => void;
}

export default function AIChatbot({ onEventRecommendation }: AIChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm your AI event assistant. I can help you find the perfect events based on your interests, location, and preferences. What would you like to discover today?",
      timestamp: new Date(),
      suggestions: [
        "What's happening this weekend?",
        "Find art events near me",
        "Show me free music events",
        "Recommend tech conferences"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string): string => {
    const responses = {
      'weekend': "I found 12 exciting events this weekend! Here are some highlights: 🎵 Jazz Festival at Golden Gate Park (Saturday 7 PM), 🎨 Art Gallery Opening in SOMA (Sunday 3 PM), and 🍕 Food Truck Festival at Pier 39 (Both days). Would you like more details about any of these?",
      'art': "Great choice! I discovered several amazing art events: 🖼️ Contemporary Art Exhibition at MOMA (ongoing), 🎭 Street Art Walking Tour in Mission District (Daily 2 PM), and 🎪 Interactive Art Installation at Yerba Buena Gardens. Which style interests you most?",
      'music': "Here are some fantastic music events: 🎸 Indie Rock Concert at The Fillmore (Friday 9 PM), 🎺 Classical Performance at Symphony Hall (Saturday 8 PM), and 🎤 Open Mic Night at Local Café (Thursday 7 PM). All are highly rated!",
      'free': "I found 8 free events perfect for you: 📚 Poetry Reading at City Library, 🌳 Nature Walk in Presidio Park, 🎬 Outdoor Movie Screening, and 🎭 Community Theater Performance. Budget-friendly fun awaits!",
      'tech': "Perfect timing! I found several tech events: 💻 AI & Machine Learning Meetup (Next Tuesday), 🚀 Startup Pitch Night (Wednesday), and 🔧 Web Development Workshop (Saturday). Great for networking and learning!"
    };

    for (const [key, response] of Object.entries(responses)) {
      if (userMessage.toLowerCase().includes(key)) {
        return response;
      }
    }

    return "I'm searching through thousands of events to find the perfect matches for you... Based on your query, I recommend checking out events in the following categories: music, art, technology, and food. Would you like me to filter by any specific criteria like location, date, or price range?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: simulateAIResponse(inputValue),
        timestamp: new Date(),
        suggestions: [
          "Show me more details",
          "Find similar events",
          "Check my calendar",
          "Get directions"
        ]
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      onEventRecommendation?.(inputValue);
    }, 2000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    handleSendMessage();
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, this would start/stop voice recording
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-primary-900 to-sage-400 text-white rounded-full shadow-lg flex items-center justify-center z-50 ${isOpen ? 'hidden' : 'block'}`}
      >
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-coral-600 rounded-full animate-pulse">
          <SparklesIcon className="w-3 h-3 text-white ml-0.5" />
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 w-96 h-[32rem] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-primary-900 to-sage-400 text-white rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">AI Event Assistant</h3>
                  <p className="text-xs opacity-80">Always here to help</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-primary-900 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs mt-1 opacity-60">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Suggestions */}
              {messages.length > 0 && messages[messages.length - 1].suggestions && !isTyping && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {messages[messages.length - 1].suggestions!.map((suggestion, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/50 text-primary-900 dark:text-primary-400 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask about events, get recommendations..."
                    className="w-full px-4 py-2 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white transition-colors"
                  />
                  <button
                    onClick={toggleRecording}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full transition-colors ${
                      isRecording 
                        ? 'text-coral-600 bg-coral-100 dark:bg-coral-900/50' 
                        : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                    }`}
                  >
                    {isRecording ? (
                      <StopIcon className="w-4 h-4" />
                    ) : (
                      <MicrophoneIcon className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  size="sm"
                  className="p-2"
                >
                  <PaperAirplaneIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}