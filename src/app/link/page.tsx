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
            img: "https://i.ibb.co/1GxT91Zg/donate.png",
            title:"โดเนทขึ้นจอเติมพลังเซียน 🧘‍♂️",
            link:"https://easydonate.app/kittmkrn_",
        },
        { 
            id:2,
            img: "https://i.ibb.co/N6d4SGr1/beyondlab.png",
            title:"สมัครคอร์สเรียน TOI-Zero",
            link:"https://www.instagram.com/beyondlab.official",
        },
        {
            id:3,
            img: "https://i.ibb.co/gLmk9dXp/tiktok.webp",
            title:"TikTok",
            link:"https://www.tiktok.com/@kittmkrn_?_r=1&_t=ZS-92YP7YEPhHp",
        },
        {
            id:4,
            img: "https://i.ibb.co/0Vs2NrDR/ig.png",
            title:"Instagram",
            link:"https://www.instagram.com/kittmkrn_",
        },
        {
            id:5,
            img: "https://i.ibb.co/fzYW0Wzg/github-png.webp",
            title:"GitHub",
            link:"https://github.com/Kittipakorn",
        },
        {
            id:6,
            img: "https://i.ibb.co/p6mtSQKz/profile.png",
            title:"Kittipakorn's website",
            link:"https://www.kittipakorn.com",
        },
    ];

    return (
        <div className={`${fontS.className} font-auto relative min-h-screen w-full overflow-auto p-1`}>
            <div className="relative z-10 flex flex-col items-center pt-2 m-4 md:m-8">
                <Image className="w-24 h-24 rounded-full" alt="profile" src="https://cdn.discordapp.com/attachments/1451776588529270808/1454191273643868304/Screenshot_2568-12-27_at_02.15.43.png?ex=695030a9&is=694edf29&hm=7c95b173df1e26c4b104e915708a24e1225d589382fb9de592e64eeb71e5f634" width={1000} height={1000} />
                <h1 className='flex items-center text-white font-bold text-xl italic mt-3'><span className='aurora-text pr-1'>Kittipakorn</span> <span><Image className='w-4 h-4 ml-2' alt="badge" src="https://cdn.discordapp.com/attachments/1451776588529270808/1454231162909364287/verified-badge-profile-icon-png.png?ex=695055cf&is=694f044f&hm=299d0e941b748bf8dcb0161933efd27c169e1593e0ec379519da7a38355dde2c" width={300} height={300}></Image></span></h1>
                <h2 className='text-gray-400 font-extralight text-center'> Computer Engineering & Game Streamer</h2>
                <h3 className='text-gray-400 font-extralight mt-2 text-center'>ผมโมครับ สตรีมเมอร์ที่เขียนโค้ดได้นิดหน่อย<br/> ขอบคุณทุกคนที่แวะมาช่วยเติม <span className='text-gray-200'>พลังเซียน</span> ก่อนที่ผมจะธาตุไฟเข้าแทรก🔥</h3>    

                

                <div className='flex flex-col gap-2 mt-5'>
                    {data.map(item => (
                        <a href={item.link} key={item.id} target="_self" className='cursor-pointer flex p-2 text-gray-200 w-[93vw] max-w-[800px] items-center bg-[rgba(50,79,83,0.14)] hover:bg-[rgba(50,79,83,0.24)]'
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
                className="absolute inset-0 z-0 bg-cover bg-center backdrop-blur brightness-[0.6] scale-100"
                style={{backgroundImage:"url('https://i.ibb.co/qYBxKmwF/bg.jpg')",}}>
            </div>
            <div className="absolute inset-0 backdrop-blur-xl bg-gray-400/10" />

        </div>
    )
}


{/* <a href="https://ibb.co/nMrR9QS8"><img src="" alt="bg" border="0"></a>
<a href="https://ibb.co/Y7FrZVXD"><img src="" alt="beyondlab" border="0"></a>
<a href="https://ibb.co/s9rqFnjf"><img src="" alt="donate" border="0"></a>
<a href="https://ibb.co/CsP8dQ13"><img src="https://i.ibb.co/0Vs2NrDR/ig.png" alt="ig" border="0"></a>
<a href="https://ibb.co/pjWGjgp8"><img src="https://i.ibb.co/s95k9hrG/icon.png" alt="icon" border="0"></a>
<a href="https://ibb.co/7djsCQT5"><img src="https://i.ibb.co/gLmk9dXp/tiktok.webp" alt="tiktok" border="0"></a>
<a href="https://ibb.co/9H6kZRnV"><img src="https://i.ibb.co/s9ndWLj6/verified.png" alt="verified" border="0"></a> */}