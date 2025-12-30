'use client'
import HorizontalCarousel from '@/components/HorizontalCarousel';
import { getProject } from '@/utils/projectData';
import { LinkIcon } from '@heroicons/react/24/outline';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react';

export default function ProjectDetails() {
    const params = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        setData(getProject(params.id))
    }, [params.id])

    return (
        <div className='mb-5 max-w-[50rem] ml-auto mr-auto flex flex-col text-white mt-10'>
            <div className="rounded-md border border-zinc-800 p-5 flex flex-col gap-4">
                <div className='flex flex-row w-full justify-between gap-2'>
                    <h1 className="text-2xl sm:text-4xl font-extrabold">{data.title}</h1>
                    <div className="flex gap-2 justify-end m-0">
                        {data.title === 'Career Conversation Chatbot' ? <button
                            onClick={() => window.openChatbot?.()}
                            className="p-2.5 border border-zinc-800 rounded-md"
                        >
                            <LinkIcon height={20} width={20} />
                        </button> : <a href={data.url} target="_blank" className="m-0">
                            <div className="p-2.5 border border-zinc-800 rounded-md">
                                <LinkIcon height={20} width={20} />
                            </div>
                        </a>}
                    </div>
                </div>
                <div className='flex gap-2 mt-1 custom flex-wrap'>
                    {Array.isArray(data.technologies) && data.technologies.map((t, i) => {
                        return (
                            <div key={i} className='border border-zinc-700 rounded-md p-2 flex items-center custom mb-0 gap-2'>
                                {t.svg}
                                <span>{t.title}</span>
                            </div>
                        );
                    })}
                </div>
                <p className="text-gray-400">{data.description}</p>
            </div>
            <div className='mt-8 flex flex-col gap-4'>
                {Array.isArray(data.longDescription) && data.longDescription.map((d, i) => {
                    return (
                        <p key={i}>{d}</p>
                    )
                })}
            </div>
            <div className='flex gap-2 flex-col mt-8'>
                {data.carousel_images?.length > 1
                    ?
                    <HorizontalCarousel cardData={data.carousel_images} initialIndex={0} />
                    :
                    <img src={'/' + data.image} alt='screenshot' className='w-full rounded-md object-contain max-h-[480px]'></img>
                }
            </div>
        </div>
    )
}