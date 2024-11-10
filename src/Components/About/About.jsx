import { number } from 'prop-types';
import React from 'react';

const About = () => {
    const aboutItem = [
        {
            label: "Projects Done",
            number: 25
        }
    ]
    return (
        <section id='about' className='section  '>
            <div className="container">
                <div className='bg-zinc-800/50 rounded-2xl md:p-12  p-8'>
                    <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
                        Welcome! I&apos;m Yeasin, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
                        </p>
                    <div className='flex flex-wrap items-center gap-4  md:gap-7' >
                        {aboutItem.map(({ label, number }, key) => ((
                            <div key={key}>
                                <div className='flex items-center md:mb-2 '>
                                    <span className='font-bold text-2xl  md:text-4xl '>{number}</span>
                                    <span className='text-sky-400 font-semibold'>+</span>
                                </div>
                                <p className='text-sm text-zinc-400'>{label}</p>
                            </div>
                        )))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;