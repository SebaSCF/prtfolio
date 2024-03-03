// import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import HomeImg from "../SCFLOGOX1Z.png";
import { Tooltip } from "antd";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import { Image } from "@nextui-org/react";
function Home() {
  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  return (
    <div
      data-aos="zoom-in"
      className="p-20 h-full bg-white flex flex-col md:flex-row items-center justify-evenly w-full"
    >
      <Presentation />
      {/* {globalCont.Page === "Home" && <Presentation />}
      {globalCont.Page === "Skills" && <Skills />}
      {globalCont.Page === "Blog" && <Post />}
      {globalCont.Page === "Projects" && <Project />} */}
    </div>
  );
}

export default Home;
export const Presentation = () => {
  return (
    <section className="lg:p-20 h-full bg-white flex flex-col lg:flex-row items-center justify-evenly w-full">
      <Image
        isBlurred={false}
        width={440}
        isZoomed={true}
        src={HomeImg}
        alt="HomeImage"
        classNames="m-5"
      />
      {/*
      <img
        src={HomeImg}
        className="p-0 "
        style={{  width: "30%" }}
        alt="HomeImage"
      /> */}

      <section className="text-left p-10 grid grid-cols-1">
        <div className=" bg-white w-full flex flex-row items-center justify-between">
          <div
            className="flex flex-col items-center justify-center "
            style={{ borderColor: "#3d3d3d" }}
          >
            <Tooltip placement="top" title="HTML5">
              <div className="flex flex-col items-center justify-between "  data-aos="flip-up">
                <i
                  style={{ fontSize: "35px" }}
                  className="fa-brands fa-html5"
                ></i>{" "}
              </div>
            </Tooltip>
          </div>
          <div
            className="flex flex-col items-center justify-center "
            style={{ borderColor: "#3d3d3d" }}
          >
            <Tooltip placement="top" title="CSS3">
              <div className="flex flex-col items-center justify-between "  data-aos="flip-up">
                <i
                  style={{ fontSize: "35px" }}
                  className="fa-brands fa-css3-alt"
                ></i>{" "}
              </div>
            </Tooltip>
          </div>
          <div
            className="flex flex-col items-center justify-center "
            style={{ borderColor: "#3d3d3d" }}
          >
            <Tooltip placement="top" title="Javascript">
              <div className="flex flex-col items-center justify-between "  data-aos="flip-up">
                <i
                  style={{ fontSize: "35px" }}
                  className="fa-brands fa-square-js"
                ></i>{" "}
              </div>
            </Tooltip>
          </div>
          <div
            className="flex flex-col items-center justify-center "
            style={{ borderColor: "#3d3d3d" }}
          >
            <Tooltip placement="top" title="Typescript">
              <div className="flex flex-col items-center justify-between "  data-aos="flip-up">
                <img
                  src="https://imgs.search.brave.com/xlj3KJySz1N-9b8-JMMaMcB7QKH_UydJ8iuJy_SCuEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Zp/bGUtaWNvbnMvaWNv/bnMvbWFzdGVyL3N2/Zy9UeXBlU2NyaXB0/LnN2Zw.svg"
                  alt="https://imgs.search.brave.com/xlj3KJySz1N-9b8-JMMaMcB7QKH_UydJ8iuJy_SCuEQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2Zp/bGUtaWNvbnMvaWNv/bnMvbWFzdGVyL3N2/Zy9UeXBlU2NyaXB0/LnN2Zw.svg"
                  style={{ width: "32px", height: "32px" }}
                />
              </div>
            </Tooltip>
          </div>
          <div
            className="flex flex-col items-center justify-center "
            style={{ borderColor: "#3d3d3d" }}
          >
            <Tooltip placement="top" title="React">
              <div className="flex flex-col items-center justify-between "  data-aos="flip-up">
                <i
                  style={{ fontSize: "35px" }}
                  className="fa-brands fa-react"
                ></i>{" "}
              </div>
            </Tooltip>
          </div>
          <div
            className="flex flex-col items-center justify-center "
            style={{ borderColor: "#3d3d3d" }}
          >
            <Tooltip placement="top" title="Node.js">
              <div className="flex flex-col md:flex-row items-center justify-between "  data-aos="flip-up">
                <i
                  style={{ fontSize: "35px" }}
                  className="fa-brands fa-node"
                ></i>{" "}
              </div>
            </Tooltip>
          </div>
          <div
            className="flex flex-col items-center justify-center "
            style={{ borderColor: "#3d3d3d" }}
          >
            <Tooltip placement="top" title="AWS">
              <div className="flex flex-col md:flex-row items-center justify-between "  data-aos="flip-up">
                <i
                  style={{ fontSize: "35px" }}
                  className="fa-brands fa-aws"
                ></i>{" "}
              </div>
            </Tooltip>
          </div>{" "}
          <div
            className="flex flex-col items-center justify-center "
            style={{ borderColor: "#3d3d3d" }}
          >
            <Tooltip placement="top" title="Git">
              <div className="flex flex-col md:flex-row items-center justify-between "  data-aos="flip-up">
                <i
                  style={{ fontSize: "35px" }}
                  className="fa-brands fa-git-alt"
                ></i>{" "}
              </div>
            </Tooltip>
          </div>
        </div>
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
        {/* <b><p>Check Out My <u><b><NavLink to="/CV">Resume</NavLink></b></u> </p></b> */}
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
