import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import  imageUrlBuilder  from "@sanity/image-url";
import BlockContent from '@sanity/block-content-to-react';


const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source);
}


function SinglePost() {
    const [SinglePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
            mainImage{
                asset->{
                    _id,
                    url,
                  }
                },
                body,
                "name": author->name,
                "authorImage": author->image
                 }`
        )
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
}, [slug]);

if(!SinglePost) return <div className="text-center text-4xl pt-44">Loading...</div>;


    return (
        <main className="bg-white min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-blue-900 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-white bg-opacity-75 rounded p-12">
                            <h1 className="cursive font-extrabold text-3xl lg:text-6xl mb-4">{SinglePost.title}</h1>
                            <h3 className="text-center text-2xl"> Developed by {SinglePost.name}</h3>
                        </div>
                    </div>
                    <img
                        src={SinglePost.mainImage.asset.url}
                        alt={SinglePost.name}
                        className="w-full object-cover rounded-t"
                        style={{ height: "400px" }}
                    />
                </header>
                <div className="text-white text-lg` font-semibold px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
                    <BlockContent blocks={SinglePost.body} projectId="xw4r0sk4" dataset="production" />
                </div>
            </article>
        </main>
    );
}

export default SinglePost;