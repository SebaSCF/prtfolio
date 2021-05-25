import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import HomeImg from "../SCFLOGOX1Z.png";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import Tooltip from '@material-ui/core/Tooltip';
function Home() {
    useEffect(() => {
        AOS.init({ duration: '2000'});
    }, []);
    return (
        <section className="bgmain bg-white  justify-center">
            <div className="container mx-auto py-4">
                <img data-aos="flip-up" src={HomeImg} className="center mx-40  my-12 relative w-80 h-80" alt="HomeImage" />
                <br />
                <section className="bg-white">
            <div className="flex justify-center">
              <Tooltip className="text-center" title="Instagram" placement="bottom"><div><SocialIcon data-aos="flip-up" data-aos-delay="50" url="https://www.instagram.com/sebascfsv/?hl=en" className="iconsSocial mr-4 hover:opacity-80" target="_blank" network="instagram" bgColor="#000000" bgColor="#0733D8" /></div></Tooltip>
              <Tooltip className="text-center" title="Github" placement="bottom"><div><SocialIcon data-aos="flip-up" data-aos-delay="150" url="https://github.com/SebaSCF" className="iconsSocial mr-4 hover:opacity-80" target="_blank" network="github" bgColor="#000000" bgColor="#0733D8" /></div></Tooltip>
              <Tooltip className="text-center" title="LinkedIn" placement="bottom"><div><SocialIcon data-aos="flip-up" data-aos-delay="250" url="https://www.linkedin.com/in/sebastian-cappadonna-04aa04134/" className="iconsSocial mr-4 hover:opacity-80" target="_blank" network="linkedin" bgColor="#0733D8" /></div></Tooltip>
                </div>
        </section>
            <section className="text-left m-14 relative content-center">
                <h1 className="hdr bold leading-none sm:text-md md:text-md lg:leading-snug text-7xl home-name">Sebastian Cappadonna</h1>
                <h4 className="sub-hdr text-3xl ">Front-End Developer, Video-Editor and Graphic Designer</h4>
                    <hr className ="my-4" />
                <p className="m-2" >I am seeking to improve myself every day in these fields of work, in order to offer a variety of services regarding Websites, nice edited Videos, and Graphics. Thus, a company will be provided with a nice and detailed outlook. I have the skills to create what a business company needs to be attractive to the public and customers.</p>
               <b><p>Check Out My <u><b><NavLink to="/CV">Resume</NavLink></b></u> </p></b>
            </section>
            </div>
        </section>
    )
}

export default Home;
