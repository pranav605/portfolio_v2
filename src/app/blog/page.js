import Tab from '@/components/Tab'
import Tabs from '@/components/Tabs'
import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

const BlogCard = ({ blog }) => (
  <article className="group py-8 border-b border-white/10 first:pt-0">
    <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-start">
      <div className="flex flex-col flex-grow w-full">

        {/* Content */}
        <Link href={`/blog/${blog.id}`} className="block group-hover:opacity-80 transition-opacity">
          <h2 className="text-2xl font-bold text-white mb-2 leading-tight tracking-tight">{blog.title}</h2>
          <p className="text-gray-400 mb-6 line-clamp-2 md:line-clamp-3 leading-relaxed hidden sm:block">
            {blog.excerpt}
          </p>
        </Link>

        {/* Meta / Footer */}
        <div className="flex items-center justify-between text-sm text-gray-400 mt-auto">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1 text-yellow-500">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              {blog.date}
            </span>
            {/* <span className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
              {blog.likes}
            </span> */}
            {/* <span className="flex items-center gap-1.5 hover:text-white cursor-pointer transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              {blog.comments}
            </span> */}
          </div>
          {/* <div className="flex items-center gap-4 hidden sm:flex">
            <button className="hover:text-white transition-colors" title="Bookmark"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg></button>
            <button className="hover:text-white transition-colors" title="More Options"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg></button>
          </div> */}
        </div>
      </div>

      {/* Image */}
      <Link href={`/blog/${blog.id}`} className="shrink-0 w-full sm:w-[160px] md:w-[200px] h-[160px] sm:h-[110px] md:h-[134px] order-first sm:order-last mb-4 sm:mb-0">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover rounded-md group-hover:opacity-90 transition-opacity"
        />
      </Link>
    </div>
  </article>
)

export default function Blog() {
  const allBlogs = getAllPosts();
  const featuredBlogs = allBlogs.filter(blog => blog.featured);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8">
        <h1 className='text-3xl md:text-4xl font-bold tracking-tighter leading-tight text-white mb-4'>Blog</h1>
        <p className="text-gray-400 text-lg">Thoughts, ideas, and experiments.</p>
      </div>
      <Tabs>
        <Tab key="featured" title="Featured">
          <div className="flex flex-col mt-6">
            {featuredBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </Tab>
        <Tab key="all" title="All">
          <div className="flex flex-col mt-6">
            {allBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}

