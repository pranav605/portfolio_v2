import React from 'react';

const storyData = [
  {
    number: 1,
    title: 'Beginnings',
    content: (
      <>
        <p>
          At the age of 10, I was introduced to a computer. Curious about it I spent most of my time learning, by learning I mean playing games :) With time my interest towards computers grew, so I chose to pursure computer science for my undergrad.
        </p>
        <p className="mt-2">
          In 2016, I started programming for the first time. I started programming in C as part of my curriculum.{' '}
        </p>
      </>
    ),
  },
  {
    number: 2,
    title: 'Web development',
    content: (
      <p>
        In 2017, I started learning how to create websites. I began with HTML and CSS. I started creating basic websites using HTML and CSS.
      </p>
    ),
  },
  {
    number: 3,
    title: 'JavaScript',
    content: (
      <>
        <p>
          I started learning JavaScript in 2018 and built small programs like a digital piano to sharpen my skills. As my interest in web development grew, I began exploring various web technologies and frameworks.
        </p>
        <p className="mt-2">
          In 2019, I created a <a href='https://github.com/pranav605' target='_blank' className='text-teal-400 hover:underline cursor-pointer'>GitHub</a> profile to share my projects and track my learning journey. Since then, I’ve been building web applications both personally and professionally, continuously improving my craft.
        </p>
      </>
    ),
  },
  {
    number: 4,
    title: 'And more',
    content: (
      <p>
        I can create computer programs, mobile apps, web scrapers, and more. If you'd like to support me, feel free to give one of my repositories a star.
      </p>
    ),
  },
];

export default function StorySection() {
  return (
    <section className="mb-5 max-w-[50rem] ml-auto mr-auto flex flex-col text-white mt-10">
      <h2 className="text-2xl sm:text-4xl font-bold mb-10">Story</h2>
      <div className="space-y-12 m-4">
        {storyData.map(({ number, title, content }) => (
          <div key={number} className="relative p-6 sm:p-6 border-l-2 border-gray-700">
            <div className="absolute -left-3.5 top-6.5 text-black bg-gray-200 w-6 h-6 rounded-full flex items-center justify-center font-bold">
              {number}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
            <div className="text-gray-300 leading-relaxed">
              {content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
