import './globals.css'
import Aside from "@/components/Aside";
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {children}
      <Aside/>
      <Analytics/>
      </body>
    </html>
  )
}
