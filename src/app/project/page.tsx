"use client";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Portfolio() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const data = [
        {
            id : "1",
            link : "a",
            name : "Name",
            description : "ghajskldfmkdgnmkflae,dlc;f,el;fd,p;ef,c",
            img : "https://github.com/Kittipakorn/Splitsy/blob/main/App1.jpg?raw=true",
        },
        {
            id : "2",
            link : "b",
            name : "Name 2",
            description : "ghajskldfmkdgnmkflae,dlc;f,el;fd,p;ef,c",
            img : "https://github.com/Kittipakorn/Splitsy/blob/main/App1.jpg?raw=true",
        }
    ]

    return (
        <div className='bg-gray-100 min-h-screen'>
            <Navbar />
            <h1 className='text-center text-3xl font-bold text-cyan-400 my-5'>Kittipakorn Seenak</h1>
            <h2 className='text-center text-md font-thin text-gray-600'>My projects</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 lg:mx-32 md:mx-20 py-5'>
                {data.map(item => (
                <Link href={item.link} key={item.id}>
                    <div className={`overflow-hidden bg-white shadow-lg rounded-2xl cursor-pointer hover:shadow-2xl rounded-xl h-96 transition-all duration-500`}>
                        <Image alt={item.id} className='object-cover h-4/6 x-auto' src={item.img} width={1000} height={1000} />
                        <p className='text-left text-xl text-cyan-400 mt-5 font-semibold mx-5'>{item.name}</p>
                        <p className='text-left text-md text-gray-400 mx-5'>{item.description}</p>
                    </div>
                </Link>
            ))}
            </div>

            {/* <Footer /> */}
        </div>
    )
}

