import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogSidebar from "../BlogSidebar/BlogSidebar.js";

// Static image for author fallback
import authorFallbackImage from "../../images/blog-details/author.jpg";

const BlogSingle = (props) => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // The URL for your live backend server
  const API_BASE_URL = "https://api.centuryfinancelimited.com";

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        // This fetch request is correct and uses the endpoint we already built
        const response = await fetch(`${API_BASE_URL}/api/blogs/${slug}`);
        if (!response.ok) {
          throw new Error(`Blog not found or server error`);
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogData();
    }
  }, [slug]);

  // --- Loading, Error, and Not Found States ---
  if (loading) {
    return (
      <section className="wpo-blog-single-section section-padding">
        <div className="container text-center py-12">
          <p>Loading post...</p>
        </div>
      </section>
    );
  }

  if (error || !blog) {
    return (
      <section className="wpo-blog-single-section section-padding">
        <div className="container text-center py-12">
          <p className="text-red-500">
            Error: {error || "Blog post not found."}
          </p>
        </div>
      </section>
    );
  }

  // --- JSX using the fetched 'blog' object ---
  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="post format-standard-image">
                <div className="entry-media">
                  {/* CHANGE #1: Use 'thumbnail' for the main image and build the full URL */}
                  {blog.thumbnail && (
                    <img
                      src={`${API_BASE_URL}/${blog.thumbnail.replace(
                        /\\/g,
                        "/"
                      )}`}
                      alt={blog.title}
                    />
                  )}
                </div>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fi flaticon-user"></i> By{" "}
                      {/* Add a safety check for author object */}
                      <Link to="#">
                        {blog.author ? blog.author.name : "Admin"}
                      </Link>{" "}
                    </li>
                    <li>
                      <i className="fi flaticon-comment-white-oval-bubble"></i>{" "}
                      Comments {blog.commentsCount || 0}
                    </li>
                    <li>
                      <i className="fi flaticon-calendar"></i>{" "}
                      {/* CHANGE #2: Use 'createdAt' for the date */}
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </li>
                  </ul>
                </div>
                <h2>{blog.title}</h2>

                {/* CHANGE #3: Render the HTML from the 'description' field */}
                {/* This is the standard and safe way to render HTML content in React */}
                <div
                  className="post-content"
                  dangerouslySetInnerHTML={{ __html: blog.description }}
                />
              </div>

              {/* Author Box - with safety checks */}
              {blog.author && (
                <div className="author-box">
                  <div className="author-avatar">
                    <Link to="#">
                      {/* CHANGE #4: Use 'author.image' for the author avatar */}
                      <img
                        src={
                          blog.author.image
                            ? `${API_BASE_URL}/${blog.author.image.replace(
                                /\\/g,
                                "/"
                              )}`
                            : authorFallbackImage
                        }
                        alt={blog.author.name}
                      />
                    </Link>
                  </div>
                  <div className="author-content">
                    <Link to="#" className="author-name">
                      Author: {blog.author.name}
                    </Link>
                    {/* CHANGE #5: Use 'author.description' for the bio */}
                    <p>{blog.author.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <BlogSidebar blLeft={props.blLeft} />
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
