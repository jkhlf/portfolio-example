'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeToggle from './theme-toggle'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <div>
            <Link href='/' className='font-serif text-2xl font-bold'>
              Khlf <span className='text-3xl text-indigo-500'>.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className='hidden md:flex items-center gap-6 text-xl font-light text-muted-foreground'>
            <li className='transition-colors hover:text-foreground'>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className='transition-colors hover:text-foreground'>
              <Link href='/posts'>Blog</Link>
            </li>
            <li className='transition-colors hover:text-foreground'>
              <Link href='/about'>About</Link>
            </li>
            <li className='transition-colors hover:text-foreground'>
              <Link href='/cv/curriculum.pdf'>Resume</Link>
            </li>
          </ul>

          <div className='flex items-center gap-4'>
            <ThemeToggle />
            <button
              className='md:hidden text-foreground'
              onClick={toggleMenu}
              aria-label='Toggle menu'
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className='md:hidden mt-4 flex flex-col gap-4 text-xl font-light text-muted-foreground'>
            <li className='transition-colors hover:text-foreground'>
              <Link href='/projects'>Projects</Link>
            </li>
            <li className='transition-colors hover:text-foreground'>
              <Link href='/posts'>Blog</Link>
            </li>
            <li className='transition-colors hover:text-foreground'>
              <Link href='/about'>About</Link>
            </li>
            <li className='transition-colors hover:text-foreground'>
              <Link href='/cv/curriculum.pdf'>Resume</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  )
}