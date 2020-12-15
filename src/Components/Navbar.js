import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import React from 'react';

function Navbar() {
    return (
        <header className="bg-blue-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink className="inflex-flex items-center text-white font-bold text-3xl py-5 px-3 mr-4 " to="/" exact>SebaSCF</NavLink>
                    <NavLink className="inflex-flex items-center text-white font-medium py-7 px-3 mr-4 rounded hover:text-blue-200" activeClassName="text-white bg-blue-800" to="/" exact>Home</NavLink>
                    <NavLink className="inflex-flex items-center text-white font-medium py-7 px-3 mr-4 rounded hover:text-blue-200" activeClassName="text-white bg-blue-800" to="/Projects">Projects</NavLink>
                    <NavLink className="inflex-flex items-center text-white font-medium py-7 px-3 mr-4  roundedhover:text-blue-200" activeClassName="text-white bg-blue-800" to="/About">About</NavLink>
                </nav>

            <div className="inflex-flex py-5 px-3">
                <SocialIcon url="https://github.com/SebaSCF/prtfolio" className="mr-4" targer="_blank" network="instagram" bgColor="#000000" bgColor="#FFFFFF" />
                <SocialIcon url="https://github.com/SebaSCF/prtfolio" className="mr-4" targer="_blank" network="github" bgColor="#000000" bgColor="#FFFFFF" />
                <SocialIcon url="https://api.whatsapp.com/send?phone=18327087918&text=I%27m%20interested%20in%20your%20services,%20when%20are%20you%20available%20to%20talk%20about%20it?%20Looking%20forward%20for%20your%20response!" className="mr-4" targer="_blank" network="whatsapp" bgColor="#000000" bgColor="#FFFFFF" />
                </div>
            </div>
        </header>
    )
}

export default Navbar;
