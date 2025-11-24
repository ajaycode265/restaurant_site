import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kapruwan Hotel - Authentic Local Cuisine',
  description: 'Experience the best local cuisine in town. Fresh ingredients, warm hospitality at Kapruwan Hotel.',
  keywords: 'restaurant, local cuisine, Kapruwan Hotel, dining, food',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: '#E97451',
  openGraph: {
    title: 'Kapruwan Hotel - Authentic Local Cuisine',
    description: 'Experience the best local cuisine in town. Fresh ingredients, warm hospitality.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}

