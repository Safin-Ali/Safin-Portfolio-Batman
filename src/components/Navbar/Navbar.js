import React from 'react';
import { Link } from 'react-router-dom';
import DarkButton from '../dark-button/DarkButton';
import './navbar.css'


const Navbar = () => {
    return (
        <>
            <header className="shadow-bottom" id="mainContent">
                <nav className="flex py-[1.5%] px-[4%] justify-between">
                <div>
                    <h3 className="brand-text text-2xl text-sweetWhite">SA Safin Ali</h3>
                </div>
                <ul className="md:flex hidden items-center list-none">
                    <li className="mx-3"><Link to="#" className="navItem">Home</Link></li>
                    <li className="mx-3"><Link to="#services" className="navItem">Service</Link></li>
                    <li className="mx-3"><Link to="#skill" className="navItem">Skill</Link></li>
                    <li className="mx-3"><Link to="#projects" className="navItem">Projects</Link></li>
                    <li className="mx-3"><Link to="#about_me" className="navItem">About</Link></li>
                    <li className="mx-3"><Link to="#" className="navItem">Contact</Link></li>
                </ul>
                <div>
                    <DarkButton></DarkButton>
                </div>
                </nav>                
            </header>
            {/* responsive nav */}
            <div className="resnav block md:hidden">
                <Link to="#home" className="block my-3"><i className="fa-xl fa-duotone fa-house"></i></Link>
                <Link to="#services" className="block my-3"><i className="fa-xl fa-sharp fa-solid fa-gears"></i></Link>
                <Link to="#skill" className="block my-3"><i className="fa-xl fa-duotone fa-head-side-brain"></i></Link>
                <Link to="#about_me" className="block my-3"><i className="fa-xl fa-duotone fa-address-card"></i></Link>
                <Link to="#" className="block my-3"><i className="fa-xl fa-sharp fa-solid fa-messages"></i></Link>
            </div>
        </>
    );
};

export default Navbar;