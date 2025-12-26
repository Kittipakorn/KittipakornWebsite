"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const pathname = usePathname()
    const Class = (path: string) => {
        return `text-md mx-3 px-3 py-2 rounded-lg underline-offset-4 decoration-2 ${pathname === path
                ? 'text-[#1e57d4] font-bold underline'
                : 'text-gray-500 hover:text-gray-800 hover:underline'
            }`;
    }

    return (
        <nav className="font-roboto z-50 sticky w-[100vw] top-0 py-5 bg-gray-100 drop-shadow-xl">
            <div className="flex justify-center max-md:hidden">
                <ul className="flex">
                    <li>
                        <Link href="/" className={Class('/')}>Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className={Class('/about')}>About me</Link>
                    </li>
                    {/* <li>
                        <Link href="/blog" className={Class('/blog')}>Blog</Link>
                    </li> */}
                    {/* <li>
                        <Link href="/portfolio" className={Class('/portfolio')}>Portfolio</Link>
                    </li> */}
                    <li>
                        <Link href="/contact" className={Class('/contact')}>Contact</Link>
                    </li>
                </ul>
            </div>

            <div className={`flex flex-col`}>
                <div className="flex justify-between md:hidden mx-4">
                    <Link href='/'><Image src="https://i.ibb.co/R35CDmY/logo-removebg-preview.png" alt="logo" className="h-5 object-contain" width={100} height={1000} /></Link>
                    <button onClick={() => setShowMenu(!showMenu)}>
                        <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden ${showMenu ? "translate-x-1.5" : ""}`}>
                            <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${showMenu ? "rotate-[42deg] w-2/3 delay-150" : ""}`}></div>
                            <div className={`bg-black h-[2px] w-7 rounded transform transition-all duration-300 ${showMenu ? "translate-x-10" : ""}`}></div>
                            <div className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${showMenu ? "-rotate-[42deg] w-2/3 delay-150" : ""}`}></div>
                        </div>
                    </button>
                </div>

                <div className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${showMenu ? "max-h-screen" : "max-h-0"
                    }`}>
                    <ul className={`flex items-center flex-col gap-3`}>
                        <li>
                            <Link href="/" className={Class('/')}>Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className={Class('/about')}>About me</Link>
                        </li>
                        {/* <li>
                            <Link href="/blog" className={Class('/blog')}>Blog</Link>
                        </li> */}
                        {/* <li>
                            <Link href="/portfolio" className={Class('/portfolio')}>Portfolio</Link>
                        </li> */}
                        <li>
                            <Link href="/contact" className={Class('/contact')}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
