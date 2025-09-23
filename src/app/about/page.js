import Experience from '@/components/Experience'
import StorySection from '@/components/StorySection'
import React from 'react'

export default function About() {
    return (
        <div className='mb-5 max-w-[50rem] ml-auto mr-auto flex flex-col text-white mt-10'>
            <h1 className='text-xl sm:text-4xl font-bold mb-4'>About Me</h1>
            <div className='gap-2 flex flex-col p-6'>
                <p> With over 2+ years of professional experience in web development, I specialize in building high-performance, responsive, and accessible front-end applications using React.js, TypeScript, HTML5, CSS3, and SCSS. My work emphasizes cross-browser compatibility, WCAG accessibility standards, and performance optimization, ensuring seamless user experiences across desktop, tablet, and mobile devices. I also integrate SEO best practices to enhance visibility and discoverability for web applications. </p> <p> I am passionate about technology and enjoy turning ideas into scalable, maintainable, and user-friendly web applications. From designing interactive UI components and Kanban boards to integrating REST APIs and ensuring robust secure coding standards, I thrive on solving complex, real-world problems through clean and efficient code. I actively participate in Agile SDLC processes, collaborating with product owners, QA, and technical leads to deliver enterprise-grade solutions. </p> <p> Originally from India and now based in Canada, I continuously explore new frameworks, tools, and modern front-end techniques to stay ahead in the evolving world of web development. Beyond coding, I enjoy ping pong and team activities, which keep me energized and focused. I am committed to continuous learning, creative problem solving, and building web products that make a meaningful impact. </p>
            </div>
            <Experience />
            <StorySection />
        </div>
    )
}
