import Experience from '@/components/Experience'
import StorySection from '@/components/StorySection'
import React from 'react'

export default function About() {
    return (
        <div className='mb-5 max-w-[50rem] ml-auto mr-auto flex flex-col text-white mt-10'>
            <h1 className='text-xl sm:text-4xl font-bold mb-4'>About Me</h1>
            <div className='gap-2 flex flex-col p-6'>
                <p>
                    With several years of professional experience in Web Development, I specialize in building full-stack websites that are fast, minimalist, and user-friendly. My work emphasizes accessibility, performance optimization, and SEO to ensure seamless user experiences and strong search visibility.
                </p>

                <p>
                    I'm passionate about technology and love turning ideas into clean, functional web applications. Whether it's building custom APIs or fine-tuning a frontend interface, I enjoy the challenge of solving real-world problems through code. I believe in writing maintainable, efficient code and delivering solutions that not only work well but feel great to use.
                </p>

                <p>
                    Originally from India and now based in Canada, I'm always exploring new tech, frameworks, and tools to stay ahead in the fast-evolving world of web development. Outside of coding, you'll often find me playing ping pong, which helps me stay focused and energized. I value continuous learning, creative thinking, and building products that make a meaningful impact.
                </p>
            </div>
            <Experience />
            <StorySection />
        </div>
    )
}
