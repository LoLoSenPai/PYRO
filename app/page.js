'use client'
import { Silkscreen } from 'next/font/google'
import Countdown from '../components/Countdown'

const silkscreen = Silkscreen({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-silkscreen',
})

export default function Home() {

  return (
    <div className={silkscreen.className}>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="mt-60 md:mt-0">
          <Countdown />
        </div>
      </main>
    </div>
  )
}
