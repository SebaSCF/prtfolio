import {NavLink} from "react-router-dom";
import React from 'react';

function Navbar() {
    return (
        <header className="bg-blue-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink className="inflex-flex items center text-white text-3xl py-5 px-3 mr-4 " to="/" exact>SebaSCF</NavLink>
                    <NavLink className="inflex-flex items center text-white py-6 px-3 mr-4 rounded hover:text-blue-200" activeClassName="text-white bg-blue-800" to="/" exact>Home</NavLink>
                    <NavLink className="inflex-flex items center text-white py-6 px-3 mr-4 rounded hover:text-blue-200" activeClassName="text-white bg-blue-800" to="/Projects">Projects</NavLink>
                    <NavLink className="inflex-flex items center text-white py-6 px-3 mr-4  roundedhover:text-blue-200" activeClassName="text-white bg-blue-800" to="/About">About</NavLink>
                </nav>
            </div>
            </header>
    )
}

export default Navbar;
