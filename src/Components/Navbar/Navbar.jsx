import { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail, BiServer } from "react-icons/bi";
import "./nav.css";
import { LiaHireAHelper } from "react-icons/lia";
import { GiSkills } from "react-icons/gi";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("#");

    const handleScroll = () => {
        const sections = document.querySelectorAll("section"); // Select all sections
        let scrollPos = window.scrollY + 200; // Offset for better accuracy

        sections.forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                setActiveLink(`#${section.id}`);
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav>
            <a href="#" className={activeLink === "#" ? "active" : ""}><AiOutlineHome /></a>
            <a href="#about" className={activeLink === "#about" ? "active" : ""}><AiOutlineUser /></a>
            <a href="#skills" className={activeLink === "#skills" ? "active" : ""}><GiSkills/></a>
            <a href="#projects" className={activeLink === "#projects" ? "active" : ""}><BiServer /></a>
            <a href="#contact" className={activeLink === "#contact" ? "active" : ""}><BiMessageSquareDetail /></a>
        </nav>
    );
};

export default Navbar;
