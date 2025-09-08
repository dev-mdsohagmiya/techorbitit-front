![JF Products Logo](public/logo.png)

# **JF Products** - Premium Fencing Solutions Website

_Scroll Down and checkout the overview video for quick understand, thanks_ <br>
Welcome to JF Products, a modern and responsive website showcasing premium fencing solutions. This project was developed as a technical task for the Frontend Developer position at TechOrbit IT, demonstrating pixel-perfect implementation of the provided Figma design with modern frontend technologies.

## 🎯 **Project Description**

This is a **Frontend Developer Technical Task** submission for TechOrbit IT, featuring:

- **Pixel-perfect implementation** of the provided Figma design
- **Fully responsive design** for desktop, tablet, and mobile devices
- **Clean, modular, and maintainable code** with reusable components
- **Smooth transitions and animations** using Framer Motion
- **Modern tech stack** with Next.js 15, React, and Tailwind CSS

## 🎨 **Figma Design Reference**

**Original Design**: [View Figma Design](https://pixso.net/app/design/W9XoCODzsw7XjyEbTSsVfA?icon_type=1&page-id=0%3A1&item-id=243%3A14)

This project is a complete conversion of the provided Figma design into a fully functional, responsive website with enhanced features and smooth user experience.

---

## 📑 **Table of Contents**

1. [🎯 Project Description](#project-description)
2. [🎨 Figma Design Reference](#figma-design-reference)
3. [🎥 Overview Video](#overview-video)
4. [🚀 How to Run Locally](#how-to-run-locally)
5. [✨ Core Features](#core-features)
6. [🎯 Key Sections](#key-sections)
   - [🏠 Hero Section](#hero-section)
   - [🌾 Agricultural Products](#agricultural-products)
   - [🌿 Landscape Products](#landscape-products)
   - [💙 Trusted Section](#trusted-section)
   - [⭐ Why Us](#why-us)
   - [❤️ Customer Testimonials](#customer-testimonials)
   - [📞 Contact Us](#contact-us)
7. [📁 Project Structure](#project-structure)
8. [🔧 Technology Stack](#technology-stack)
9. [📨 Submission Details](#submission-details)

---

## 🎥 **Overview Video (Coming Soon)**

In this video, you can quickly and more clearly understand what I have built and how the website works.

[![Watch the Video]()](https://youtu.be/your-video-id)

_Click the image to watch the video_

---

## 🚀 **How to Run Locally**

### **Prerequisites**

- Node.js (v18 or higher)
- npm or yarn

### **Quick Setup**

1. **Clone the Repository**

   ```bash
   git clone https://github.com/dev-mdsohagmiya/techorbitit-front.git
   cd techorbitit-front
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start Development Server**

   ```bash
   npm run dev
   ```

4. **Open Browser**

   - Navigate to `http://localhost:3000`
   - Explore the website!

5. **Build for Production**

   ```bash
   npm run build
   npm start
   ```

---

## ✨ **Core Features**

### **Modern Design**

- ✅ **Responsive Layout**: Works perfectly on all screen sizes
- ✅ **Beautiful Animations**: Smooth transitions with Framer Motion
- ✅ **Interactive Elements**: Hover effects and micro-interactions
- ✅ **Professional UI**: Clean and modern design

### **Product Showcase**

- 🎠 **Advanced Carousel System**: Fully functional carousel sliders with Embla Carousel
- 🖼️ **High-Quality Images**: Optimized images with Next.js Image component
- 📱 **Mobile Navigation**: Hidden arrows on mobile, touch-friendly navigation
- 🔄 **Auto-Slide**: Automatic carousel progression with pause on interaction
- ⚡ **Smooth Transitions**: Framer Motion animations for slide transitions
- 🎯 **Interactive Controls**: Arrow navigation, dot indicators, and touch gestures
- 📊 **Dynamic Content**: Real-time testimonial slider with customer data

### **User Experience**

- 📞 **Advanced Contact Form**: React Hook Form with comprehensive validation
- 🗺️ **Interactive Map**: Real Google Maps integration
- ⭐ **Dynamic Testimonials**: Sliding testimonial carousel with real customer photos
- 🔝 **Go to Top**: Smooth scroll to top functionality
- ✨ **Form Validation**: Real-time validation with error messages and success states
- 🎭 **Micro-Interactions**: Hover effects, button animations, and smooth transitions

---

## 🎯 **Key Sections**

### **🏠 Hero Section**

- **Animated Carousel**: Multiple slides showcasing different products with Framer Motion
- **Responsive Design**: Adapts to all screen sizes with smooth transitions
- **Call-to-Action**: Prominent buttons with hover animations and micro-interactions
- **Background Effects**: Subtle animations, gradients, and parallax effects
- **Auto-Play**: Automatic slide progression with pause on hover
- **Touch Gestures**: Swipe navigation for mobile devices

### **🌾 Agricultural Products**

- **Product Grid**: Organized display of agricultural fencing solutions
- **Interactive Carousel**: Swipeable product showcase with Embla Carousel
- **Mobile Preview**: Small preview cards on mobile devices
- **Auto-Slide**: Automatic progression with pause on interaction
- **Arrow Navigation**: Custom arrow buttons with hover animations
- **Smooth Transitions**: Framer Motion slide animations
- **Responsive Controls**: Hidden arrows on mobile, touch-friendly navigation

### **🌿 Landscape Products**

- **Landscape Solutions**: Dedicated section for landscape fencing
- **Advanced Carousel**: Same Embla Carousel functionality as agricultural products
- **Responsive Layout**: Optimized for all devices with smooth animations
- **Interactive Elements**: Hover effects and transition animations
- **Consistent UX**: Unified carousel behavior across all product sections

### **💙 Trusted Section**

- **Customer Statistics**: Trust indicators and social proof
- **Animated Counters**: Dynamic number animations
- **Professional Design**: Clean and trustworthy appearance

### **⭐ Why Us**

- **Feature Cards**: Highlighting company advantages
- **Icon Integration**: Visual representation of benefits
- **Grid Layout**: Organized information display

### **❤️ Customer Testimonials**

- **Dynamic Testimonial Slider**: Fully functional carousel with React state management
- **Real Customer Photos**: Unsplash integration for authentic profiles
- **Interactive Navigation**: Arrow buttons with smooth click animations
- **12 Testimonials**: Diverse customer feedback with cycling functionality
- **Framer Motion Animations**: Fade, slide, and scale transitions
- **Auto-Cycle**: Automatic testimonial rotation with manual override
- **Responsive Design**: Touch-friendly navigation on mobile devices

### **📞 Contact Us**

- **Advanced Contact Form**: React Hook Form with comprehensive validation
- **Real-time Validation**: Instant feedback with error messages and success states
- **Branch Locations**: Interactive branch selection with smooth animations
- **Google Maps**: Real-time map integration with hover effects
- **Form State Management**: Loading states, submission handling, and user feedback
- **Input Validation**: Email format, required fields, and character limits
- **Smooth Animations**: Form transitions and micro-interactions with Framer Motion

---

## 📁 **Project Structure**

This section provides a comprehensive overview of how JF Products is organized, showing the file structure and component architecture.

---

### **🏗️ Project Architecture**

```
jf-products/
├── app/                      # Next.js 15 App Router
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout
│   ├── page.js              # Home page
│   ├── loading.js           # Loading page
│   ├── error.js             # Error page
│   └── not-found.js         # 404 page
├── components/              # React components
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx         # Hero carousel
│   │   ├── agricultural-products/
│   │   │   ├── AgriculturalProducts.jsx
│   │   │   └── Card.jsx
│   │   ├── lndscape-products/
│   │   │   ├── LandscapeProducts.jsx
│   │   │   └── Card.jsx
│   │   ├── trusted/
│   │   │   └── TrustedSection.jsx
│   │   ├── why-us/
│   │   │   ├── WhyUs.jsx
│   │   │   └── Card.jsx
│   │   ├── why-customers-love-us/
│   │   │   └── WhyCustomerLoveUs.jsx
│   │   ├── contact-us/
│   │   │   ├── ContactUs.jsx
│   │   │   ├── Form.jsx
│   │   │   └── Branch.jsx
│   │   └── how-we-do-progress/
│   │       └── HowWeDoProgress.jsx
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Title.jsx
│   │   ├── Footer.jsx
│   │   ├── GoToTop.jsx
│   │   ├── EmblaCarousel.jsx
│   │   ├── ProductEmblaCarousel.jsx
│   │   ├── EmblaCarouselArrowButtons.jsx
│   │   └── EmblaCarouselDotButton.jsx
│   ├── hooks/               # Custom hooks
│   │   └── useIntersectionObserver.js
│   └── Navbar.jsx           # Navigation component
├── public/                  # Static assets
│   ├── hero/               # Hero section images
│   ├── products/           # Product images
│   ├── contact/            # Contact section images
│   ├── love/               # Testimonial images
│   ├── trusted/            # Trust section images
│   ├── why-us/             # Why us section images
│   ├── icons/              # SVG icons
│   └── logo.png            # Company logo
├── package.json            # Dependencies
├── next.config.mjs         # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md              # This file
```

---

## 🔧 **Technology Stack**

### **Frontend Technologies**

- **Next.js 15**: React framework with App Router
- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React

### **UI Components & Libraries**

- **Embla Carousel**: Modern carousel library
- **React Hook Form**: Form handling and validation
- **Framer Motion**: Animation library for React
- **Next.js Image**: Optimized image component

### **Development Tools**

- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing
- **Git**: Version control
- **npm**: Package management

### **Features & Integrations**

- **Google Maps**: Interactive map integration
- **Unsplash API**: Real customer photos
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Next.js built-in SEO features

### **Form Handling & Animations**

- **React Hook Form**: Advanced form state management with real-time validation
- **Framer Motion**: Comprehensive animation system throughout the entire site
- **Form Validation**: Client-side validation with instant error feedback
- **Animation Effects**: Hover effects, page transitions, and micro-interactions
- **Carousel Animations**: Smooth slide transitions and interactive controls
- **State Management**: React hooks for dynamic content and user interactions
- **Performance Optimized**: Efficient animations with proper cleanup and memory management

---

## 📨 **Submission Details**

### **Task Requirements Met** ✅

- ✅ **Pixel-perfect implementation** of the Figma layout
- ✅ **Fully responsive design** for desktop, tablet, and mobile
- ✅ **Clean, modular, and maintainable code**
- ✅ **Reusable components** using React/Next.js
- ✅ **Smooth transitions/animations** with Framer Motion

### **Submission Information**

- **GitHub Repository**: [View Code](https://github.com/dev-mdsohagmiya/techorbitit-front.git)
- **Live Deployment**: [View Live Site](https://your-deployment-link.vercel.app)
- **Task Deadline**: September 9, 2025
- **Company**: TechOrbit IT
- **Position**: Frontend Developer

### **Tech Choices & Extras**

- **Next.js 15** with App Router for optimal performance
- **Framer Motion** for comprehensive animation system and smooth transitions
- **React Hook Form** for advanced form handling with real-time validation
- **Embla Carousel** for fully functional carousel sliders with touch support
- **Tailwind CSS** for responsive design and utility-first styling
- **Google Maps integration** for interactive contact section
- **Dynamic testimonial slider** with React state management
- **Real customer testimonials** with Unsplash photos
- **Go to Top functionality** for better UX
- **Mobile-first responsive design** with touch gestures
- **Advanced carousel system** with auto-play, navigation, and smooth animations

---

**JF Products** - A technical task submission demonstrating modern frontend development skills with pixel-perfect design implementation! 🚀✨

---

_Built with ❤️ for TechOrbit IT Frontend Developer Position using Next.js, React, and modern web technologies_
