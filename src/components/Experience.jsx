import React from 'react'

export default function Experience() {
  return (
    <div className='mb-5 max-w-[50rem] ml-auto mr-auto flex flex-col text-white mt-10'>
        <h1 className='text-xl sm:text-4xl font-bold'>Experience</h1>
        <ul className="mt-8 border-l-2 border-gray-700 p-6 m-4">
            <li className="mb-8 relative">
                <div className="absolute -left-9 top-1 w-6 h-6 bg-green-600 rounded-full border-4 border-white"></div>
                <h2 className="text-lg font-semibold">Technology Analyst (Frontend)</h2>
                <span className="text-sm text-gray-400">Infosys Ltd | Jan 2023 - Jun 2023</span>
                <p className="mt-2 text-gray-300">
                    Developed and optimized interactive front-end modules using React.js, jQuery, and SVG, including a tree-based product navigation system that simplified complex workflows. Improved cross-browser responsiveness and boosted cross-device usability by 50% while resolving multi-step form validation issues, reducing user errors by 20%. Implemented unit tests with Jest, collaborated on QA defect analysis, redesigned HTML/CSS email templates for consistent branding, and debugged legacy code to fix performance bottlenecks.
                </p>
            </li>
            <li className="mb-8 relative">
                <div className="absolute -left-9 top-1 w-6 h-6 bg-green-600 rounded-full border-4 border-white"></div>
                <h2 className="text-lg font-semibold">Systems Engineer (Frontend)</h2>
                <span className="text-sm text-gray-400">Infosys Ltd | Oct 2020 - Dec 2022</span>
                <p className="mt-2 text-gray-300">
                    Developed and styled React.js components for e-commerce platforms, including landing pages, product carousels, and interactive carts. Implemented secure login/registration flows, dynamic forms, and interactive product detail pages. Modernized the codebase with reusable components, resolved cross-browser rendering issues, optimized layouts, and provided production support for front-end performance challenges.
                </p>
            </li>
              {/* <li className="mb-8 relative">
                <div className="absolute -left-9 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white"></div>
                <h2 className="text-lg font-semibold">AI/CV Intern</h2>
                <span className="text-sm text-gray-400">Matdun Corp. | Sep 2024 - Dec 2024</span>
                <p className="mt-2 text-gray-300">
                    Developed an intuitive Django-based web interface and internal tools to streamline dataset generation and enhance data quality, contributing to a 92% detection accuracy on CCTV footage through optimized model training pipelines
                </p>
            </li> */}
        </ul>
    </div>
  )
}
