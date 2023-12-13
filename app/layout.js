import './globals.css'
import "@radix-ui/themes/styles.css"
import { Theme } from '@radix-ui/themes'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'
import './theme-config.css'
import { Silkscreen } from 'next/font/google'

const silkscreen = Silkscreen({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-silkscreen',
})

export const metadata = {
  title: 'PYRO',
  description: 'Welcome to Burning Man',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={silkscreen.className}>
        <Providers>
          <Theme appearance="dark" grayColor="sand" accentColor='orange' panelBackground='translucent' radius="large">
            <div className="relative flex flex-col h-[100vh] items-center justify-center transition-bg">
              <div className="absolute inset-0 overflow-hidden">
                <div className="jumbo absolute -inset-[10px] opacity-50"></div>
              </div>
              <Navbar />
              {children}
            </div>
          </Theme>
        </Providers>
      </body>
    </html>
  )
}
