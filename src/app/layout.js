import './globals.css'
import Aside from "@/components/Aside";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* className={inter.className}*/}
      <body>{children}
      <Aside/>
      </body>
    </html>
  )
}
