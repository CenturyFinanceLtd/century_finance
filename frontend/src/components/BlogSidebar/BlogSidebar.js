import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SubmitHandler = (e) => {
  e.preventDefault();
};

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogSidebar = (props) => {
  // State for blogs, loading, and error status
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all blogs when the component mounts
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await fetch(
          "https://api.centuryfinancelimited.com/api/blogs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blogs from API");
        }
        const data = await response.json();
        setBlogs(data); // Store all fetched blogs
      } catch (err) {
        setError(err.message);
        console.error("Sidebar fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBlogs();
  }, []); // Empty array ensures this runs only once

  // Create a list of the 3 most recent posts for the sidebar
  // Your API sorts by newest, so we just take the first 3.
  const recentPosts = blogs.slice(0, 3);

  // Create a unique list of all keywords for the Tags widget
  const allKeywords = [
    ...new Set(blogs.flatMap((blog) => blog.primaryKeywords || [])),
  ].slice(0, 5);

  const renderRelatedPosts = () => {
    if (loading) {
      return <p>Loading posts...</p>;
    }
    if (error) {
      return <p style={{ color: "red" }}>Could not load posts.</p>;
    }
    if (recentPosts.length === 0) {
      return <p>No recent posts available.</p>;
    }
    return recentPosts.map((blog) => (
      <div className="post" key={blog._id}>
        <div className="img-holder">
          <img
            src={blog.imageUrl || "https://placehold.co/100x80?text=..."}
            alt={blog.title}
          />
        </div>
        <div className="details">
          <h4>
            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
              {blog.title}
            </Link>
          </h4>
          <span className="date">
            {new Date(blog.publishDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>
    ));
  };

  return (
    <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
      <div className="blog-sidebar">
        {/* Your original commented-out Search Widget */}
        {/* <div className="widget search-widget">
                    <h3>Search Here</h3>
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div> */}

        {/* Your original commented-out Category Widget */}
        {/* <div className="widget category-widget">
                    <h3>Post Categories</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/blog">Education<span>5</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Ai Content <span>7</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Knowledge<span>3</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Marketing<span>6</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Design<span>2</span></Link></li>
                        <li><Link onClick={ClickHandler} to="/blog">Courses<span>8</span></Link></li>
                    </ul>
                </div> */}

        <div className="widget recent-post-widget">
          <h3>Related Posts</h3>
          <div className="posts">
            {/* DYNAMIC CONTENT: This part now fetches from the database */}
            {renderRelatedPosts()}
          </div>
        </div>

        <div className="widget tag-widget">
          <h3>Tags</h3>
          <ul>
            {/* DYNAMIC CONTENT: These tags are generated from your database */}
            {loading ? (
              <li>Loading...</li>
            ) : (
              allKeywords.map((tag) => (
                <li key={tag}>
                  <Link onClick={ClickHandler} to="/blog">
                    {tag}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
