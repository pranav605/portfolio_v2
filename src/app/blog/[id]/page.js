import React from 'react'
import Link from 'next/link'
import CodeBlock from '@/components/CodeBlock'
import BlogImage from '@/components/BlogImage'
import { getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'

// We'll use dummy data for any ID, but in a real app, we'd fetch based on params.id
export default async function BlogPost({ params }) {
    const resolvedParams = await params;
    const { id } = resolvedParams;

    const { frontmatter, content } = getPostBySlug(id);

    return (
        <article className="max-w-3xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Back Link */}
            <Link href="/blog" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-8 group">
                <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Back to Blog
            </Link>

            {/* Hero Section */}
            <header className="mb-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                    {frontmatter.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                    {frontmatter.authorAvatar && (
                        <div className="flex items-center gap-2">
                            <img
                                src={frontmatter.authorAvatar}
                                alt={frontmatter.author || 'Author'}
                                className="w-8 h-8 rounded-full object-cover border border-white/10"
                            />
                            <span className="font-medium text-gray-200">{frontmatter.author}</span>
                        </div>
                    )}
                    {frontmatter.authorAvatar && <span>•</span>}
                    <time dateTime="2026-02-08">{frontmatter.date}</time>
                    <span>•</span>
                    <span>{frontmatter.readTime}</span>
                </div>

                {frontmatter.image && (
                    <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative">
                        <img
                            src={frontmatter.image}
                            alt="Hero image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}
            </header>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed text-lg">
                {frontmatter.excerpt && (
                    <p className="text-xl text-gray-400 leading-relaxed mb-8">
                        {frontmatter.excerpt}
                    </p>
                )}

                <MDXRemote
                    source={content}
                    components={{
                        CodeBlock,
                        BlogImage,
                        pre: (props) => {
                            const codeProps = props.children?.props || {};
                            const className = codeProps.className || '';
                            const language = className.replace('language-', '') || 'text';
                            const code = codeProps.children || '';
                            return <CodeBlock language={language} code={code} />;
                        }
                    }}
                />
            </div>

            {/* Footer / Share
            <footer className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors group">
                        <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                        {frontmatter.likes || '0'}
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                        {frontmatter.comments || '0'}
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <button className="text-gray-400 hover:text-white hover:bg-white/5 p-2 rounded-full transition-colors" title="Share">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-5.368m0 5.368l5.662 3.397m-5.662-3.397l5.662-3.397m0 0a3 3 0 115.368 0 3 3 0 01-5.368 0z"></path></svg>
                    </button>
                    <button className="text-gray-400 hover:text-white hover:bg-white/5 p-2 rounded-full transition-colors" title="Bookmark">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
                    </button>
                </div>
            </footer> */}
        </article>
    )
}
