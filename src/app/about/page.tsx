"use client";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Image from 'next/image'
import { useState , useEffect } from 'react';

export default function About() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div>
            <Navbar />
        <div className='font-roboto flex flex-col min-h-[92vh] max-w-[100vw]'>
            <div className='flex max-lg:flex-col mx-[8vw] gap-10 my-auto'>
                <Image src="https://i.ibb.co/FznNLbr/body-Avatar.png" className={`rounded-full object-cover w-80 h-80 max-lg:mx-auto transition-all duration-150 ${isLoaded ? "opacity-100" : "opacity-0"} `} width={1000} height={1000} alt="" />
                <div className={` lg:ml-20 text-lg transition-all delay-150 duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                    <p className='font-bold text-4xl mb-12'>About Me</p>
                    <p className='text-lg'>Hello! I&apos;m Kittipakorn Seenak (Mo), born on September 4, 2006. I&apos;m currently studying at Benchama Maharat School in the Science - Mathematics program. I&apos;m passionate about technology and innovation, especially in areas that can improve society and solve everyday challenges.</p>
                    <div>
                        <p className='text-xl font-bold mt-5 mb-3'>Education</p>
                        <div className='flex gap-2 mb-3'>
                            <p className='font-bold w-32 max-w-28 min-w-28'>Junior High School</p>
                            <p>Detudom School - Computer - Science (EST) Program</p>
                        </div>
                        <div className='flex gap-2'>
                            <p className='font-bold max-w-28 min-w-28'>High School</p>
                            <p>Benchama Maharat School - Science - Mathematics Program</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

