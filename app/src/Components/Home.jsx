import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import HomeImg from "../SCFLOGOX1Z.png";
import React, { useEffect, useState } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import Post from "./Post";
import Project from "./Project";
import Skills from "./Skill";
// import Tooltip from '@material-ui/core/Tooltip';
// import Typical from 'react-typical';
function Home() {
  const [Page, setPage] = useState("Home");
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);
  return (
    <div
      data-aos="zoom-in"
      className="p-20 h-full bg-white flex flex-col md:flex-row items-center justify-evenly w-full"
    >
      {Page === "Home" && <Presentation />}
      {Page === "Skills" && <Skills />}
      {Page === "Blog" && <Post />}
      {Page === "Projects" && <Project />}

      <section className="flex p-10 w-full md:w-24 flex-row md:flex-col md:items-center h-3/6 justify-between">
        <Tooltip placement="left" content="Home" color="foreground">
          <Button
            className="portfolio_button "
            isIconOnly={true}
            variant="shadow"
            onClick={() => setPage("Home")}
            size="lg"
          >
            <i
              style={{ fontSize: "20px" }}
              className="fa fa-home"
              aria-hidden="true"
            ></i>
          </Button>
        </Tooltip>
        <Tooltip placement="left" content="Skills" color="foreground">
          <Button
            className="portfolio_button "
            isIconOnly={true}
            onClick={() => setPage("Skills")}
            variant="shadow"
            size="lg"
          >
            <i
              style={{ fontSize: "20px" }}
              className="fa-solid fa-layer-group"
              aria-hidden="true"
            ></i>
          </Button>
        </Tooltip>
        <Tooltip placement="left" content="Posts" color="foreground">
          <Button
            className="portfolio_button "
            isIconOnly={true}
            variant="shadow"
            onClick={() => setPage("Blog")}
            size="lg"
          >
            <i
              style={{ fontSize: "20px" }}
              className="fa-brands fa-microblog"
              aria-hidden="true"
            ></i>
          </Button>
        </Tooltip>
        <Tooltip placement="left" content="Work" color="foreground">
          <Button
            className="portfolio_button "
            isIconOnly={true}
            variant="shadow"
            onClick={() => setPage("Projects")}
            size="lg"
          >
            <i
              style={{ fontSize: "20px" }}
              className="fa-solid fa-briefcase"
              aria-hidden="true"
            ></i>
          </Button>
        </Tooltip>
      </section>
    </div>
  );
}

export default Home;
export const Presentation = () => {
  return (
    <section className="p-20 h-full bg-white flex flex-col lg:flex-row items-center justify-evenly w-full">
      <img
        src={HomeImg}
        className="p-0 "
        style={{ height: "400px", width: "400px" }}
        alt="HomeImage"
      />

      <section className="text-left p-10">
        <h1
          data-aos="fade-down"
          className="hdr leading-none text-md md:text-md lg:text-7xl home-name"
          style={{ fontWeight: 800 }}
        >
          Sebastian Cappadonna
        </h1>
        {/* <Typical className="sub-hdr text-3xl "
            steps={['Front-End Developer💻', 1800, 'Video-Editor📹', 1800, 'Graphic Designer🖌️', 1800]}
         loop={Infinity}
        wrapper="p"
      / > */}
        <p className="m-2">Passionate about Web Development & Design</p>
        {/* <p className="m-2">
          I am seeking to improve myself every day in these fields of work, in
          order to offer a variety of services regarding Websites, nice edited
          Videos, and Graphics. Thus, a company will be provided with a nice and
          detailed outlook. I have the skills to create what a business company
          needs to be attractive to the public and customers.
        </p> */}

        <div className="flex flex-row justify-start">
          <div>
            <SocialIcon
              data-aos-delay="150"
              url="https://github.com/SebaSCF"
              className="iconsSocial mr-4 hover:opacity-80"
              target="_blank"
              network="github"
              bgColor="#000000"
            />
          </div>
          <div>
            <SocialIcon
              data-aos-delay="250"
              url="https://www.linkedin.com/in/sebastian-cappadonna-04aa04134/"
              className="iconsSocial mr-4 hover:opacity-80"
              target="_blank"
              network="linkedin"
              bgColor="#0733D8"
            />
          </div>
        </div>
      </section>
    </section>
  );
};
