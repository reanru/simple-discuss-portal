import Link from "next/link"
import React from 'react'

export default function Navbar() {
    return (
        <div className="flex w-full justify-between bg-blue-950 py-2 px-5">
            <h1 className="text-white">Navbar</h1>
            <ul className="flex ml-5 gap-3">
                <Link href="/" className="text-white cursor-pointer">Home</Link>
                <Link href="/about" className="text-white cursor-pointer">About</Link>
                <Link href="/about/profile" className="text-white cursor-pointer">Profile</Link>
            </ul>
        </div>
    )
}
