import React from 'react';
import { useSelector } from 'react-redux';
import "./modalPost.css"

const Posts = () => {
    const posts = useSelector((state)=>state.post.posts);
  const tags = ["None", "Hot", "NSFW", "New", "Quotes"];
    return (
        <div>
            <section className="post-container">
                {posts.slice(1).map((post,index)=>{
                    return(
                        <div className="posts" key={index}>
                            <p className="posts-title">
                                {post.title}
                            </p>
                            <p className={`posts-tags-${tags[post.tag]} posts-tags`}>
                                {tags[post.tag]}
                            </p>
                            <p className="posts-description">
                                {post.description}
                            </p>
                        </div>
                    )
                })}
            </section>
        </div>
    );
}

export default Posts;
