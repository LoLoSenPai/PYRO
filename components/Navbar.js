'use client'
import React from 'react';
import { Link } from '@radix-ui/themes'
import { Silkscreen } from 'next/font/google'
import { DiscordLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';

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
            <img src="logo-pyro.png" alt="Logo" className="w-auto h-16 rounded-full" />
          </div>

          {/* Middle menu */}
          <div className="items-center justify-center flex-1 hidden space-x-4 sm:flex">
            <Link href='/' variant='ghost' size='5'>Home</Link>
            <Link href='#' variant='ghost' size='5' className="link-disabled" onClick={handleClick}>STAKING</Link>
            <Link href='#' variant='ghost' size='5' className="link-disabled" onClick={handleClick}>SOON</Link>
          </div>

          {/* Empty space on right */}
          <div className="flex space-x-3 md:w-[150px]">
            <Link href='https://discord.gg/pyrooo' variant='ghost' target='_blank'>
              <DiscordLogoIcon className="w-10 h-10 text-orange-500" />
            </Link>
            <Link href='https://twitter.com/PyroInSol' variant='ghost' target='_blank'>
              <TwitterLogoIcon className="w-10 h-10 text-orange-500" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
