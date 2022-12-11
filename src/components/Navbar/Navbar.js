import React from 'react';
import { Link } from 'react-router-dom';
import DarkButton from '../dark-button/DarkButton';
import './navbar.css'


const Navbar = () => {
    return (
        <>
            <header className="shadow-bottom bg-bodyBg z-[1] sticky top-0 left-0" id="mainContent">
                <nav className="flex py-[1.5%] px-[4%] justify-between">
                <div>
                    <h3 className="brand-text text-2xl text-sweetWhite">SA Safin Ali</h3>
                </div>
                <ul className="md:flex hidden items-center list-none">
                    <li className="mx-3"><Link href="#" to={`/`} className="navItem">Home</Link></li>
                    <li className="mx-3"><a href="#skill" className="navItem">Skill</a></li>
                    <li className="mx-3"><a href="#services" className="navItem">Services</a></li>
                    <li className="mx-3"><a href="#projects" className="navItem">Projects</a></li>
                    <li className="mx-3"><a href="#about_me" className="navItem">About</a></li>
                    <li className="mx-3"><a href="#contact" className="navItem">Contact</a></li>
                    <li className="mx-3"><Link to={`/blogs`} className="navItem">Blogs</Link></li>
                </ul>
                <div>
                    <DarkButton></DarkButton>
                </div>
                </nav>                
            </header>
            {/* responsive nav */}
            <div className="resnav z-[1] block md:hidden">
                <a href="#home" className="block my-3"><i className="fa-xl fa-duotone fa-house"></i></a>
                <a href="#skill" className="block my-3"><i className="fa-xl fa-duotone fa-head-side-brain"></i></a>
                <a href="#services" className="block my-3"><i className="fa-xl fa-sharp fa-solid fa-gears"></i></a>
                <a href="#projects" className="block my-3"><i className="fa-xl fa-duotone fa-rectangle-history-circle-user"></i></a>
                <a href="#about_me" className="block my-3"><i className="fa-xl fa-duotone fa-address-card"></i></a>
                <a href="#contact" className="block my-3"><i className="fa-xl fa-sharp fa-solid fa-messages"></i></a>
            </div>
        </>
    );
};

export default Navbar;