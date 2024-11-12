import React from 'react';
// import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Link from 'next/link'

export default function App() {
  return (
    <div>
        <Navbar />
      <div className='font-roboto flex flex-col min-h-[90vh] '>
        <div className='flex max-md:flex-col-reverse items-center max-md:pt-10 justify-between md:pl-[15vw] md:pr-48 my-auto max-md:gap-20'>
          <div>
            <p className='text-2xl max-md:text-xl'>Hi !</p>
            <p className='my-2 font-bold text-[#1e57d4] text-5xl max-md:text-3xl'>Kittipakorn Seenak</p>
            <p className='text-2xl max-md:text-xl'>Benchama Maharat School</p>
            <div className='my-8'>
              <Link href="/about" className='p-3 bg-[#1e57d4] text-l max-w-32 text-center rounded-lg text-white'>About Me</Link>
            </div>
          </div>
          
          <img src="https://i.ibb.co/SyVhMW2/HRCX0su6.png" className='w-96 rounded-full' alt="" />
        </div>

        <div className='flex max-md:flex-col max-md:pt-12 max-md:px-16 gap-5 mb-10 md:pl-[15vw]'>
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

