import {Link } from "react-router-dom";
import sanityClient from "../client.js";
import React, {useState, useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
        )
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);


    useEffect(() => {
        AOS.init({ duration: '1000'});
    }, []);


    return (
        <main className="bgmain bg-white  justify-center min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-6xl text=bold flex  cursive">Blog Posts</h1>
                <br />
                <hr />
                <br />
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {postData && postData.map((post,index) =>(
                    <article data-aos="fade-up" data-aos-easing="ease-in-out" className="hover:opacity-50">
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <span className="block h-64 relative rounded shadow leading-snug bg-white border-b-8 border-blue-900" key={index}>
                                <img src={post.mainImage.asset.url}
                                    alt={post.mainImage.alt}
                                    className="w-full h-full rounded-r object-cover absolute" />
                                <span className="block relative h-full flex justify-end item-end pr-4 pb-4">
                                    <h1 className="text-white text-bold smtext-4xl md:text-4xl lg:text-4xl font bold px-3 py-4 bg-blue-900 rounded">{post.title}</h1>
                                </span>
                            </span>
                        </Link>
                    </article>
                                  ))}
                </div>
            </section>


        </main>
    );
}

export default Post;
