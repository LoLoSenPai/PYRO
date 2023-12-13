'use client'
import React from 'react';
import { Link } from '@radix-ui/themes'
import { Silkscreen } from 'next/font/google'

const silkscreen = Silkscreen({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-silkscreen',
})

const handleClick = (e) => {
  e.preventDefault();
};

const Navbar = () => {

  return (
    <div className={silkscreen.className}>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-20 backdrop-blur-sm">
        <div className="container flex items-center justify-between px-4 py-2 mx-auto max-w-[1200px]">
          {/* Logo on the left */}
          <div className="flex items-center">
            <img src="logo-pyro.png" alt="Logo" className="w-auto h-12 rounded-full" />
          </div>

          {/* Middle menu */}
          <div className="flex items-center justify-center flex-1 space-x-4">
            <Link href='/' variant='ghost'>Home</Link>
            <Link href='#' variant='ghost' className="link-disabled" onClick={handleClick}>STAKING</Link>
            <Link href='#' variant='ghost' className="link-disabled" onClick={handleClick}>SOON</Link>
          </div>

          {/* Empty space on right */}
          <div className="hidden sm:block w-[150px]">
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
