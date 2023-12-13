
import React from 'react';
import ThemeChanger from '@/components/ThemeChanger';
import { Button, Link } from '@radix-ui/themes'
import { Silkscreen } from 'next/font/google'

const silkscreen = Silkscreen({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-silkscreen',
})
const Navbar = () => {
  return (
    <div className={silkscreen.className}>
      <nav className="fixed top-0 left-0 right-0 z-10 glassmorphism">
        <div className="container flex items-center px-4 py-2 mx-auto sm:justify-around md:justify-between">
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="w-auto h-12" />
          </div>
          <div className="items-center hidden space-x-4 md:flex">
            <Link href='#' variant='ghost'>Home</Link>
            <Link href='#' variant='ghost'>staking</Link>
            <Link href='#' variant='ghost'>burning man</Link>
          </div>
          <div className='flex ml-8 space-x-2 sm:ml-0'>
            <Button variant='soft' highContrast>Log In</Button>
            <Button variant='outline' highContrast>Sign Up</Button>
            <ThemeChanger />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
