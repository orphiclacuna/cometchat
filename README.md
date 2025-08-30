# CometChat Partners Page (Concept UI)

A modern, responsive landing page for CometChat's Partner Program built with React, Vite, and Tailwind CSS. This project showcases CometChat's partner opportunities and provides a platform for potential partners to learn about and apply to various partnership programs.

## 🚀 Live Demo

The project is deployed on Netlify and can be accessed [here](https://cometchatpartners.netlify.app/)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Partner Application Form**: Interactive form for potential partners to submit applications
- **Program Information**: Detailed sections about different partnership programs
- **FAQ Section**: Expandable FAQ section with common questions and answers
- **Customer Showcase**: Animated logo carousel featuring CometChat's trusted partners
- **Dark Theme**: Professional dark-themed design with brand colors

### Key Sections

1. **Hero Section**: Main call-to-action with partner application form
2. **Customer Logos**: Animated carousel of partner companies
3. **Partner Advantages**: Grid of benefits for CometChat partners
4. **Partnership Programs**: Three main program types (Affiliate, Technology, Startup Growth)
5. **FAQ Section**: Collapsible frequently asked questions
6. **Get Started**: Call-to-action for free trial and demo scheduling
7. **Quick Links**: Comprehensive footer with navigation links

## 🛠 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 3.4.3
- **UI Components**: Material-UI 7.1.2
- **Icons**: Custom SVG icons with vite-plugin-svgr
- **Font**: Satoshi (from Fontshare)
- **Linting**: ESLint with React plugins
- **Deployment**: Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/orphiclacuna/cometchat.git
   cd cometchat
   ```

2. **Navigate to the partners-page directory**
   ```bash
   cd partners-page
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
partners-page/
├── public/
│   ├── index.html
│   └── vite.svg
├── src/
│   ├── assets/          # Images, SVGs, and other static assets
│   ├── components/      # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── MainHeading.jsx
│   ├── sections/        # Page sections/layouts
│   │   ├── Navbar.jsx
│   │   ├── HeroForm.jsx
│   │   ├── CustomersSection.jsx
│   │   ├── PartnerAdvantages.jsx
│   │   ├── OurPrograms.jsx
│   │   ├── FAQs.jsx
│   │   ├── PreFooter.jsx
│   │   ├── QuickLinks.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles and Tailwind imports
│   └── main.jsx         # Application entry point
├── eslint.config.js     # ESLint configuration
├── postcss.config.js    # PostCSS configuration for Tailwind
├── tailwind.config.js   # Tailwind CSS configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies and scripts
```

## 📄 License

This project is part of CometChat's marketing materials. All rights reserved.
---