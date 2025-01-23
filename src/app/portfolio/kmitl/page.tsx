"use client";
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import ImageShow from '@/app/components/ImageShow';


export default function PortKMITL() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const [selectedData, setSelectedData] = useState<number | null>(null);
    const data = [
        { id: 1, img: "https://i.ibb.co/Zzd3wsH/1.png", alt: "1" },
        { id: 2, img: "https://i.ibb.co/qRCgy9Q/2.png", alt: "2" },
        { id: 3, img: "https://i.ibb.co/gmrXL0B/3.png", alt: "3" },
        { id: 4, img: "https://i.ibb.co/CbhVd9D/4.png", alt: "4" },
        { id: 5, img: "https://i.ibb.co/3zwp6mW/5.png", alt: "5" },
        { id: 6, img: "https://i.ibb.co/jzGVQM5/6.png", alt: "6" },
        { id: 7, img: "https://i.ibb.co/Lt67gMM/7.png", alt: "7" },
        { id: 8, img: "https://i.ibb.co/m51zFM3/8.png", alt: "8" },
        { id: 9, img: "https://i.ibb.co/fkYDNcM/9.png", alt: "9" },
        { id: 10, img: "https://i.ibb.co/0X2H60y/10.png", alt: "10" },
        { id: 11, img: "https://i.ibb.co/yPfJP7V/11.png", alt: "11" },
        { id: 12, img: "https://i.ibb.co/4MwTdYL/12.png", alt: "12" },
    ];

    return (
        <div className='font-sarabun'>
            <Navbar />
            <div className={`flex flex-col mx-10 xl:mx-40 lg:mx-32 md:mx-20 py-10 gap-2  transition-opacity duration-300 ${isLoaded ? "" : "opacity-0"} `}>
                <Image src='https://www.hr.kmitl.ac.th/wp-content/uploads/2020/08/cropped-kmitl-logoThai.png' className='flex mx-auto' alt='kmitl' width={120} height={120} />
                <p className='text-center text-3xl font-semibold'>คณะวิทยาศาสตร์</p>
                <p className='text-center text-3xl font-semibold'>สาขาวิทยาการคอมพิวเตอร์</p>
                <p className='text-center text-xl font-semibold'>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
                <p className='text-center my-3'>มีสิทธิ์สอบสัมภาษณ์✅ ไม่ผ่านการสอบสัมภาษณ์❌</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
                    {data.map(item => (
                        <div key={item.id} onClick={() => setSelectedData(item.id)} className='cursor-pointer'>
                            <Image alt={item.alt}
                                className={`aspect-w-1 aspect-h-1 mx-auto border hover:shadow-lg delay-150  transition-opacity ${isLoaded ? 
                                    `opacity-100` : "opacity-0" }
                                    duration-700`} src={item.img} width={1000} height={1000} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            {selectedData && (
                <ImageShow data={data} index={selectedData} onClose={() => { setSelectedData(null); }} />
            )}
        </div>
    )
}

