"use client"; 
import { useState ,FormEvent} from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
    const [inputName, setInputName] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [X, setX] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        if(inputName==''||inputMessage=='') return;
        if(X) return;
        setX(true);
        event.preventDefault();
        const formData = new FormData();
        formData.append("access_key", process.env.NEXT_PUBLIC_API_KEY || '');
        formData.append("name", inputName);
        formData.append("message", inputMessage);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                console.log("Form Submitted Successfully");
                (event.target as HTMLFormElement).reset();
            } else {
                console.log("Error", data);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
        setInputName('');
        setInputMessage('');
        setX(false);
    };

    return (
        <div>
            <Navbar />
            <div className='flex flex-col'>
                <div className='mx-auto pt-10 max-sm:pb-5 min-h-[85vh]'>
                    <p className='text-3xl font-bold text-center'>Contact me</p>
                    <div className='mx-auto flex gap-5 pt-3 max-sm:flex-col'>
                        <div className='min-w-[45vw] max-sm:min-w-[90vw]'>
                            <p className='font-semibold text-2xl text-center mt-10'>Send a message</p>
                            <div className='bg-gray-100 mt-10 p-5 rounded-2xl '>
                                <form onSubmit={handleSubmit}>
                                    <div className='flex flex-col gap-5'>
                                        <div className=''>
                                            <p className='font-semibold'>Name :</p>
                                            <input name="myInput"
                                                className='p-2 mt-1 rounded-lg border min-w-full'
                                                placeholder='Name'
                                                value={inputName}
                                                onChange={(e) => setInputName(e.target.value)} />
                                        </div>
                                        <div>
                                            <p className='font-semibold'>Message :</p>
                                            <textarea name="myInput"
                                                className='p-2 mt-1 rounded-lg border min-w-full min-h-[20vh] align-top resize-none'
                                                placeholder='Message'
                                                value={inputMessage}
                                                onChange={(e) => setInputMessage(e.target.value)} />
                                        </div>
                                        <input type="Submit" value="Submit" className='p-3 cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-xl text-white' />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='min-w-[40vw] max-sm:min-w-[90vw]'>
                            <p className='font-semibold text-2xl pt-10 text-center'>Contact details</p>
                            <div className='flex flex-col text-center gap-12 pt-20 max-sm:pt-10'>
                                <div>
                                    <p className='font-semibold text-lg'>Instragram</p>
                                    <p className=''>kittmkrn_</p>
                                </div>
                                <div>
                                    <p className='font-semibold text-lg'>Facebook</p>
                                    <p className=''>Kittipakorn Seenak</p>
                                </div>
                                <div>
                                    <p className='font-semibold text-lg'>Location</p>
                                    <p className=''>Ubon Ratchathani, Thailand</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

