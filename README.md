# Kapruwan Hotel - Restaurant Landing Page

A modern, high-performance, and visually stunning landing page for Kapruwan Hotel restaurant, built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), React, TypeScript
- **Beautiful UI**: Warm, inviting design with smooth animations using Framer Motion
- **Fully Responsive**: Mobile-first design that looks perfect on all devices (iPhone, iPad, Desktop)
- **Performance Optimized**: Fast loading times and smooth interactions
- **Accessible**: Proper semantic HTML and ARIA labels throughout
- **Component-Based**: Clean, modular architecture for easy maintenance

## 📋 Sections

1. **Navbar** - Sticky navigation with mobile menu and call-to-action button
2. **Hero Section** - Eye-catching full-screen banner with compelling messaging
3. **Highlights** - Three key features showcasing what makes us special
4. **Menu Preview** - Popular dishes with images, prices, and ratings
5. **Contact & Information** - Critical section with:
   - Opening hours
   - Phone number (clickable for easy dialing)
   - Address with embedded Google Map
   - Navigate Now button
6. **Footer** - Complete with social links, quick navigation, and contact info

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Contact Information

Edit the contact details in `components/ContactInfo.tsx`:
- Phone number
- Address
- Opening hours
- Google Maps embed URL

### Change Menu Items

Modify the menu items array in `components/MenuPreview.tsx`:
- Add/remove dishes
- Update prices
- Change images
- Modify descriptions

### Adjust Colors

Update the color scheme in `tailwind.config.js`:
```js
colors: {
  brand: {
    orange: '#E97451',
    'orange-dark': '#D4522F',
    // ... more colors
  }
}
```

### Replace Background Image

Update the hero background image URL in `components/Hero.tsx`

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Playfair Display (Google Fonts)

## 🏗️ Project Structure

```
kapruwan-hotel/
├── app/
│   ├── globals.css          # Global styles and Tailwind
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── Highlights.tsx       # Features section
│   ├── MenuPreview.tsx      # Menu items showcase
│   ├── ContactInfo.tsx      # Contact information board
│   └── Footer.tsx           # Footer component
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

## ♿ Accessibility Features

- Semantic HTML elements (`<header>`, `<section>`, `<footer>`)
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- Proper color contrast ratios

## 🌟 Performance

- Optimized images with lazy loading
- Smooth animations with Framer Motion
- Code splitting with Next.js App Router
- Fast page loads and interactions


## 📄 License

This project is proprietary and confidential.

---

