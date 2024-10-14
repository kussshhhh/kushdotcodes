'use client'

import Link from 'next/link'

export function Navbar() {
  return (
    <div className="p-4 bg-white">
      <nav className="w-full max-w-6xl mx-auto bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center px-4 py-2">
          <Link href="/" className="font-mono text-xl font-bold">
            binarydreams
          </Link>
          <div className="flex space-x-4">
            <NavLink href="/about">about</NavLink>
            <NavLink href="/phukon">blogs</NavLink>
            <NavLink href="/source">projects</NavLink>
            <NavLink href="/upvote">upvote ^_^</NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-mono text-sm"
    >
      {children}
    </Link>
  )
}