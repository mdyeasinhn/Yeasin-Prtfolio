import SkilCard from './SkilCard';
import figma from '../../assets/images/figma.svg';
import css3 from '../../assets/images/css3.svg';
import javascript from '../../assets/images/javascript.svg';
import nodejs from '../../assets/images/nodejs.svg';
import expressjs from '../../assets/images/expressjs.svg';
import mongodb from '../../assets/images/mongodb.svg';
import react from '../../assets/images/react.svg';
import tailwindcss from '../../assets/images/tailwindcss.svg';

const Skils = () => {
    const skillItem = [
        {
            imgSrc: figma,
            label: 'Figma',
            desc: 'Design tool'
        },
        {
            imgSrc: css3,
            label: 'CSS',
            desc: 'User Interface'
        },
        {
            imgSrc: tailwindcss,
            label: 'TailwindCSS',
            desc: 'User Interface'
        },
        {
            imgSrc: javascript,
            label: 'JavaScript',
            desc: 'Interaction'
        },
        {
            imgSrc: react,
            label: 'React',
            desc: 'Framework'
        },

        {
            imgSrc: nodejs,
            label: 'NodeJS',
            desc: 'Web Server'
        },
        {
            imgSrc: expressjs,
            label: 'ExpressJS',
            desc: 'Node Framework'
        },
        {
            imgSrc: mongodb,
            label: 'MongoDB',
            desc: 'Database'
        },


    ];

    return (
        <section id='skills' className='mt-8'>
            <div className="container">
                <h2 className="text-3xl lg:text-4xl lg:leading-tight font-semibold">
                    Essential Tools I use
                </h2>
                <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>

                <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {skillItem.map((item, index) => (
                        <SkilCard key={index} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skils;
