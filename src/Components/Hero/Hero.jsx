import profilePicture from '../../assets/img/raviKumarProfile.webp';

const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                {/* Profile image */}
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <img src={profilePicture} alt="Yeasin"  className='border border-stone-900 rounded-3xl '/>
                    </div>
                </div>
        <div className='w-full lg:w-1/2 '>
            <div className='flex flex-col items-center lg:items-start mt-10'>
                <h2 className='pb-2 text-4xl tracking-tighter lg:text-6xl '> Yeasin Arafat</h2>
                <span className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent '>MERN Stack Developer</span>
                <p className='my-2 max-w-lg  py-6 text-xl leading-relaxed  tracking-tighter '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus consequuntur consequatur alias nesciunt praesentium quisquam esse aut vero libero nemo.
                </p>
                <a href="https://drive.google.com/file/d/1qwZiwv5DV3-xWV7OSuXE1E2AW_sYzm3B" target='_blank' rel='noopener noreferrer' download className='bg-white rounded-2xl p-4 text-sm text-stone-800 mb-10'>Download Resume</a>
            </div>

        </div>

            </div>
        </div>
    );
};

export default Hero;