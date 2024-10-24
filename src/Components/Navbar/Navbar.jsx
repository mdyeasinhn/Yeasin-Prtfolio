import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { label: 'Home', link: '#home' },
        { label: 'About', link: '#about' },
        { label: 'Work', link: '#work' },
        { label: 'Reviews', link: '#reviews' },
        { label: 'Contact', link: '#contact' }
    ];

    return (
        <nav className="fixed z-40 w-4/5 shadow">
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex items-center">
                    <a href="/">
                        <h1 className="text-4xl text-white">YA</h1>
                    </a>
                </div>

                {/* Center Navigation Links */}
                <div className="hidden md:flex flex-grow justify-center space-x-4">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            className="text-white transition-colors duration-300 transform hover:text-blue-500"
                            href={item.link}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden ">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-white hover:text-gray-400 focus:outline-none"
                        aria-label="toggle menu"
                    >
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Contact Button */}
                <div className="hidden md:flex items-center justify-end">
                    <a
                        className="my-2 text-black bg-white rounded-md transition-colors duration-300 transform hover:text-blue-500 px-4 py-2"
                        href="#"
                    >
                        Contact
                    </a>
                </div>



            </div>

            {/* Mobile Menu */}
            <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
    <div className="flex flex-col md:hidden">
        {navItems.map((item) => (
            <a
                key={item.label}
                className="my-2 text-white transition-colors duration-300 transform hover:text-blue-500"
                href={item.link}
            >
                {item.label}
            </a>
        ))}
    </div>
</div>


        </nav>
    );
};

export default Navbar;
