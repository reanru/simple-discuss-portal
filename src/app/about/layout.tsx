import React from 'react'

export default function AboutLayout({children}: {children: React.ReactNode}) {
  return (
    <>
        <nav className="fixed right-0 top-10 z-10 h-screen w-60 bg-blue-950">
    
        </nav>

        {children}
    </>
  )
}
