# CometChat Partners Page

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

## 🎨 Design System

### Colors

The project uses a custom color palette defined in Tailwind config:

- **Brand Purple**: `#6852D6` (primary brand color)
- **Dark Background**: `#0A0914` (main dark background)
- **Orange Accent**: `#FF7F3E` (highlight color)
- **Light Text**: `#FAFAFF` (primary text on dark backgrounds)

### Typography

- **Font Family**: Satoshi (modern, clean sans-serif)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive Text**: Scales appropriately across devices

## 🌐 Deployment

The project is configured for Netlify deployment with the following settings:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Base Directory**: `partners-page`

### Deploy to Netlify

1. Connect your repository to Netlify
2. Configure build settings as specified in `netlify.toml`
3. Deploy automatically on commits to main branch

## 🤝 Partner Programs

This landing page promotes three main partnership programs:

### 1. Affiliate Partner Program
- Bring value to customers with world-class messaging tools
- Get incentivized for referring CometChat to customers
- Revenue sharing opportunities

### 2. Technology Partner Program
- Use plug-and-play solutions for client projects
- Access to SDKs and APIs
- Technical support and resources

### 3. Startup Growth Program
- Support for incubators, accelerators, and co-working spaces
- Help VCs accelerate portfolio company growth
- Special pricing and resources for startups

## 🎯 Partner Benefits

- **Free Credits**: Empowering partners to scale
- **Revenue Share**: Monthly recurring revenues from referrals
- **Training Sessions**: Comprehensive partner education
- **Developer Access**: All-access accounts for building PoCs
- **Reduced Time**: Faster product delivery
- **Value Addition**: Enhanced user experiences
- **Knowledge Sessions**: Product and market insights
- **On-demand Support**: Technical implementation assistance
- **Passive Income**: Significant earning opportunities

## 🔧 Development

### Code Style

The project uses ESLint with the following configurations:
- React hooks rules
- React refresh for development
- ES2020+ syntax support
- Browser globals

### Adding New Sections

1. Create a new component in `src/sections/`
2. Import and add to `App.jsx`
3. Ensure responsive design with Tailwind classes
4. Follow existing naming conventions

### Customizing Styles

- Modify `tailwind.config.js` for theme changes
- Use custom CSS in `App.css` for global styles
- Follow mobile-first responsive design principles

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Collapsible navigation on mobile
- Stacked layouts on smaller screens
- Optimized form layouts
- Mobile-friendly accordions for FAQ section

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow React best practices
- Use functional components with hooks
- Maintain responsive design principles
- Write clean, readable code
- Test across different devices and browsers

## 📄 License

This project is part of CometChat's marketing materials. All rights reserved.

## 📞 Support

For questions about the partnership program or technical issues:

- Visit [CometChat Documentation](https://www.cometchat.com/docs)
- Contact the CometChat team through the website
- Check the FAQ section for common questions

---

**CometChat** - Powering real-time communications for modern applications.
