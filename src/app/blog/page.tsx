"use client";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link';
import Image from 'next/image';
import { useState,useEffect } from 'react';

type Delay = {
    [key: string]: number;
  };

export default function Blog() {

    const delay :Delay = {
        'kmitl': 75,
        'mu': 150,
        'cu': 300,
    }

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const data = [
        {
            'id': 'kmitl',
            'link': '/blog/kmitl',
            'img': 'https://i.ibb.co/KDr7gZg/kmitl.jpg',
            'name': 'รีวิวสัมภาษณ์ วิทย์คอม KMITL #dek68',
            'date' : '8 พ.ย. 2567'
        },
        {
            'id': 'mu',
            'link': '/blog/mu',
            'img': 'https://i.ibb.co/Kj0WdLK/mu.jpg',
            'name': 'รีวิวสัมภาษณ์ วิศวะคอม มหิดล #dek68',
            'date' : '12 พ.ย. 2567'
        },
        {
            'id': 'cu',
            'link': '/blog/cu',
            'img': 'https://i.ibb.co/Xy5XW9f/IMG-0920-2.jpg',
            'name': 'รีวิวสัมภาษณ์ วิศวะคอมจุฬา(หลักสูตร CEDT) #dek68',
            'date' : '19 ม.ค. 2568'
        }
    ];
    return (
        <div className='bg-gray-100 pb-5'>
            <Navbar />
            <div className='flex flex-col min-h-[90vh] font-sarabun'>
                <div className='flex flex-col my-5 mx-5 md:mx-20 lg:mx-40 xl:mx-80 gap-3'>
                {data.map(item => (
                    <Link href={item.link} key={item.id}>
                    <div className={`bg-white max-md:px-5 px-8 pb-5 pt-5 rounded-2xl cursor-pointer transition-all delay-${delay[item.id]} duration-300 ${isLoaded ? "" : "opacity-0 translate-y-10"}`}>
                        <div className='text-2xl pb-2 font-bold'>{item.name}</div>
                        <div className='pb-4 text-sm'>แก้ไขล่าสุด {item.date}</div>
                        <Image alt={item.id} className='rounded-xl' src={item.img} width={2000} height={2000}/>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

