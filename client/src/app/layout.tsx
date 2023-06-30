import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'amadich Load PicSum Images',
  description: 'Github.com/amadich | Load Multi Photos from PicSum  ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      
    <html lang="en">
      <head>
        <link rel="icon" href="https://picsum.photos/id/237/200/300" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
