# EduVoyage - Educational Tours Portfolio

A modern, responsive single-page portfolio website for educational tours built with React.js, Vite, and Tailwind CSS.

## Features

- 🎨 **Modern UI/UX Design** - Eye-catching green and black theme with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ✨ **Smooth Animations** - Powered by Framer Motion for engaging user experience
- 🧭 **Smooth Scroll Navigation** - Sticky navbar with active section highlighting
- 📄 **Complete Sections**:
  - **Home/Hero** - Brand introduction with CTAs and social links
  - **Highlights** - Tour features, statistics, and key benefits
  - **Journal** - Blog posts and tour stories with tags
  - **Documentation** - How it works, FAQ accordion, and resources
  - **Certification** - Certificate program details and timeline
- 🔝 **Back to Top Button** - Appears after scrolling
- ♿ **Accessible** - Semantic HTML and proper focus states

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Accordion.jsx
│   ├── BackToTop.jsx
│   ├── Badge.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── SectionWrapper.jsx
│   ├── Stat.jsx
│   └── TimelineItem.jsx
├── sections/         # Page sections
│   ├── Certification.jsx
│   ├── Documentation.jsx
│   ├── Hero.jsx
│   ├── Highlights.jsx
│   └── Journal.jsx
├── data/            # Static data
│   ├── faq.js
│   ├── journal.js
│   └── stats.js
├── styles/          # Global styles
│   └── global.css
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The theme uses:
- Primary green: `#16a34a` (and variations)
- Dark backgrounds: `#0a0a0a` and variations

### Content

Update the data files in `src/data/` to customize:
- Statistics (`stats.js`)
- Journal posts (`journal.js`)
- FAQ items (`faq.js`)

### Branding

Update the brand name "EduVoyage" throughout the components and update social media links in:
- `src/components/Footer.jsx`
- `src/sections/Hero.jsx`

## License

MIT

