import { inter } from '@/app/ui/fonts'
import './globals.css'

export const metadata = {
  title: "Kaixiang's Portfolio",
  description: "Kaixiang's Portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-customBrown-700 dark:bg-customBlack-900 text-gray-200`}
      >
        {children}
      </body>
    </html>
  )
}
