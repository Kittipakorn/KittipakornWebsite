"use client";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Link from 'next/link';
// import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Portfolio() {
    // const [isLoaded, setIsLoaded] = useState(false);
    const [dotCount, setDotCount] = useState(0);

    // useEffect(() => {
    //     setIsLoaded(true);
    // }, []);

    // const delay = {
    //     'kmitl': 75,
    //     'mu': 150,
    //     'cu': 300,

    useEffect(() => {
        // อัปเดตจำนวนจุดไข่ปลา (. -> .. -> ...)
        const interval = setInterval(() => {
          setDotCount((prev) => (prev + 1) % 4); // หมุนวน 0, 1, 2, 3
        }, 700); // เปลี่ยนทุก 500ms
        return () => clearInterval(interval);
      }, []);
    // }

    // const data = [
    //     {
    //         'id': 'kmitl',
    //         'link': '/portfolio/kmitl',
    //         'img': 'https://www.hr.kmitl.ac.th/wp-content/uploads/2020/08/cropped-kmitl-logoThai.png',
    //         'university': 'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
    //         'faculty': 'คณะวิทยาศาสตร์',
    //         'major': 'สาขาวิทยาการคอมพิวเตอร์'
    //     },
    //     {
    //         'id': 'mu',
    //         'link': '/portfolio/mu',
    //         'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Mahidol_U.png/640px-Mahidol_U.png',
    //         'university': 'มหาวิทยาลัยมหิดล',
    //         'faculty': 'คณะวิศวกรรมศาสตร์',
    //         'major': 'สาขาวิศวกรรมคอมพิวเตอร์'
    //     },
    //     {
    //         'id': 'cu',
    //         'link': '/portfolio/cu',
    //         'img': 'https://www.smartmathpro.com/wp-content/uploads/2023/09/จุฬา-2-1.png',
    //         'university': 'จุฬาลงกรณ์มหาวิทยาลัย',
    //         'faculty': 'คณะวิศวกรรมศาสตร์',
    //         'major': 'สาขาวิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล(Sandbox)'
    //     }
    // ];

    return (
        <div className=''>
            <Navbar />
            <div className='flex flex-col min-h-[86vh] items-center justify-center h-full bg-gray-50'>
                {/* <div className='flex flex-col mx-10 lg:mx-32 md:mx-20 py-10 gap-2'>
                    <p className='text-3xl text-center font-semibold'>Portfolio</p>
                    <div className='grid z-0 font-sarabun grid-cols-3 gap-5 max-lg:gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 mt-10'>
                        {data.map(item => (
                            <Link href={item.link} key={item.id}>
                                <div className={`bg-white shadow-lg min-w-fit min-h-96 max-md:px-5 px-8 pb-5 pt-5 rounded-2xl cursor-pointer transition-all delay-${delay[item.id]} duration-500 ${isLoaded
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                    }`}>
                                    <Image alt={item.id} className='rounded-xl aspect-w-1 aspect-h-1 w-56  mx-auto' src={item.img} width={1000} height={1000} />
                                    <p className='text-center text-sm mt-5 font-semibold'>{item.major}</p>
                                    <p className='text-center text-sm  my-2 font-semibold'>{item.faculty}</p>
                                    <p className='text-center text-sm font-semibold'>{item.university}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div> */}

                <div className='text-center text-4xl font-semibold  text-black'>
                <span className={`text-4xl font-bold text-gray-800`}>Coming Soon</span>
                {".".repeat(dotCount)}
                </div>
            </div>
            <Footer />
        </div>
    )
}

