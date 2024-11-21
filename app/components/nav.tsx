'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './theme-toggle';

const navItems = {
  '/projects': {
    name: 'Projects',
  },
  '/about': {
    name: 'About',
  },
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="mb-10 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative px-0 pb-0 md:overflow-auto scroll-pr-6 md:relative" id="nav">
          <div className="flex items-center w-full">
            <div className="text-lg font-bold">
              <Link href="/">
                <p className='text-[21px]'> Khalaf <span className='text-3xl text-blue-500'>.</span></p>
              </Link>
            </div>
          </div>

          <div className="flex flex-row space-x-3">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={`transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex py-1 px-2 m-1 ${
                    pathname === path ? 'underline underline-offset-4 decoration-wavy decoration-blue-500 ' : ''
                  }`}
                >
                  {name}
                </Link>
              );
            })}

            {/* <ThemeToggle /> */}
          </div>
        </nav>
      </div>
    </div>
  );
}
