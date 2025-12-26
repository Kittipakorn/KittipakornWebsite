"use client";
import { useState, useEffect } from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'
import Image from 'next/image';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='font-sans flex flex-col min-h-[90vh] '>
        <div className='flex max-md:flex-col-reverse items-center max-md:pt-10 justify-between md:pl-[15vw] md:pr-48 my-auto max-md:gap-20'>
          <div>
            <p className={`text-2xl max-md:text-xl transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 text-9xl"}`}>Hi !</p>
            <p
              className={`my-2 font-bold text-[#1e57d4] delay-300 text-5xl max-md:text-3xl transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
              Kittipakorn Seenak
            </p>
            <p className={`text-2xl max-md:text-xl transition-all delay-700 duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>Chulalongkorn University</p>
            <div className='my-8'>
              <Link href="/about" className={`p-3 bg-[#1e57d4] text-l max-w-32 text-center rounded-lg text-white delay-1000 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>About Me</Link>
            </div>
          </div>
          <Image src="https://i.ibb.co/SyVhMW2/HRCX0su6.png" className={`w-96 rounded-full delay-300 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"} `} width={1000} height={1000} alt="" />
        </div>

        <div className={`flex max-md:flex-col max-md:pt-12 max-md:px-16 gap-5 mb-10 md:pl-[15vw] delay-1000 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <div>
            <p className='text-xl max-md:text-lg font-bold text-gray-700'>Instrgram</p>
            <p className=' text-gray-500'>kittmkrn_</p>
          </div>
          <div className='md:border-x max-md:border-y max-md:py-7 md:px-7'>
            <p className='text-xl max-md:text-lg font-bold text-gray-700'>Facebook</p>
            <p className=' text-gray-500'>Kittipakorn Seenak</p>
          </div>
          <div>
            <p className='text-xl max-md:text-lg font-bold text-gray-700'>Location</p>
            <p className=' text-gray-500'>Ubon Ratchathani, Thailand</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

