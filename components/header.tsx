'use client';
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './theme-toggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 border-b-2 ${
      scrolled ? 'bg-background/90 shadow-md backdrop-blur-sm py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tight hover:text-primary transition-colors">
            Khlf <span className="text-3xl text-primary">.</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-lg font-medium">
            {['Projects', 'Posts', 'About'].map((item) => (
              <li key={item} className="relative group">
                <Link 
                  href={`/${item.toLowerCase()}`} 
                  className="transition-colors hover:text-primary"
                >
                  {item}
                </Link>
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </li>
            ))}
            <li>
              <Link 
                href="/cv/curriculum.pdf"
                className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Resume
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              className="md:hidden text-foreground hover:text-primary transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-background/95 backdrop-blur-sm rounded-lg shadow-lg">
            <ul className="flex flex-col gap-4 text-lg font-medium">
              {['Projects', 'Posts', 'About', 'Resume'].map((item) => (
                <li key={item} className="px-4">
                  <Link
                    href={item === 'Resume' ? '/cv/curriculum.pdf' : `/${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="block py-2 transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
