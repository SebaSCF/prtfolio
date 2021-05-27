import React, {useState, useEffect  }from 'react';
import sanityClient from "../client.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            Repository,
            tags
        }`).then((data) => setProjectData(data))
            .catch(console.error);
    }, []);


    useEffect(() => {
        AOS.init({ duration: '1000'});
    }, []);


    return (
        <main className= "bg-white min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-6xl text=bold flex cursive">Projects</h1>
                <h2 className="text-2xl flex mb-12">Graphic Design, Video Editing and Front-End</h2>
                <hr />
                <br />
                <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData && projectData.map((Project,index) =>(
                    <article data-aos="flip-up" className="relative rounded-lg shadow-2xl bg-white p-10 hover:opacity-75 pointer-events-auto">
                        <h3 className="text-black text-4xl font-bold mb-2 hover:opacity-80">
                        <a href={Project.link} alt={Project.title} target="_blank" rel="noopener noreffer">{Project.title}</a></h3>
                        <div className="text-gray-500 text-sm">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}{new Date(Project.date).toLocaleDateString().toUpperCase()}<br />
                            </span>
                            <span>
                                <strong className="font-bold">Location</strong>:{" "}{Project.place.toUpperCase()}<br />
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}{Project.projectType.toUpperCase()}<br />
                            </span>
                                <p className="my-6 text-lg text-gray-700 leading-relaxed">{Project.description}</p>
                            </div>
                            <a href={Project.link} target="_blank" rel="noopener noreffer" className="text-black text-xl font-bold hover:underline hover:opacity-80">
                              <i class="fa fa-external-link mr-4 " aria-hidden="true"></i>View the Project
                               </a>
                            <br />
                            <a href={Project.Repository} target="_blank" rel="noopener noreffer" className="text-black text-xl font-bold hover:underline hover:opacity-80">
                                <i class="fa fa-github mr-4 " aria-hidden="true"></i>GitHub Repository
                                </a>

                        </article>
                        ))}
                </section>
            </section>
        </main>




    )
}

export default Project;
