import React from 'react';

const storyData = [
  {
    number: 1,
    title: 'Beginnings',
    content: (
      <>
        <p>
          My fascination with computers began at the age of 10. What started as curiosity—and admittedly a lot of gaming—quickly grew into a genuine interest in understanding how computers work. This early passion led me to pursue a degree in Computer Science, where I formally began my journey into programming.
        </p>
        <p className="mt-2">
          In 2016, I wrote my first lines of code in C as part of my undergraduate curriculum. This hands-on experience introduced me to problem-solving through programming and set the stage for exploring more complex technologies.
        </p>
      </>
    ),
  },
  {
    number: 2,
    title: 'Web development',
    content: (
      <p>
        By 2017, I had discovered web development. I started with HTML and CSS, building basic websites and experimenting with design and layout. This phase helped me understand the fundamentals of user interfaces and the importance of creating visually appealing, functional applications.
      </p>
    ),
  },
  {
    number: 3,
    title: 'JavaScript',
    content: (
      <>
        <p>
          In 2018, I began learning JavaScript, building small projects like a digital piano to practice and enhance my coding skills. As my interest in web development deepened, I explored various frameworks and modern web technologies. 
        </p>
        <p className="mt-2">
          In 2019, I created a <a href='https://github.com/pranav605' target='_blank' className='text-teal-400 hover:underline cursor-pointer'>GitHub</a> profile to showcase my projects and track my learning journey. Since then, I have been building web applications both personally and professionally, continuously refining my craft.
        </p>
      </>
    ),
  },
  {
    number: 4,
    title: 'And more',
    content: (
      <p>
        Today, my skill set extends beyond web development. I create computer programs, mobile apps, web scrapers, and more. I am passionate about solving real-world problems with technology and welcome anyone interested in supporting my work to explore my GitHub repositories.
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
