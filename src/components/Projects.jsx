import { getAllProjects } from '@/utils/projectData';
import Link from 'next/link';
import React from 'react'

export default function Projects() {
    const data = getAllProjects();
    return (
        <div className='mb-5 max-w-[50rem] ml-auto mr-auto flex flex-col text-white mt-10'>
            <h1 className='text-xl sm:text-4xl font-bold mb-4'>Personal projects</h1>
            <div className='flex flex-col gap-4'>
                {data.map((project, index) => {
                    return (
                        <Link href={`/projects/${project.id}`} key={index}>
                            <div className='group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl transform-gpu bg-background [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] min-h-[300px] sm:min-h-[400px] md:min-h-[500px]'>
                                <div>
                                    <img src={project.image} className='absolute left-0 top-0 h-full w-full border-none transition-all duration-300 ease-out opacity-70 [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] group-hover:scale-105 object-center'></img>
                                </div>
                                <div className='pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10'>
                                    <h1 className='text-xl font-semibold text-neutral-700 dark:text-neutral-300 m-0 custom'>{project.title}</h1>
                                    <div className='flex gap-2 mt-1 custom flex-wrap'>
                                        {project.technologies.map((t, i) => {
                                            return (
                                                <div key={i} className='border border-zinc-700 rounded-md p-2 flex items-center custom mb-0 gap-2'>
                                                    {t.svg}
                                                    <span>{t.title}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <p className="max-w-lg text-neutral-400 m-0 custom">{project.description}</p>
                                </div>
                                <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 custom ml-2"><div className="pointer-events-auto custom bg-white rounded-lg py-1 px-2 text-xs text-black flex gap-2 items-center cursor-pointer hover:bg-white/80 transition-colors">Learn more<div className="ml-2 h-4 w-4 icn"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645l4.00005 4c.1952.19526.1952.51184.0.707100000000001L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536c-.19527-.1953-.19527-.511900000000001.0-.7072L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5s.22386-.5.5-.5h8.7929L8.14645 3.85355c-.19527-.19526-.19527-.51184.0-.7071z" fill="currentcolor" fillRule="evenodd" clipRule="evenodd"></path></svg></div></div></div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}
