import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SubmitHandler = (e) => {
  e.preventDefault();
};

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogSidebar = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // The URL for your live backend server
  const API_BASE_URL = "https://api.centuryfinancelimited.com";

  // This fetch logic is already correct
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs from API");
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
        console.error("Sidebar fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllBlogs();
  }, []);

  // Your API already sorts by newest, so we just take the first 3 posts.
  const recentPosts = blogs.slice(0, 3);

  // --- CHANGE #1: Logic to generate tags from the 'metaKeywords' string ---
  // We split the comma-separated string from each blog into individual tags.
  // Then we use a Set to get only the unique tags.
  const allKeywords = [
    ...new Set(
      blogs.flatMap((blog) =>
        blog.metaKeywords
          ? blog.metaKeywords.split(",").map((k) => k.trim())
          : []
      )
    ),
  ].slice(0, 8); // Display up to 8 tags

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
          {/* CHANGE #2: Use 'thumbnail' field and build the full URL */}
          <img
            src={
              blog.thumbnail
                ? `${API_BASE_URL}/${blog.thumbnail.replace(/\\/g, "/")}`
                : "https://placehold.co/100x80/eee/ccc?text=..."
            }
            alt={blog.title}
          />
        </div>
        <div className="details">
          <h4>
            {/* CHANGE #3: Correct the link path to '/blog/:slug' */}
            <Link onClick={ClickHandler} to={`/blog/${blog.slug}`}>
              {blog.title}
            </Link>
          </h4>
          <span className="date">
            {/* CHANGE #4: Use 'createdAt' field for the date */}
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric", // Added year for clarity
            })}
          </span>
        </div>
      </div>
    ));
  };

  return (
    <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
      <div className="blog-sidebar">
        {/* Your Search and Category widgets remain commented out as requested */}

        <div className="widget recent-post-widget">
          <h3>Recent Posts</h3>
          <div className="posts">{renderRelatedPosts()}</div>
        </div>

        
      </div>
    </div>
  );
};

export default BlogSidebar;
