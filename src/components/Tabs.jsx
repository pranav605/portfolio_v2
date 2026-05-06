'use client'
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Children } from 'react';

const Tabs = ({ children }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    // Normalize children (fix for single tab)
    const tabs = Children.toArray(children);
    console.log(tabs);


    const [active, setActive] = useState(0);

    const tabParam = searchParams.get('tab');

    useEffect(() => {
        if (!tabParam) return;

        const index = tabs.findIndex((_, i) => i.toString() === tabParam);

        if (index >= 0) {
            setActive(index);
        }
    }, [tabParam, tabs]);

    const handleClick = (e, index, cb = () => { }) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams);
        params.set('tab', index.toString());

        router.push(`?${params.toString()}`);
        setActive(index);

        cb && cb();
    };

    return (
        <div className="tabs w-full">
            <div className="tabs__navigation flex gap-4 border-b border-white/10 mb-6">
                {tabs.map((child, index) => (
                    <a
                        href="#"
                        className={`tabs__navigation__item relative px-4 py-2 text-sm md:text-base font-medium transition-all duration-200 ${index === active
                                ? 'text-white after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white after:rounded-full'
                                : 'text-white/60 hover:text-white'
                            }`}
                        key={`tab-${index}`}
                        onClick={e => handleClick(e, index, child.props.onClick)}
                    >
                        {child.props.title}
                    </a>
                ))}
            </div>

            <div className="tabs__body text-white/90">
                {tabs[active]}
            </div>
        </div>
    );
};

export default Tabs;