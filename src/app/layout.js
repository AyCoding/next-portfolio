import './globals.css'
import Aside from "@/components/Aside";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
      <Aside/>
      </body>
    </html>
  )
}
