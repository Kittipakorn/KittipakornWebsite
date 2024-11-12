import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link';
import Image from 'next/image';

export default function Blog() {
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
            'date' : '11 พ.ย. 2567'
        }
    ];
    return (
        <div className='bg-gray-100 pb-5'>
            <Navbar />
            <div className='flex flex-col min-h-[90vh]'>
                <div className='flex flex-col my-5 mx-5 md:mx-20 lg:mx-40 xl:mx-80 gap-3'>
                {data.map(item => (
                    <Link href={item.link} key={item.id}>
                    <div className='bg-white hover:bg-gray-50 max-md:px-5 px-8 pb-8 pt-5 rounded-2xl cursor-pointer'>
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

