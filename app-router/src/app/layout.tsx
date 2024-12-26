import { ReactNode } from 'react'
import './globals.css'
import Link from 'next/link'

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode
  modal: ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <nav className="text-xl ml-2 mt-2">
          <Link className="link" href={'/'}>
            Todo
          </Link>
          <Link className="link" style={{ marginLeft: '10px' }} href={'/posts'}>
            Post
          </Link>
          <Link className="link ml-[10px]" href={'/board'}>
            Board
          </Link>
          <Link className="link ml-[10px]" href={'/parallelBoard'}>
            Parallel Board
          </Link>
          <Link className="link ml-[10px]" href={'/parallelBoard/settings'}>
            Parallel Board Settings
          </Link>
          <Link className="link ml-[10px]" href={'/login'}>
            login
          </Link>
        </nav>
        <main>
          {children}
          {modal}
        </main>
      </body>
    </html>
  )
}
