'use client'
import { useState } from "react";
import { Open_Sans, Share_Tech, Karla, Figtree } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
});

const shareTech = Share_Tech({
    subsets: ['latin'],
    weight: ['400']
});

const karla = Karla({
    subsets: ['latin'],
    weight: ['400']
});

const figtree = Figtree({
    subsets: ['latin'],
    weight: ['300']
});

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="h-16">
            <nav className="flex h-full flex-row justify-between items-center">
                {/* Logo / Name */}
                <h1 className="flex-1 text-xl flex items-center">
                    <Link href={'/'}>Sai Pranav Nishtala</Link>
                </h1>

                {/* Desktop Nav */}
                <ul className="hidden md:flex flex-1 text-md flex-row gap-8 justify-center items-center">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>

                {/* Language Selector */}
                <div className="hidden md:flex flex-1 text-xl justify-end items-center">
                    <p className="cursor-pointer">English</p>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex items-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-black border border-zinc-800 shadow-lg z-50">
                    <ul className="flex flex-col gap-4 p-4">
                        <li>
                            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                        </li>
                        <li>
                            <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                        </li>
                        <li>
                            <p className="cursor-pointer">English</p>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}