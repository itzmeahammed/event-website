# 🎉 Event Website - Modern Event Management Platform

A beautiful, modern event management website built with React, TypeScript, and Tailwind CSS. This platform provides a stunning user experience for discovering, managing, and attending events with responsive design and smooth animations.

## ✨ Features

### 🎯 Event Discovery
- Browse and search events
- Filter events by category, date, and location
- Event details and descriptions
- Real-time event updates

### 📅 Event Management
- Create and manage events
- Event scheduling and timing
- Capacity management
- Registration tracking

### 🎨 Modern UI/UX
- Beautiful, responsive design
- Smooth animations with Framer Motion
- Dark/Light mode support with next-themes
- Tailwind CSS styling
- Heroicons for consistent iconography

### 👥 User Features
- Event registration
- Attendee management
- Event notifications
- User profiles

### 📱 Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop experience
- Touch-friendly controls

### 🌙 Theme Support
- Dark mode
- Light mode
- System preference detection
- Smooth theme transitions

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3**: Modern UI library
- **TypeScript**: Type-safe development
- **Vite**: Lightning-fast build tool

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Heroicons**: Additional icon set
- **next-themes**: Theme management

### Utilities
- **clsx**: Conditional class names
- **tailwind-merge**: Merge Tailwind classes

### Development Tools
- **ESLint**: Code linting
- **TypeScript ESLint**: TypeScript linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 📋 Requirements

- Node.js 16.x or higher
- npm or yarn package manager
- Modern web browser

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone git@github.com:itzmeahammed/event-website.git
cd event-website
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

## 🎯 Usage

### Development Server
```bash
npm run dev
# or
yarn dev
```

The application will start at `http://localhost:5173`

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Linting
```bash
npm run lint
# or
yarn lint
```

## 📁 Project Structure

```
event-website/
├── src/
│   ├── components/          # React components
│   │   ├── layout/         # Layout components (navbar, footer)
│   │   ├── pages/          # Page components
│   │   ├── ui/             # Reusable UI components
│   │   └── sections/       # Section components
│   ├── data/               # Static data and constants
│   ├── lib/                # Utility functions
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Entry point
│   ├── index.css           # Global styles
│   └── vite-env.d.ts       # Vite environment types
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── eslint.config.js        # ESLint configuration
├── postcss.config.js       # PostCSS configuration
└── README.md              # This file
```

## 🎮 Key Components

### Layout Components
- **Navbar**: Navigation bar with theme toggle
- **Footer**: Footer with links and information
- **Layout**: Main layout wrapper

### Page Components
- **LandingPage**: Main landing page
- **EventsPage**: Events listing and discovery
- **EventDetails**: Individual event details

### UI Components
- **Badge**: Status and category badges
- **FeatureCard**: Feature showcase cards
- **TestimonialCard**: User testimonial cards
- **Button**: Reusable button component
- **Card**: Generic card component

### Section Components
- **Hero**: Hero section
- **Features**: Features showcase
- **Testimonials**: User testimonials
- **CTA**: Call-to-action sections

## 🎨 Customization

### Theme Customization
- Modify Tailwind CSS configuration in `tailwind.config.ts`
- Update color schemes
- Adjust typography

### Component Styling
- Edit component-specific styles
- Customize animations with Framer Motion
- Adjust spacing and sizing

### Dark Mode
- Theme switching via next-themes
- Automatic system preference detection
- Persistent theme preference

## 🔧 Configuration

### Vite Configuration
- Modify `vite.config.ts` for build settings
- Configure plugins and optimizations

### TypeScript
- Update `tsconfig.json` for compiler options
- Adjust type checking strictness

### ESLint
- Configure rules in `eslint.config.js`
- Add custom linting rules

### Tailwind CSS
- Customize theme in `tailwind.config.ts`
- Extend color schemes and typography
- Add custom utilities

## 📊 Data Management

The application uses:
- Static data files in `src/data/`
- TypeScript types in `src/types/`
- Utility functions in `src/lib/`

## 🐛 Troubleshooting

### Build Errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`
- Check Node.js version compatibility

### Performance Issues
- Check browser console for errors
- Optimize images and assets
- Enable production build optimizations

### Styling Issues
- Verify Tailwind CSS configuration
- Check class name conflicts
- Use tailwind-merge for class merging

### Theme Issues
- Clear browser cache
- Check next-themes configuration
- Verify system theme preference

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📧 Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

## 🙏 Acknowledgments

- React team for the amazing library
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Heroicons for beautiful icons
- All open-source contributors

---

**Happy Event Planning! 🎉✨**
