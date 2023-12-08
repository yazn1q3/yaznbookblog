import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yaznbook',
  description: 'Yaznbook Blog, to see new posts from yaznbook',
 
    icons: {
      icon : [
{       

        url: "/channels4_profile.jpg",
        href: "/channels4_profile.jpg",
}
      ],
    }
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
