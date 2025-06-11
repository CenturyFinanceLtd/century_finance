import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import BlogSidebar from "../BlogSidebar/BlogSidebar.js";

// Helper component to render different content blocks from the database
const ContentRenderer = ({ block }) => {
  switch (block.type) {
    case "h2":
      return <h2 className="text-3xl font-bold my-6">{block.data.text}</h2>;

    case "paragraph":
      // The 'whitespace-pre-wrap' class preserves newlines from your text
      return (
        <p className="my-4 text-gray-700 leading-relaxed whitespace-pre-wrap">
          {block.data.text}
        </p>
      );

    case "introduction":
      return (
        <p className="text-xl italic text-gray-600 my-6">{block.data.text}</p>
      );

    case "conclusion":
      return (
        <p className="my-6 text-lg font-medium text-gray-800">
          {block.data.text}
        </p>
      );

    case "list":
    case "ordered_list":
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
    default:
      return null; // Don't render unknown block types
  }
};

const BlogSingle = (props) => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.centuryfinancelimited.com/api/blogs/${slug}`
        );
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Blog post not found.");
          }
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]); // Re-fetch if the slug changes

  if (loading) {
    return <div className="section-padding text-center">Loading Post...</div>;
  }

  if (error) {
    return (
      <div className="section-padding text-center text-red-600">
        Error: {error}
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="section-padding text-center">Blog post not found.</div>
    );
  }

  // Format date for display
  const formattedDate = new Date(blog.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="post format-standard-image">
                <div className="entry-media mb-8">
                  <img
                    src={
                      blog.imageUrl ||
                      `https://source.unsplash.com/random/1200x600?sig=${blog._id}&query=finance`
                    }
                    alt={blog.title}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="fi flaticon-user"></i> By {blog.author.name}
                    </li>
                    <li>
                      <i className="fi flaticon-comment-white-oval-bubble"></i>{" "}
                      Comments {blog.commentsCount || 0}
                    </li>
                    <li>
                      <i className="fi flaticon-calendar"></i> {formattedDate}
                    </li>
                  </ul>
                </div>
                <h2 className="text-4xl font-bold my-4 text-gray-900">
                  {blog.title}
                </h2>

                {/* Dynamically render content blocks here */}
                {blog.contentBlocks.map((block, index) => (
                  <ContentRenderer key={index} block={block} />
                ))}
              </div>

              <div className="tag-share clearfix">
                <div className="tag">
                  <span>Tags: </span>
                  <ul>
                    {blog.primaryKeywords.map((keyword, index) => (
                      <li key={index}>
                        <Link to="/blog">{keyword}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="author-box">
                <div className="author-avatar">
                  {/* Suggest adding authorImageUrl to your database */}
                  <img
                    src={
                      blog.author.imageUrl ||
                      "https://placehold.co/100x100/EBF4FF/76A9FA?text=Author"
                    }
                    alt={blog.author.name}
                  />
                </div>
                <div className="author-content">
                  <Link to="#" className="author-name">
                    {blog.author.name}
                  </Link>
                  <p>{blog.author.bio}</p>
                  {/* You can add author social links here if you add them to the database */}
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
