const data = [
    {
        id: 1,
        image: 'openbank.png',
        title: 'OpenBank',
        url: 'https://open-bank-nsp.vercel.app',
        technologies: [
            {
                title: 'React JS',
                svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero"><g transform="scale(5.12,5.12)"><path d="M43.33594,4h-36.66797c-1.47266,0 -2.66797,1.19531 -2.66797,2.66797v36.66406c0,1.47266 1.19531,2.66797 2.66797,2.66797h36.66406c1.47266,0 2.66797,-1.19531 2.66797,-2.66406v-36.66797c0,-1.47266 -1.19531,-2.66797 -2.66406,-2.66797zM27,36.18359c0,3.99609 -2.34375,5.81641 -5.76562,5.81641c-3.09375,0 -5.32422,-2.07422 -6.23437,-4l3.14453,-1.90234c0.60547,1.07422 1.52734,1.90234 2.85547,1.90234c1.26953,0 2,-0.49609 2,-2.42578v-12.57422h4zM35.67578,42c-3.54297,0 -5.55469,-1.78516 -6.67578,-4l3,-2c0.81641,1.33594 1.70703,2.61328 3.58984,2.61328c1.58203,0 2.41016,-0.78906 2.41016,-1.88281c0,-1.30469 -0.85937,-1.76953 -2.59766,-2.53125l-0.95312,-0.41016c-2.75391,-1.17187 -4.58594,-2.64062 -4.58594,-5.75c0,-2.85937 2.18359,-5.03906 5.58984,-5.03906c2.42578,0 4.16797,0.84375 5.42578,3.05469l-2.96875,1.91016c-0.65625,-1.17578 -1.35937,-1.63672 -2.45703,-1.63672c-1.11719,0 -1.82422,0.71094 -1.82422,1.63672c0,1.14453 0.70703,1.60547 2.34375,2.31641l0.95313,0.41016c3.24609,1.38672 5.07422,2.80469 5.07422,5.99219c0,3.43359 -2.69922,5.31641 -6.32422,5.31641z"></path></g></g>
                </svg>,
            },
            {
                title: 'Tailwind',
                svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M22.105,7.553c-0.224,0.448 -0.523,0.723 -0.914,0.838c-0.612,0.183 -1.343,-0.052 -1.685,-0.253c-0.451,-0.265 -0.974,-0.667 -1.527,-1.092c-1.765,-1.358 -3.961,-3.046 -6.979,-3.046c-2.414,0 -3.654,1.239 -5.707,3.293l1.407,1.421c0.546,-0.425 4.031,-0.015 5.552,1.194c2.259,1.795 3.89,3.092 5.748,3.092c2.659,0 4.879,-1.741 5.94,-4.658zM16.192,15.391c-0.614,0.18 -1.343,-0.052 -1.685,-0.253c-0.451,-0.265 -0.974,-0.667 -1.527,-1.092c-1.766,-1.358 -3.962,-3.046 -6.98,-3.046c-2.414,0 -3.654,1.239 -5.707,3.293l1.407,1.421c0.545,-0.427 4.032,-0.014 5.552,1.194c2.259,1.795 3.89,3.092 5.748,3.092c2.659,0 4.879,-1.741 5.94,-4.658l-1.834,-0.789c-0.225,0.448 -0.523,0.722 -0.914,0.838z"></path></g></g>
                </svg>,
            },
            {
                title: 'HTML',
                svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M45.27344,2.32422c-0.1875,-0.20703 -0.45703,-0.32422 -0.73828,-0.32422h-39.07031c-0.28125,0 -0.55078,0.11719 -0.73828,0.32422c-0.19141,0.20703 -0.28516,0.48438 -0.25781,0.76563l3.51953,39.42578c0.03516,0.41406 0.32422,0.75781 0.72266,0.875l16.01172,4.57031c0.08594,0.02734 0.17969,0.03906 0.27344,0.03906c0.09375,0 0.18359,-0.01172 0.27344,-0.03906l16.02344,-4.57031c0.39844,-0.11719 0.68359,-0.46094 0.72266,-0.875l3.51563,-39.42578c0.02734,-0.28125 -0.06641,-0.55859 -0.25781,-0.76562zM36.84766,15.91797h-18.8125l0.44922,5.08984h17.91016l-1.34375,15.04297l-10.05859,3.03906l-0.09766,-0.03125l-9.94141,-3.01172l-0.54297,-6.12891h4.87109l0.21094,2.37891l5.55859,1.16406l5.45703,-1.16406l0.58203,-6.4375h-17.04297l-1.32422,-14.80469h24.55859z"></path></g></g>
                </svg>,
            }
        ],
        description: 'Modern Banking Website',
        longDescription: [
            'Built and deployed a responsive modern banking website from a design I liked in Figma using React.js and Tailwind CSS. The site features smooth animations, implemented using motion and a clean UI optimized for both desktop and mobile devices.',
            ' It showcases my ability to convert modern web designs into pixel perfect websites. Deployed on Vercel for fast, reliable performance.'
        ],
        showcase: true,
    },
    {
        id: 2,
        image: 'react_portfolio.png',
        title: 'React Portfolio',
        url: 'https://saipranavnishtala.vercel.app',
        technologies: [
            {
                title: 'React JS',
                svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero"><g transform="scale(5.12,5.12)"><path d="M43.33594,4h-36.66797c-1.47266,0 -2.66797,1.19531 -2.66797,2.66797v36.66406c0,1.47266 1.19531,2.66797 2.66797,2.66797h36.66406c1.47266,0 2.66797,-1.19531 2.66797,-2.66406v-36.66797c0,-1.47266 -1.19531,-2.66797 -2.66406,-2.66797zM27,36.18359c0,3.99609 -2.34375,5.81641 -5.76562,5.81641c-3.09375,0 -5.32422,-2.07422 -6.23437,-4l3.14453,-1.90234c0.60547,1.07422 1.52734,1.90234 2.85547,1.90234c1.26953,0 2,-0.49609 2,-2.42578v-12.57422h4zM35.67578,42c-3.54297,0 -5.55469,-1.78516 -6.67578,-4l3,-2c0.81641,1.33594 1.70703,2.61328 3.58984,2.61328c1.58203,0 2.41016,-0.78906 2.41016,-1.88281c0,-1.30469 -0.85937,-1.76953 -2.59766,-2.53125l-0.95312,-0.41016c-2.75391,-1.17187 -4.58594,-2.64062 -4.58594,-5.75c0,-2.85937 2.18359,-5.03906 5.58984,-5.03906c2.42578,0 4.16797,0.84375 5.42578,3.05469l-2.96875,1.91016c-0.65625,-1.17578 -1.35937,-1.63672 -2.45703,-1.63672c-1.11719,0 -1.82422,0.71094 -1.82422,1.63672c0,1.14453 0.70703,1.60547 2.34375,2.31641l0.95313,0.41016c3.24609,1.38672 5.07422,2.80469 5.07422,5.99219c0,3.43359 -2.69922,5.31641 -6.32422,5.31641z"></path></g></g>
                </svg>,
            },
            {
                title: 'CSS',
                svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="evenodd" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M42,6l-3,34l-14,4l-14,-4l-3,-34zM16.80078,28h4l0.09766,2.5l4.10156,1.39844l4.10156,-1.39844l0.29688,-4.5h-8.79687l-0.20312,-4h9.20313l0.29688,-4h-13.79687l-0.30078,-4h18.30078l-0.5,8l-0.70312,11.5l-7.89844,2.60156l-7.89844,-2.60156z"></path></g></g>
                </svg>,
            },
            {
                title: 'HTML',
                svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M45.27344,2.32422c-0.1875,-0.20703 -0.45703,-0.32422 -0.73828,-0.32422h-39.07031c-0.28125,0 -0.55078,0.11719 -0.73828,0.32422c-0.19141,0.20703 -0.28516,0.48438 -0.25781,0.76563l3.51953,39.42578c0.03516,0.41406 0.32422,0.75781 0.72266,0.875l16.01172,4.57031c0.08594,0.02734 0.17969,0.03906 0.27344,0.03906c0.09375,0 0.18359,-0.01172 0.27344,-0.03906l16.02344,-4.57031c0.39844,-0.11719 0.68359,-0.46094 0.72266,-0.875l3.51563,-39.42578c0.02734,-0.28125 -0.06641,-0.55859 -0.25781,-0.76562zM36.84766,15.91797h-18.8125l0.44922,5.08984h17.91016l-1.34375,15.04297l-10.05859,3.03906l-0.09766,-0.03125l-9.94141,-3.01172l-0.54297,-6.12891h4.87109l0.21094,2.37891l5.55859,1.16406l5.45703,-1.16406l0.58203,-6.4375h-17.04297l-1.32422,-14.80469h24.55859z"></path></g></g>
                </svg>,
            }
        ],
        description: 'Full-Stack Developer portfolio',
        longDescription: [
            'Built and deployed a responsive personal portfolio using React.js and Tailwind CSS, showcasing my skills, projects, and professional background. The site features smooth navigation, a dark/light theme toggle, and a clean UI optimized for both desktop and mobile devices.',
            ' It highlights my work as a full-stack developer and includes sections for featured projects, contact information, and resume access. Deployed on Vercel for fast, reliable performance.'
        ],
        showcase: true,
    },
    {
        id: 3,
        image: 'journal.png',
        title: 'Journal',
        url: 'https://journal-eight-theta.vercel.app',
        technologies: [
            {
                title: 'React JS',
                svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero"><g transform="scale(5.12,5.12)"><path d="M43.33594,4h-36.66797c-1.47266,0 -2.66797,1.19531 -2.66797,2.66797v36.66406c0,1.47266 1.19531,2.66797 2.66797,2.66797h36.66406c1.47266,0 2.66797,-1.19531 2.66797,-2.66406v-36.66797c0,-1.47266 -1.19531,-2.66797 -2.66406,-2.66797zM27,36.18359c0,3.99609 -2.34375,5.81641 -5.76562,5.81641c-3.09375,0 -5.32422,-2.07422 -6.23437,-4l3.14453,-1.90234c0.60547,1.07422 1.52734,1.90234 2.85547,1.90234c1.26953,0 2,-0.49609 2,-2.42578v-12.57422h4zM35.67578,42c-3.54297,0 -5.55469,-1.78516 -6.67578,-4l3,-2c0.81641,1.33594 1.70703,2.61328 3.58984,2.61328c1.58203,0 2.41016,-0.78906 2.41016,-1.88281c0,-1.30469 -0.85937,-1.76953 -2.59766,-2.53125l-0.95312,-0.41016c-2.75391,-1.17187 -4.58594,-2.64062 -4.58594,-5.75c0,-2.85937 2.18359,-5.03906 5.58984,-5.03906c2.42578,0 4.16797,0.84375 5.42578,3.05469l-2.96875,1.91016c-0.65625,-1.17578 -1.35937,-1.63672 -2.45703,-1.63672c-1.11719,0 -1.82422,0.71094 -1.82422,1.63672c0,1.14453 0.70703,1.60547 2.34375,2.31641l0.95313,0.41016c3.24609,1.38672 5.07422,2.80469 5.07422,5.99219c0,3.43359 -2.69922,5.31641 -6.32422,5.31641z"></path></g></g>
                </svg>,
            },
            {
                title: 'Tailwind',
                svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M22.105,7.553c-0.224,0.448 -0.523,0.723 -0.914,0.838c-0.612,0.183 -1.343,-0.052 -1.685,-0.253c-0.451,-0.265 -0.974,-0.667 -1.527,-1.092c-1.765,-1.358 -3.961,-3.046 -6.979,-3.046c-2.414,0 -3.654,1.239 -5.707,3.293l1.407,1.421c0.546,-0.425 4.031,-0.015 5.552,1.194c2.259,1.795 3.89,3.092 5.748,3.092c2.659,0 4.879,-1.741 5.94,-4.658zM16.192,15.391c-0.614,0.18 -1.343,-0.052 -1.685,-0.253c-0.451,-0.265 -0.974,-0.667 -1.527,-1.092c-1.766,-1.358 -3.962,-3.046 -6.98,-3.046c-2.414,0 -3.654,1.239 -5.707,3.293l1.407,1.421c0.545,-0.427 4.032,-0.014 5.552,1.194c2.259,1.795 3.89,3.092 5.748,3.092c2.659,0 4.879,-1.741 5.94,-4.658l-1.834,-0.789c-0.225,0.448 -0.523,0.722 -0.914,0.838z"></path></g></g>
                </svg>,
            },
            {
                title: 'HTML',
                svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(5.12,5.12)"><path d="M45.27344,2.32422c-0.1875,-0.20703 -0.45703,-0.32422 -0.73828,-0.32422h-39.07031c-0.28125,0 -0.55078,0.11719 -0.73828,0.32422c-0.19141,0.20703 -0.28516,0.48438 -0.25781,0.76563l3.51953,39.42578c0.03516,0.41406 0.32422,0.75781 0.72266,0.875l16.01172,4.57031c0.08594,0.02734 0.17969,0.03906 0.27344,0.03906c0.09375,0 0.18359,-0.01172 0.27344,-0.03906l16.02344,-4.57031c0.39844,-0.11719 0.68359,-0.46094 0.72266,-0.875l3.51563,-39.42578c0.02734,-0.28125 -0.06641,-0.55859 -0.25781,-0.76562zM36.84766,15.91797h-18.8125l0.44922,5.08984h17.91016l-1.34375,15.04297l-10.05859,3.03906l-0.09766,-0.03125l-9.94141,-3.01172l-0.54297,-6.12891h4.87109l0.21094,2.37891l5.55859,1.16406l5.45703,-1.16406l0.58203,-6.4375h-17.04297l-1.32422,-14.80469h24.55859z"></path></g></g>
                </svg>,
            }
        ],
        description: 'A journalling website with theming and customization',
        longDescription: [
            'Developed a minimal and secure journaling web application using Next.js, Tailwind CSS, and Neon Postgres. The app allows users to create, view, and manage personal journal entries with a clean, distraction-free interface.',
            'Implemented user authentication and access control to ensure that only the logged-in user can view and edit their content. Designed with privacy and simplicity in mind, the app is fully responsive and deployed on Vercel for seamless access across devices.'
        ],
        showcase: true,
    },
    {
        id: 4,
        image: 'data_scraper.png',
        title: 'Data Scraper',
        url: '#',
        technologies: [
            {
                title: 'Django',
                svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M11,3v5.1582c-0.347,-0.141 -1.09584,-0.1582 -1.46484,-0.1582c-2.776,0 -5.3457,1.306 -5.3457,5c0,4.42 3.48055,5 5.81055,5c0.92,0 3,-0.09086 4,-0.38086v-14.61914zM16,3v3h3v-3zM16,8v8.70117c0,1.516 -0.922,3.094 -3,4l2.85938,1.29492c2.906,-1 3.14063,-4.29492 3.14063,-5.29492v-8.70117zM9.9707,10.55078c0.32,0 0.6793,0.05867 1.0293,0.13867v4.70313c-0.35,0.08 -0.7093,0.14063 -1.0293,0.14063c-1.31,0 -2.58008,-0.4132 -2.58008,-2.5332c0,-2.12 1.27008,-2.44922 2.58008,-2.44922z"></path></g></g>
                </svg>,
            },
            {
                title: 'Tailwind',
                svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(10.66667,10.66667)"><path d="M22.105,7.553c-0.224,0.448 -0.523,0.723 -0.914,0.838c-0.612,0.183 -1.343,-0.052 -1.685,-0.253c-0.451,-0.265 -0.974,-0.667 -1.527,-1.092c-1.765,-1.358 -3.961,-3.046 -6.979,-3.046c-2.414,0 -3.654,1.239 -5.707,3.293l1.407,1.421c0.546,-0.425 4.031,-0.015 5.552,1.194c2.259,1.795 3.89,3.092 5.748,3.092c2.659,0 4.879,-1.741 5.94,-4.658zM16.192,15.391c-0.614,0.18 -1.343,-0.052 -1.685,-0.253c-0.451,-0.265 -0.974,-0.667 -1.527,-1.092c-1.766,-1.358 -3.962,-3.046 -6.98,-3.046c-2.414,0 -3.654,1.239 -5.707,3.293l1.407,1.421c0.545,-0.427 4.032,-0.014 5.552,1.194c2.259,1.795 3.89,3.092 5.748,3.092c2.659,0 4.879,-1.741 5.94,-4.658l-1.834,-0.789c-0.225,0.448 -0.523,0.722 -0.914,0.838z"></path></g></g>
                </svg>,
            },
            {
                title: 'Selenium',
                svg: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
                    <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}><g transform="scale(8.53333,8.53333)"><path d="M6,4c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-17.87891l-7.5,7.5l-5.06055,-5.06055l2.12109,-2.12109l2.93945,2.93945l5.37891,-5.37891zM9.99023,14.88086c1.831,0 3.09786,0.9905 3.13086,2.4375h-1.83594c-0.043,-0.553 -0.56858,-0.9375 -1.26758,-0.9375c-0.699,0 -1.1582,0.32961 -1.1582,0.84961c0,0.428 0.34692,0.67684 1.16992,0.83984l1.00781,0.19531c1.544,0.298 2.23633,0.99828 2.23633,2.23828c0.001,1.631 -1.24497,2.61523 -3.29297,2.61523c-1.977,0 -3.22286,-0.9315 -3.25586,-2.4375h1.89648c0.049,0.569 0.61841,0.93164 1.44141,0.93164c0.742,0 1.25,-0.35709 1.25,-0.87109c0,-0.433 -0.34037,-0.6667 -1.23437,-0.8457l-1.0293,-0.20508c-1.43,-0.271 -2.16602,-1.05125 -2.16602,-2.28125c0,-1.528 1.22242,-2.5293 3.10742,-2.5293zM18.0293,16.89258c1.83,0 2.89648,1.10991 2.89648,3.00391v0.52344h-3.99414v0.0957c0.016,0.773 0.45773,1.25195 1.17773,1.25195c0.549,0 0.92864,-0.20283 1.05664,-0.54883h1.72266c-0.208,1.157 -1.29603,1.88867 -2.83203,1.88867c-1.894,0 -2.98242,-1.12136 -2.98242,-3.06836c0,-1.958 1.11508,-3.14648 2.95508,-3.14648zM18.03906,18.23242c-0.619,0 -1.04966,0.43152 -1.09766,1.10352h2.1543c-0.032,-0.693 -0.42764,-1.10352 -1.05664,-1.10352z"></path></g></g>
                </svg>,
            }
        ],
        description: 'A website for scraping the internet to create image datasets',
        longDescription: [
            'Developed a minimal and secure journaling web application using Next.js, Tailwind CSS, and Neon Postgres. The app allows users to create, view, and manage personal journal entries with a clean, distraction-free interface.',
            'Implemented user authentication and access control to ensure that only the logged-in user can view and edit their content. Designed with privacy and simplicity in mind, the app is fully responsive and deployed on Vercel for seamless access across devices.'
        ],
        showcase: false,
    }
]

export function getProject(id) {
    const curr = data.filter((d) => { return d.id == id })[0];
    return curr;
}

export function getAllProjects() {
    return data;
}