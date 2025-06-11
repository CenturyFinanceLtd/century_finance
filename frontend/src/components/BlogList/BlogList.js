import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogSidebar from "../BlogSidebar/BlogSidebar.js";
import VideoModal from "../ModalVideo/VideoModal";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogList = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Fetch from your LIVE API endpoint
        const response = await fetch(
          "https://api.centuryfinancelimited.com/api/blogs"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Map the data from MongoDB to the props your component expects
        const formattedData = data.map((blog) => ({
          ...blog, // Pass all original blog data
          id: blog._id, // Use MongoDB's _id
          authorTitle: blog.author.name,
          create_at: new Date(blog.publishDate).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          comment: blog.commentsCount || 0, // Use a real comment count if you have one
          // IMPORTANT: You need a way to get the blog image.
          // I recommend adding an 'imageUrl' field to your MongoDB documents.
          blogSingleImg:
            blog.imageUrl ||
            "https://placehold.co/800x600/eee/ccc?text=Blog+Image",
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
    return <div className="section-padding">Loading Blogs...</div>;
  }

  if (error) {
    return <div className="section-padding">Error: {error}</div>;
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
                      <VideoModal />
                    </div>
                    <div className="entry-meta">
                      <ul>
                        <li>
                          <i className="fi flaticon-user"></i> By{" "}
                          <Link
                            onClick={ClickHandler}
                            to={`/blog-single/${blog.slug}`}>
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
                        <Link
                          onClick={ClickHandler}
                          to={`/blog-single/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </h3>
                      <p>{blog.metaDescription}</p>
                      <Link
                        onClick={ClickHandler}
                        to={`/blog-single/${blog.slug}`}
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
