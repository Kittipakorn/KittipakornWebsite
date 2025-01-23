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
    // const data = [
    //     { id: 1, img: "https://i.ibb.co/mqYjMQt/1.jpg", alt: "1" },
    //     { id: 2, img: "https://i.ibb.co/n7LCTzM/2.jpg", alt: "2" },
    //     { id: 3, img: "https://i.ibb.co/drnVscm/3.jpg", alt: "3" },
    //     { id: 4, img: "https://i.ibb.co/DV010VW/4.jpg", alt: "4" },
    //     { id: 5, img: "https://i.ibb.co/BrGg2bH/5.jpg", alt: "5" },
    //     { id: 6, img: "https://i.ibb.co/qkpS82G/6.jpg", alt: "6" },
    //     { id: 7, img: "https://i.ibb.co/6Yk6Ldk/7.jpg", alt: "7" },
    //     { id: 8, img: "https://i.ibb.co/2y73pgP/8.jpg", alt: "8" },
    //     { id: 9, img: "https://i.ibb.co/yBRYKwG/9.jpg", alt: "9" },
    //     { id: 10, img: "https://i.ibb.co/z2NQkSv/10.jpg", alt: "10" },
    //     { id: 11, img: "https://i.ibb.co/QH8ZDrK/11.jpg", alt: "11" },
    //     { id: 12, img: "https://i.ibb.co/PGFMvGM/12.jpg", alt: "12" },
    //     { id: 13, img: "https://i.ibb.co/dLC3q8M/13.jpg", alt: "13" }
    // ];

    const data = [
        { id: 1, img: "https://img2.pic.in.th/pic/1b9d61f2446d4be9a.jpg", alt: "1" },
        { id: 2, img: "https://img2.pic.in.th/pic/2ad2e68e5ce6216f8.jpg", alt: "2" },
        { id: 3, img: "https://img5.pic.in.th/file/secure-sv1/300064f51d2be8186.jpg", alt: "3" },
        { id: 4, img: "https://img5.pic.in.th/file/secure-sv1/4b12cb70b9fde1047.jpg", alt: "4" },
        { id: 5, img: "https://img2.pic.in.th/pic/579d7fc6671caf59d.jpg", alt: "5" },
        { id: 6, img: "https://img5.pic.in.th/file/secure-sv1/61a3dcbe4db9e5a29.jpg", alt: "6" },
        { id: 7, img: "https://img2.pic.in.th/pic/7907472649ec44cd1.jpg", alt: "7" },
        { id: 9, img: "https://img5.pic.in.th/file/secure-sv1/9b2fa07f108ecf574.jpg", alt: "9" },
        { id: 10, img: "https://img2.pic.in.th/pic/10df446a54f4e3006c.jpg", alt: "10" },
        { id: 11, img: "https://img5.pic.in.th/file/secure-sv1/11591f6a2887537028.jpg", alt: "11" },
        { id: 12, img: "https://img2.pic.in.th/pic/123711a86ae6e80fd3.jpg", alt: "12" },
        { id: 13, img: "https://img5.pic.in.th/file/secure-sv1/1356bc65651b35653c.jpg", alt: "13" },
    ];

    
    
    return (
        <div className='font-sarabun'>
            <Navbar />
            <div className={`flex flex-col mx-10 xl:mx-40 lg:mx-32 md:mx-20 py-10 gap-2  transition-opacity duration-300 ${isLoaded ? "" : "opacity-0"} `}>
                <Image src='https://www.smartmathpro.com/wp-content/uploads/2023/09/จุฬา-2-1.png' className='flex mx-auto' alt='chula' width={120} height={120} />
                <p className='text-center text-3xl font-semibold'>คณะวิศวกรรมศาสตร์</p>
                <p className='text-center text-3xl font-semibold'>สาขาวิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล(Sandbox)</p>
                <p className='text-center text-xl font-semibold'>จุฬาลงกรณ์มหาวิทยาลัย</p>
                <div className='flex mx-auto max-md:flex-col md:gap-5'>
                    <div className='text-center my-3'>มีสิทธิ์สอบสัมภาษณ์✅</div>
                    <div className='text-center my-3'>ผ่านการสอบสัมภาษณ์✅</div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 '>
                    {data.map(item => (
                        <div key={item.id} onClick={() => setSelectedData(item.id)} className='cursor-pointer'>
                            <Image alt={item.alt}
                                className={`aspect-w-1 aspect-h-1 mx-auto border hover:shadow-lg delay-150  transition-opacity ${isLoaded ?
                                    `opacity-100` : "opacity-0"}
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

