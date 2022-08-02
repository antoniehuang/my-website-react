import { useState } from "react";

const Blog = () => {

    // blog data
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'this is the verge', author: 'Antonie', id: 1 },
        { title: 'Kitty cafe', body: 'this is the verge', author: 'Kat', id: 2 },
        { title: 'Best league champion', body: 'this is the verge', author: 'Shawn', id: 3 }
    ]);

    return (
        <div className="blog">
            <h2>List of Blogs</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Blog;