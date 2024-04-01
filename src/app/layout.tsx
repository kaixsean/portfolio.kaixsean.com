import './globals.css'

import { inter } from '@/app/ui/fonts'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kaixiang's Portfolio",
  description: "Kaixiang's Portfolio.",
  metadataBase: new URL('https://www.kaixsean.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <body
        className={`${inter.className} bg-customBrown-700 dark:bg-customBlack-900 text-gray-200`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-C1JJEYLZ2C" />
    </html>
  )
}
