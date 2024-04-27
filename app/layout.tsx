import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'

import './globals.css'
import MainMenu from '@/components/main-menu'

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
          <MainMenu />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
