import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'

import './globals.css'
import MainMenu from '@/components/MainMenu'
import MenuContent from '@/components/ui/menu-content'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Webspiration',
  description: 'Contentious UI/UX done right.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          {/* <Nav /> */}
          <MainMenu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
