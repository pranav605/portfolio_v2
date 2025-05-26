import { Open_Sans, Share_Tech, Karla, Figtree} from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
});

const shareTech = Share_Tech({
    subsets: ['latin'],
    weight: ['400']
});

const karla = Karla({
    subsets: ['latin'],
    weight: ['400']
});

const figtree = Figtree({
    subsets: ['latin'],
    weight: ['300']
})

export default function Header() {
    return (
        <header className={`h-16`}>
            <nav className="flex h-full flex-row justify-between">
                <h1 className="flex-1/3 text-xl justify-baseline items-center flex"><Link href={'/'}>Sai Pranav Nishtala</Link></h1>
                <ul className="flex flex-1/3 text-md flex-row gap-[32px] justify-center items-center">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about" >About</Link></li>
                    <li><Link href="/projects" >Projects</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
                <div className='flex flex-1/3 text-xl justify-end items-center'>
                    <p className=' cursor-pointer '>English</p>
                </div>
            </nav>
        </header>
    );
}