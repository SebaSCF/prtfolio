import { useState, useEffect } from "react";
import { sanityClient } from "../client.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { Spinner } from "@nextui-org/react";

function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            Repository,
            tags
        }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    AOS.init({ duration: "1000" });
  }, []);

  return !projectData ? (
    <div className="flex flex-col w-full items-center">
      <Spinner color="default" />
    </div>
  ) : (
    <section data-aos="zoom-in">
      <div
        className="bg-white p-10"
        style={{ position: "sticky", top: 0, zIndex: 1000 }}
      >
        <h1
          className="text-3xl md:text-4xl lg:text-6xl  flex cursive"
          style={{ fontWeight: 800 }}
        >
          Projects
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl flex mb-12">
          Graphic Design, Video Editing and Front-End
        </h2>
        <hr />
      </div>
      <section
        style={{
          overflowY: "auto",
          overflowX: "hidden",
          backgroundColor: "#ededed",
        }}
        className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-8 p-4"
      >
        {projectData &&
          projectData.map((Project, index) => (
            <article
              key={index}
              className="  rounded-lg shadow-md bg-white p-10 hover:opacity-75 pointer-events-auto"
            >
              <h3 className="text-black text-md md:text-lg lg:text-2xl font-bold mb-2 hover:opacity-80">
                <a
                  href={Project.link}
                  alt={Project.title}
                  rel="noreferrer"
                  target="_blank"
                  // rel="noopener noreffer"
                >
                  {Project.title}
                </a>
              </h3>
              <div className="text-gray-500 text-xs md:text-md   ">
                <span>
                  <strong className="font-bold">Finished on</strong>:{" "}
                  {new Date(Project.date).toLocaleDateString().toUpperCase()}
                  <br />
                </span>
                <span>
                  <strong className="font-bold">Location</strong>:{" "}
                  {Project.place.toUpperCase()}
                  <br />
                </span>
                <span>
                  <strong className="font-bold">Type</strong>:{" "}
                  {Project.projectType.toUpperCase()}
                  <br />
                </span>
                <p className="my-6  text-xs md:text-md  text-gray-700 leading-relaxed">
                  {Project.description}
                </p>
              </div>
              <a
                href={Project.link}
                target="_blank"
                rel="noreferrer"
                className="text-black text-lg md:text-md font-bold hover:underline hover:opacity-80"
              >
                <i className="fa fa-external-link mr-4 " aria-hidden="true"></i>
                View the Project
              </a>
              <br />
              <a
                href={Project.Repository}
                target="_blank"
                rel="noreferrer"
                className="text-black text-lg md:text-md font-bold hover:underline hover:opacity-80"
              >
                <i className="fa fa-github mr-4 " aria-hidden="true"></i>
                GitHub Repository
              </a>
            </article>
          ))}
      </section>
    </section>
  );
}

export default Project;
