# Quick Start Guide - Kapruwan Hotel Website

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Your Browser
Navigate to: **http://localhost:3000**

---

## 🎯 What You'll See

✅ **Navbar** - Sticky navigation that changes on scroll  
✅ **Hero Section** - Full-screen welcome banner  
✅ **Features** - Fresh Ingredients, Fast Service, Cozy Ambience  
✅ **Menu Preview** - 4 popular dishes with ratings  
✅ **Contact Section** - Hours, phone, location with Google Maps  
✅ **Footer** - Complete site information  

---

## 📝 Important Customizations

### 1. Update Phone Number
**File**: `components/ContactInfo.tsx` and `components/Navbar.tsx`
```typescript
phone: '+1 (555) 123-4567',  // Change this
phoneRaw: '+15551234567',    // Change this too
```

### 2. Update Address
**File**: `components/ContactInfo.tsx`
```typescript
address: 'Your actual address here',
```

### 3. Update Google Maps
**File**: `components/ContactInfo.tsx`
- Get your embed URL from: https://www.google.com/maps
- Click "Share" → "Embed a map" → Copy the iframe URL
- Replace `mapUrl` value

### 4. Change Hero Image
**File**: `components/Hero.tsx`
```typescript
backgroundImage: "url('YOUR_IMAGE_URL_HERE')",
```

---

## 🎨 Color Scheme

The default warm restaurant theme uses:
- **Orange**: `#E97451` (Primary CTA buttons)
- **Brown**: `#8B4513` (Accents)
- **Cream**: `#FFF8DC` (Backgrounds)
- **Slate**: `#475569` (Text)

Change these in `tailwind.config.js`

---

## 📱 Test Responsiveness

1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Test on:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

---

## 🏗️ Production Build

```bash
npm run build
npm start
```

---

## ❓ Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📞 Need Help?

Check the full README.md for detailed documentation!

