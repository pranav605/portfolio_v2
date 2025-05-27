import React from 'react';


export default function Contact() {
    return (
        <main className="content mt-16 text-sm sm:text-lg mb-16 m-auto font-sans max-w-[60rem] min-h-screen" >
            <div className={`max-w-[50rem] m-auto h-full `}>
                <div className='rounded-md border border-zinc-800 p-5 flex flex-col gap-2'>
                    <h1 className='text-2xl sm:text-4xl font-extrabold'>Contact Me</h1>
                    <p className='text-gray-400'>You can reach out to me via Email, Linkedin or Discord.</p>
                    <div className='flex flex-row justify-around mt-10'>
                        <a href='http://discord.com/users/pranav605' target='_blank' className='flex flex-col gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M42.298,11.65c-0.676,-1.021 -1.633,-1.802 -2.768,-2.256c-2.464,-0.988 -4.583,-1.648 -6.479,-2.02c-1.33,-0.26 -2.647,0.394 -3.28,1.626l-0.158,0.308c-1.404,-0.155 -2.895,-0.207 -4.593,-0.164c-1.741,-0.042 -3.237,0.009 -4.643,0.164l-0.157,-0.308c-0.633,-1.232 -1.952,-1.885 -3.279,-1.625c-1.896,0.371 -4.016,1.031 -6.479,2.02c-1.134,0.454 -2.091,1.234 -2.768,2.256c-4.721,7.131 -6.571,14.823 -5.655,23.517c0.032,0.305 0.202,0.578 0.461,0.741c3.632,2.29 6.775,3.858 9.891,4.936c1.303,0.455 2.748,-0.054 3.517,-1.229l1.371,-2.101c-1.092,-0.412 -2.158,-0.9 -3.18,-1.483c-0.479,-0.273 -0.646,-0.884 -0.373,-1.363c0.273,-0.481 0.884,-0.65 1.364,-0.373c3.041,1.734 6.479,2.651 9.942,2.651c3.463,0 6.901,-0.917 9.942,-2.651c0.479,-0.277 1.09,-0.108 1.364,0.373c0.273,0.479 0.106,1.09 -0.373,1.363c-1.056,0.603 -2.16,1.105 -3.291,1.524l1.411,2.102c0.581,0.865 1.54,1.357 2.528,1.357c0.322,0 0.647,-0.053 0.963,-0.161c3.125,-1.079 6.274,-2.649 9.914,-4.944c0.259,-0.163 0.429,-0.437 0.461,-0.741c0.918,-8.695 -0.932,-16.388 -5.653,-23.519zM18.608,28.983c-1.926,0 -3.511,-2.029 -3.511,-4.495c0,-2.466 1.585,-4.495 3.511,-4.495c1.926,0 3.511,2.029 3.511,4.495c0,2.466 -1.585,4.495 -3.511,4.495zM31.601,28.957c-1.908,0 -3.478,-2.041 -3.478,-4.522c0,-2.481 1.57,-4.522 3.478,-4.522c1.908,0 3.478,2.041 3.478,4.522c0,2.481 -1.57,4.522 -3.478,4.522z"></path></g></g>
                            </svg>
                            <p className="font-bold text-white">Discord</p>
                            <p className="text-gray-400 font-semibold text-base">pranav605</p>
                        </a>
                        <a href='mailto:saipranavnishtala@gmail.com' className='flex flex-col gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M43.75391,6.40234c-1.2177,-0.05335 -2.45911,0.31055 -3.48242,1.06641l-2.74609,2.02734l-12.52539,9.25977l-12.4082,-9.17187c-0.17292,-0.16897 -0.4012,-0.26957 -0.64258,-0.2832h0.25l-2.46484,-1.82422c-1.02397,-0.75773 -2.26723,-1.12367 -3.48633,-1.07031c-1.2191,0.05336 -2.4131,0.52522 -3.33984,1.43945c-1.17726,1.16068 -1.9082,2.78413 -1.9082,4.56445v3.43359c-0.01457,0.09777 -0.01457,0.19715 0,0.29492v23.36133c0,1.92119 1.57881,3.5 3.5,3.5h7.5c0.55226,-0.00006 0.99994,-0.44774 1,-1v-16.62695l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0l11.40625,-8.43164v16.62695c0.00006,0.55226 0.44774,0.99994 1,1h7.5c1.92119,0 3.5,-1.57881 3.5,-3.5v-23.38086c0.01129,-0.08622 0.01129,-0.17355 0,-0.25977v-3.44922c0,-1.75846 -0.70954,-3.37437 -1.87109,-4.53711c-0.03357,-0.03357 -0.04482,-0.04287 -0.03125,-0.0293c-0.00194,-0.00196 -0.0039,-0.00391 -0.00586,-0.00586c-0.92656,-0.91221 -2.12019,-1.3822 -3.33789,-1.43555zM43.64453,8.40039c0.7563,0.02965 1.48952,0.3165 2.04492,0.86328c0.01891,0.01867 0.03272,0.03277 0.02344,0.02344c0.79645,0.79726 1.28711,1.9015 1.28711,3.12305v3.08594l-8,5.91211v-10.4082c0.00042,-0.0339 -0.00088,-0.0678 -0.00391,-0.10156l2.46289,-1.82031c0.00065,0 0.0013,0 0.00195,0c0.64864,-0.47915 1.42729,-0.70739 2.18359,-0.67773zM6.35742,8.40625c0.75715,-0.02964 1.53847,0.19746 2.1875,0.67773l2.45898,1.81836c-0.00289,0.03247 -0.0042,0.06506 -0.00391,0.09766v10.4082l-8,-5.91211v-3.08594c0,-1.23567 0.50176,-2.3413 1.3125,-3.14062c0.55526,-0.54776 1.28777,-0.83364 2.04492,-0.86328zM37,12.37109v10.51563l-12,8.86914l-12,-8.86914v-10.51367l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0zM3,17.98242l8,5.91406v17.10352h-6.5c-0.84081,0 -1.5,-0.65919 -1.5,-1.5zM47,17.98242v21.51758c0,0.84081 -0.65919,1.5 -1.5,1.5h-6.5v-17.10352z"></path></g></g>
                            </svg>
                            <p className="font-bold text-white">Email</p>
                            <p className="text-gray-400 font-semibold text-base">saipranavnishtala@gmail.com</p>
                        </a>
                        <a href='https://www.linkedin.com/in/sai-pranav-nishtala/' target='_blank' className='flex flex-col gap-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0,0,256,256">
                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
                            </svg>
                            <p className="font-bold text-white">Linkedin</p>
                            <p className="text-gray-400 font-semibold text-base">sai-pranav-nishtala</p>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}
