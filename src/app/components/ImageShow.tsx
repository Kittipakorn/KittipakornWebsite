"use client";
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageData {
    img: string;
}

interface ImageShowProps {
    data: ImageData[];
    index: number;
    onClose: () => void;
}


export default function ImageShow({ data, index, onClose }: ImageShowProps) {
    const [selected, setSelected] = useState(index);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <div className="relative w-full h-full max-w-[90%] max-h-[90%] rounded-lg flex items-center justify-center">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                        </div>
                    )}

                    <div className="relative w-full h-full aspect-[8.27/11.69] flex items-center justify-center">
                        <Image alt={`Selected Image ${selected}`} src={data[selected - 1]?.img || ""} className={`object-contain rounded-lg ${isLoading ? "opacity-0" : "opacity-100"}`} layout="fill" onLoad={() => setIsLoading(false)} />
                    </div>

                    <button className="absolute max-md:-right-3 opacity-60 top-5 right-5 text-black bg-white text-2xl rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200" onClick={() => { onClose(); }}>
                        &times;
                    </button>

                    <button className="absolute max-md:-left-2 opacity-60 left-5 text-3xl rounded-full w-12 h-12 flex items-center justify-center text-black bg-white hover:bg-gray-200" onClick={() => { setSelected(selected > 1 ? selected - 1 : data.length); setIsLoading(true); }}>
                        &#8249;
                    </button>

                    <button className="absolute max-md:-right-2 opacity-60 right-5 text-3xl rounded-full w-12 h-12 flex items-center justify-center text-black bg-white hover:bg-gray-200" onClick={() => { setSelected(selected < data.length ? selected + 1 : 1); setIsLoading(true); }}>
                        &#8250;
                    </button>
                </div>
            </div>
        </>
    );
}

