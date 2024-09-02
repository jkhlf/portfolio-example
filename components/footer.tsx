import Link from 'next/link'
import React from 'react'
import { LinkedinIcon, GithubIcon, MailIcon } from 'lucide-react'

export default function Footer() {
    return (
        <footer className='py-8'>
            <div className='container mx-auto max-w-3xl'>
                <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-6">
                    <div className="flex justify-center space-x-6">
                        <Link href="https://github.com/jkhlf" target="_blank">
                            <GithubIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/joaovictor-khalaf/" target="_blank">
                            <LinkedinIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                        </Link>
                        <Link href="mailto:joao.khalaf@gmail.com" target="_blank">
                            <MailIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center md:mt-4">
                <p className="text-xs leading-5 text-muted-foreground">
                    &copy; {new Date().getFullYear()} Khlf. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
