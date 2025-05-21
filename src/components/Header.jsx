import { Open_Sans} from "next/font/google";

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['400'],
});


export default function Header() {
    return (
        <header className={`h-16  ${openSans.className}`}>
            <nav className="flex h-full flex-row justify-between">
                <h1 className="flex-1/3 text-xl justify-baseline items-center flex">Sai Pranav Nishtala</h1>
                <ul className="flex flex-1/3 text-md flex-row gap-[16px] justify-center items-center">
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Projects</li>
                    <li>Contact Me</li>
                </ul>
                <div className='flex flex-1/3 text-xl justify-end items-center'>
                    <p className=' cursor-pointer '>English</p>
                </div>
            </nav>
        </header>
    );
}