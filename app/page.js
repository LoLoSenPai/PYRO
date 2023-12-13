'use client'
import { Container, Flex, Heading, Text, Card, Badge, Button, Code } from '@radix-ui/themes'
import { Silkscreen } from 'next/font/google'
import Countdown from '@/components/Countdown'

const silkscreen = Silkscreen({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-silkscreen',
})

export default function Home() {

  return (
    <div className={silkscreen.className}>
      <main className="flex flex-col items-center justify-between min-h-screen p-24">
        <div className="max-w-3xl p-10 mx-auto glassmorphism">
          <div className="">
            <Countdown />
          </div>
        </div>
      </main>
    </div>
  )
}
