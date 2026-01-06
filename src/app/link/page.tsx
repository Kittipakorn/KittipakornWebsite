"use client"; 
import Image from 'next/image'
import { Kanit } from 'next/font/google'


export const fontS = Kanit({
  subsets: ['thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-th',
  display: 'swap',
})


interface Props {
  params: {
    tenant: string
  }
}

export default function TenantPage({ params }: Props) {
    const data = [
        {
            id:1,
            img: "https://cdn.discordapp.com/attachments/1451776588529270808/1454238631383404785/IMG_2439.png?ex=69505cc4&is=694f0b44&hm=b1188699df63c08c5b9b756e450ae181f6d1a81f37f59728c4fe870ba3d313ad",
            title:"โดเนทขึ้นจอเติมพลังเซียน 🧘‍♂️",
            link:"https://easydonate.app/kittmkrn_",
        },
        { 
            id:4,
            img: "https://cdn.discordapp.com/attachments/1451776588529270808/1454244207198732500/1.png?ex=695061f5&is=694f1075&hm=c0dc3618c22605dc2aa08d74056a8d3cfcb0b830960b4c38a34e0250864b56ec",
            title:"สมัครคอร์สเรียน TOI-Zero",
            link:"https://www.instagram.com/beyondlab.official",
        },
        {
            id:2,
            img: "https://cdn.discordapp.com/attachments/1451776588529270808/1454221328767914176/tiktok-6338432_1280.webp?ex=69504ca6&is=694efb26&hm=23cb601f91bdbeb457563e41011ed4239803cde7a2446cd29adb78c6b7486012",
            title:"TikTok",
            link:"https://www.tiktok.com/@kittmkrn_?_r=1&_t=ZS-92YP7YEPhHp",
        },
        {
            id:3,
            img: "https://cdn.discordapp.com/attachments/1451776588529270808/1454221055273996408/pngtree-instagram-icon-instagram-logo-png-image_3584853.png?ex=69504c65&is=694efae5&hm=0a1e2637c32ff2d56752ecdde7e1b64233369dc5fbf5c1c0981c3e2e623e7d3b",
            title:"Instagram",
            link:"https://www.instagram.com/kittmkrn_",
        },
        {
            id:5,
            img: "https://cdn.discordapp.com/attachments/1451776588529270808/1454239594403860500/LINE_ALBUM__Portfolio_2_231014_4.jpg?ex=69505da9&is=694f0c29&hm=4af57cdfc4d96d0b9bb4fa3ea45c1839b382493c124dcf24be0072bb1cba2025",
            title:"Kittipakorn's website",
            link:"https://www.kittipakorn.com",
        },
    ];

   
    return (
        <div className={`${fontS.className} font-auto relative min-h-screen w-full overflow-auto p-1`}>
            <div className="relative z-10 flex flex-col items-center pt-3 m-4 md:m-8">
                <Image className="w-24 h-24 rounded-full" alt="profile" src="https://cdn.discordapp.com/attachments/1451776588529270808/1454191273643868304/Screenshot_2568-12-27_at_02.15.43.png?ex=695030a9&is=694edf29&hm=7c95b173df1e26c4b104e915708a24e1225d589382fb9de592e64eeb71e5f634" width={1000} height={1000} />
                <h1 className='flex items-center text-white font-bold text-xl italic mt-3'><span className='aurora-text pr-1'>Kittipakorn</span> <span><Image className='w-4 h-4 ml-2' alt="badge" src="https://cdn.discordapp.com/attachments/1451776588529270808/1454231162909364287/verified-badge-profile-icon-png.png?ex=695055cf&is=694f044f&hm=299d0e941b748bf8dcb0161933efd27c169e1593e0ec379519da7a38355dde2c" width={300} height={300}></Image></span></h1>
                <h2 className='text-gray-400 font-extralight text-center'> Computer Engineering & Game Streamer</h2>
                <h3 className='text-gray-400 font-extralight mt-3 text-center'>ผมโมครับ สตรีมเมอร์ที่เขียนโค้ดได้นิดหน่อย<br/> ขอบคุณทุกคนที่แวะมาช่วยเติม <span className='text-gray-200'>พลังเซียน</span> ก่อนที่ผมจะธาตุไฟเข้าแทรก🔥</h3>    

                

                <div className='flex flex-col gap-3 mt-5'>
                    {data.map(item => (
                        <a href={item.link} key={item.id} target="_self" className='cursor-pointer flex p-3 text-gray-200 w-[93vw] max-w-[800px] items-center bg-[rgba(50,79,83,0.14)] hover:bg-[rgba(50,79,83,0.24)]'
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        style={{
                        borderRadius: "10px",
                        boxShadow: "0 4px 30px rgba(21, 16, 16, 0.1)",
                        backdropFilter: "blur(5px)",
                        WebkitBackdropFilter: "blur(5px)",
                        border: "1px solid rgba(0, 105, 114, 0.3)",
                        }}
                    >
                        <Image className="w-8 h-8 rounded-lg" alt="profile" src={item.img} width={300} height={300}/>
                        
                        <h1 className='reletive w-full text-md text-center'>{item.title}</h1>

                        </a>
                    ))}
                </div>

                <div className='mt-10'>
                    <h1 className='text-gray-400 text-center'>ติดต่องาน / สปอนเซอร์ <br/> kittipakorn.seenak@gmail.com หรือ DM 💌</h1>
                </div>
            </div>


            


            <div
                className="absolute inset-0 z-0 bg-cover bg-center backdrop-blur brightness-[0.65] scale-100"
                style={{backgroundImage:"url('https://media.discordapp.net/attachments/1451776588529270808/1454202917740347525/0AF93623-A67B-4F96-B929-CEA94AD3BC4A_1_201_a.jpeg?ex=695d6a81&is=695c1901&hm=ede4c37b6e8b49a62d763d8e44e304bbb0ca22dd77551ea6dea09f51346e6529&=&format=webp&width=2562&height=1492')",}}>
            </div>
            <div className="absolute inset-0 backdrop-blur-lg bg-white/10" />

        </div>
    )
}
