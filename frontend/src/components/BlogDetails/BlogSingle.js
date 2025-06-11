import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogSidebar from "../BlogSidebar/BlogSidebar.js";

// Your static images are kept for parts of the page that remain static
import blog6 from "../../images/blog-details/author.jpg";
import gl1 from "../../images/blog-details/1.jpg";

// This helper component for rendering content remains the same.
const ContentRenderer = ({ block }) => {
  switch (block.type) {
    case "h2":
      return <h2 className="text-3xl font-bold my-6">{block.data.text}</h2>;
    case "paragraph":
      return (
        <p className="my-4 text-gray-700 leading-relaxed whitespace-pre-wrap">
          {block.data.text}
        </p>
      );
    case "introduction":
      return (
        <p className="text-xl italic text-gray-600 my-6">{block.data.text}</p>
      );
    case "ordered_list":
    case "list":
      const ListTag = block.type === "ordered_list" ? "ol" : "ul";
      return (
        <ListTag className="my-6 space-y-4 pl-5 list-disc">
          {block.data.items.map((item, index) => (
            <li key={index}>
              <strong className="font-semibold text-gray-800">
                {item.title}
              </strong>
              <p className="text-gray-600 ml-2">
                {item.detail || item.details}
              </p>
              {item.promo_text && (
                <p className="text-sm text-blue-600 bg-blue-50 p-2 mt-2 rounded">
                  {item.promo_text}
                </p>
              )}
            </li>
          ))}
        </ListTag>
      );
    case "conclusion":
      return (
        <p className="my-6 text-lg font-medium text-gray-800">
          {block.data.text}
        </p>
      );
    default:
      return null;
  }
};

const BlogSingle = (props) => {
  // 1. We get the slug from the URL using the useParams hook.
  const { slug } = useParams();

  // 2. We add state to hold our blog data, loading status, and any errors.
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. The hardcoded 'BlogDetails' object is removed.

  // 4. This useEffect hook runs when the component loads or the slug changes.
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        // We use the slug to make a specific API request to our backend.
        const response = await fetch(
          `https://api.centuryfinancelimited.com/api/blogs/${slug}`
        );
        if (!response.ok) {
          throw new Error(`Blog not found or server error`);
        }
        const data = await response.json();
        setBlog(data); // We store the successfully fetched blog data in our state.
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogData();
    }
  }, [slug]); // The dependency array ensures this runs again if the slug changes.

  // 5. We handle the loading and error states before rendering the blog.
  if (loading) {
    return (
      <section className="wpo-blog-single-section section-padding">
        <div className="container text-center py-12">
          <p>Loading post...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="wpo-blog-single-section section-padding">
        <div className="container text-center py-12">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="wpo-blog-single-section section-padding">
        <div className="container text-center py-12">
          <p>Blog post not found.</p>
        </div>
      </section>
    );
  }

  // 6. The JSX now uses the 'blog' object from our state instead of the old 'BlogDetails'.
  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="post format-standard-image">
                <div className="entry-media">
                  <img src={blog.imageUrl || gl1} alt={blog.title} />
                </div>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fi flaticon-user"></i> By{" "}
                      <Link to="#">{blog.author.name}</Link>{" "}
                    </li>
                    <li>
                      <i className="fi flaticon-comment-white-oval-bubble"></i>{" "}
                      Comments {blog.commentsCount || 0}
                    </li>
                    <li>
                      <i className="fi flaticon-calendar"></i>{" "}
                      {new Date(blog.publishDate).toLocaleDateString()}
                    </li>
                  </ul>
                </div>
                <h2>{blog.title}</h2>
                {blog.contentBlocks.map((block, index) => (
                  <ContentRenderer key={index} block={block} />
                ))}
              </div>
              <div className="author-box">
                <div className="author-avatar">
                  <Link to="#">
                    <img
                      src={blog.author.imageUrl || blog6}
                      alt={blog.author.name}
                    />
                  </Link>
                </div>
                <div className="author-content">
                  <Link to="#" className="author-name">
                    Author: {blog.author.name}
                  </Link>
                  <p>{blog.author.bio}</p>
                </div>
              </div>
            </div>
          </div>
          <BlogSidebar blLeft={props.blLeft} />
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
