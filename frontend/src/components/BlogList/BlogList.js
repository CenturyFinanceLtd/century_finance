import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogSidebar from "../BlogSidebar/BlogSidebar.js";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogList = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // The URL for your live backend server
  const API_BASE_URL = "https://api.centuryfinancelimited.com";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // This endpoint will now work because of the backend change below
        const response = await fetch(`${API_BASE_URL}/api/blogs`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Map the data from your API to the props your component expects
        const formattedData = data.map((blog) => ({
          ...blog,
          id: blog._id,
          authorTitle: blog.author ? blog.author.name : "Anonymous", // Handle case where author might be missing

          // --- CHANGE #1: Use 'createdAt' from your schema ---
          create_at: new Date(blog.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),

          comment: blog.commentsCount || 0,

          // --- CHANGE #2: Use 'thumbnail' and build the full image URL ---
          blogSingleImg: blog.thumbnail
            ? `${API_BASE_URL}/${blog.thumbnail.replace(/\\/g, "/")}`
            : "https://placehold.co/800x600/eee/ccc?text=Blog+Image", // Fallback image
        }));

        setBlogs(formattedData);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <div className="section-padding text-center">Loading Blogs...</div>;
  }

  if (error) {
    return <div className="section-padding text-center">Error: {error}</div>;
  }

  return (
    <section className="wpo-blog-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <div className={`post ${blog.blClass}`} key={blog.id}>
                    <div className="entry-media video-holder">
                      <img src={blog.blogSingleImg} alt={blog.title} />
                    </div>
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <i className="fi flaticon-user"></i> By{" "}
                          <Link
                            onClick={ClickHandler}
                            to={`/blog/${blog.slug}`}>
                            {blog.authorTitle}
                          </Link>
                        </li>
                        <li>
                          <i className="fi flaticon-comment-white-oval-bubble"></i>{" "}
                          Comments {blog.comment}
                        </li>
                        <li>
                          <i className="fi flaticon-calendar"></i>{" "}
                          {blog.create_at}
                        </li>
                      </ul>
                    </div>
                    <div className="entry-details">
                      <h3>
                        <Link onClick={ClickHandler} to={`/blog/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h3>
                      {/* Using metaDescription for the excerpt as in your original code */}
                      <p>{blog.metaDescription}</p>
                      <Link
                        onClick={ClickHandler}
                        to={`/blog/${blog.slug}`}
                        className="read-more">
                        READ MORE...
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>No blogs found.</p>
              )}
              <div className="pagination-wrapper pagination-wrapper-left">
                {/* Your pagination logic here */}
              </div>
            </div>
          </div>
          <BlogSidebar blLeft={props.blLeft} />
        </div>
      </div>
    </section>
  );
};

export default BlogList;
