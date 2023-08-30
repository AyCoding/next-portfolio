import './globals.css'
import Aside from "@/components/Aside";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aymeric DE LANGE',
  description: 'Hi, I\'m Aymeric, front-end developer with a passion for web programming since 2018. Over the years, I\'ve gained solid experience in front-end web development, which has enabled me to create various interesting projects. I invite you to discover my projects below. Don\'t hesitate to contact me if you have any questions or are interested in collaborating.',
  keywords: 'Aymeric, DE LANGE, frontend, react, next',
  robots: 'follow, index'
}

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
