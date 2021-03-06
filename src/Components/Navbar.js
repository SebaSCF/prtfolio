import { NavLink } from "react-router-dom";
import React from 'react';
import '../App.css';


export default function Navbar({}) {

    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <nav className="relative  flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-blue-900">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div  className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                    <NavLink className="text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" to="/" exact>SebaSCF</NavLink>
                    <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block sm:visible md:visible lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i class="fa fa-bars" aria-hidden="true"></i>
                    </button>
                </div>
                <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
                >
             <ul className="flex flex-col text-left sm:flex-row md:flex-row lg:flex-row justify-evenly list-none lg:ml-auto">
             <li className="nav-item">   <NavLink className="inflex-flex items-center text-white font-medium text-xl mr-4 rounded hover:text-blue-200" activeClassName="opacity-50" to="/" exact><i class="fas text-white fa-home mr-3"></i>Home</NavLink></li>
            <li className="nav-item">   <NavLink className="inflex-flex items-center text-white font-medium text-xl mr-4 rounded hover:text-blue-200" activeClassName="opacity-50" to="/Post"><i class="fas text-white fa-book-open mr-3"></i>Posts</NavLink></li>
             <li className="nav-item">   <NavLink className="inflex-flex items-center text-white font-medium text-xl mr-4  rounded hover:text-blue-200" activeClassName="opacity-50" to="/Project"><i class="fas text-white fa-project-diagram mr-3"></i>Project</NavLink></li>

                    </ul>
            </div>
        </div>
    </nav>
    )
}

