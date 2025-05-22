import React from 'react'

export default function Experience() {
  return (
    <div className='mb-5 max-w-[50rem] ml-auto mr-auto flex flex-col text-white mt-10'>
        <h1 className='text-xl sm:text-4xl font-bold'>Experience</h1>
        <ul className="mt-8 border-l-2 border-gray-700 p-6 m-4">
            <li className="mb-8 relative">
                <div className="absolute -left-9 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
                <h2 className="text-lg font-semibold">AI/CV Intern</h2>
                <span className="text-sm text-gray-400">Matdun Corp. | Sep 2024 - Dec 2024</span>
                <p className="mt-2 text-gray-300">
                    Developed an intuitive Django-based web interface and internal tools to streamline dataset generation and enhance data quality, contributing to a 92% detection accuracy on CCTV footage through optimized model training pipelines
                </p>
            </li>
            <li className="mb-8 relative">
                <div className="absolute -left-9 top-1 w-6 h-6 bg-green-600 rounded-full border-4 border-white"></div>
                <h2 className="text-lg font-semibold">Technology Analyst (Full Stack)</h2>
                <span className="text-sm text-gray-400">Infosys Ltd | Oct 2020 - Jun 2023</span>
                <p className="mt-2 text-gray-300">
                    Designed and maintained high-performance, responsive front-end pages, collaborated with UI/UX teams for seamless mockup integration, and optimized site performance by debugging complex JavaScript issues; promoted from Systems Engineer to Technology Analyst for consistent delivery and leadership.

                </p>
            </li>
        </ul>
    </div>
  )
}
