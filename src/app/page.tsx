"use client";
import { useState, useEffect } from "react";
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Link from 'next/link'
// import Image from 'next/image';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center overflow-hidden p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400 animate-pulse drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
          Coming Soon
        </h1>
        
        <p className="mt-6 text-xl text-cyan-200 tracking-[0.5em] animate-bounce">
          ...
        </p>
      </div>
    </div>
  );
}

