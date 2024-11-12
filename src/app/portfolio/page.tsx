import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import { Link, useLocation } from "react-router-dom";

export default function Portfolio() {
    return (
        <div className=''>
            <Navbar />
            <div className='flex flex-col h-[80vh]'>
                <div className='flex items-center gap-10 my-auto'>
                    <p className='text-3xl font-bold mx-auto'>Coming Soon..</p>
                </div>
            </div>
            {/* <div className='font-roboto flex flex-col min-h-screen max-w-[100vw] mx-12 '>
                <p className='text-center text-5xl my-8 font-bold'>Portfolio</p>
                <div className='font-sarabun grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-3'>
                    <Link to='/portfolio/mu' className='flex items-center flex-col drop-shadow-xl p-5 bg-white rounded-2xl'>
                        <img src="MULogo.png" className='h-40 mb-3' alt="" />
                        <p>สาขาวิศวกรรมคอมพิวเตอร์</p>
                        <p>คณะวิศวกรรมศาสตร์</p>
                        <p>มหาวิทยาลัยมหิดล</p>
                    </Link>
                    <Link to='/portfolio/mu' className='flex items-center flex-col drop-shadow-xl p-5 bg-white rounded-2xl'>
                        <img src="logo-kmitl.jpg" className='h-40 mb-3' alt="" />
                        <p>สาขาวิทยาการคอมพิวเตอร์</p>
                        <p>คณะวิทยาศาสตร์</p>
                        <p>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
                    </Link>
                    <Link to='/portfolio/mu' className='flex items-center flex-col drop-shadow-xl p-5 bg-white rounded-2xl'>
                        <img src="chula-thumb.png" className='h-40 mb-3' alt="" />
                        <p>สาขาวิศวกรรมคอมพิวเตอร์และเทคโนโลยีดิจิทัล</p>
                        <p>คณะวิศวกรรมศาสตร์</p>
                        <p>จุฬาลงกรณ์มหาวิทยาลัย</p>
                    </Link>
                </div>
            </div> */}
            <Footer />
        </div>
    )
}

