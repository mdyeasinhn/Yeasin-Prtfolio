import React, { useState } from 'react';
import Navbar from './Navbar';
import MenuIcon from '../../Shared/MenuIcon/MenuIcon';

const Header = () => {
    const [navOpen, setIsNavOpen] = useState(true)
    return (
        <div className='fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0'>
            <div className='max-w-screen-2xl w-full mx-auto flex justify-between items-center px-4 md:px-6'>
                <h2 className='text-4xl font-bold'>
                    YA
                </h2>

                {/* Menu */}
                <div className='relative md:hidden'>
                    <button onClick={()=> setIsNavOpen((prev)=> !prev)} className='menu-btn'>
                        <MenuIcon className='text-white' />
                    </button>
                </div>

                <Navbar navOpen={navOpen} />

                <div>
                    <a href="#contact" className='btn btn-secondary hidden md:block'>Contact Me</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
