import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogSidebar from "../BlogSidebar/BlogSidebar.js";

// This is a new helper component to render your content blocks.
// We define it here to keep everything in one file.
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
    default:
      return null;
  }
};

const BlogSingle = (props) => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.centuryfinancelimited.com/api/blogs/${slug}`
        );
        if (!response.ok) {
          throw new Error(`Blog not found or API error: ${response.status}`);
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogData();
  }, [slug]);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // Show loading state
  if (loading) {
    return (
      <section className="wpo-blog-single-section section-padding">
        Loading...
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section className="wpo-blog-single-section section-padding">
        Error: {error}
      </section>
    );
  }

  // Show not found state
  if (!blog) {
    return (
      <section className="wpo-blog-single-section section-padding">
        Blog post not found.
      </section>
    );
  }

  // If data is loaded, render the component with dynamic data
  return (
    <section className="wpo-blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="wpo-blog-content">
              <div className="post format-standard-image">
                <div className="entry-media">
                  {/* DYNAMIC IMAGE: Add 'imageUrl' to your database */}
                  <img
                    src={
                      blog.imageUrl ||
                      "https://placehold.co/800x600?text=Blog+Image"
                    }
                    alt={blog.title}
                  />
                </div>
                <div className="entry-meta">
                  <ul>
                    {/* DYNAMIC AUTHOR & DATE */}
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
                      {new Date(blog.publishDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </li>
                  </ul>
                </div>
                {/* DYNAMIC TITLE */}
                <h2>{blog.title}</h2>

                {/* DYNAMIC CONTENT: Replaces all the static <p> and <blockquote> tags */}
                {blog.contentBlocks &&
                  blog.contentBlocks.map((block, index) => (
                    <ContentRenderer key={index} block={block} />
                  ))}
              </div>

              <div className="tag-share clearfix">
                <div className="tag">
                  <span>Tags: </span>
                  <ul>
                    {/* DYNAMIC KEYWORDS */}
                    {blog.primaryKeywords &&
                      blog.primaryKeywords.map((keyword) => (
                        <li key={keyword}>
                          <Link to="/blog">{keyword}</Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>

              {/* NOTE: Social share links are still static as they were before */}
              <div className="tag-share-s2 clearfix">
                <div className="tag">
                  <span>Share: </span>
                  <ul>
                    <li>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="author-box">
                <div className="author-avatar">
                  {/* DYNAMIC AUTHOR IMAGE: Add 'author.imageUrl' to database */}
                  <Link to="#">
                    <img
                      src={
                        blog.author.imageUrl ||
                        "https://placehold.co/100x100?text=Author"
                      }
                      alt={blog.author.name}
                    />
                  </Link>
                </div>
                <div className="author-content">
                  {/* DYNAMIC AUTHOR NAME & BIO */}
                  <Link to="#" className="author-name">
                    Author: {blog.author.name}
                  </Link>
                  <p>{blog.author.bio}</p>
                  {/* NOTE: Author social links are static as they were before */}
                  <div className="socials">
                    <ul className="social-link">
                      <li>
                        <Link to="#">
                          <i className="ti-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ti-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="ti-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* NOTE: The 'more-posts' section for prev/next is complex, so it's simplified to a 'Back' button */}
              <div className="more-posts">
                <div className="previous-post">
                  <Link to="/blog">
                    <span className="post-control-link">
                      &larr; Back to All Posts
                    </span>
                  </Link>
                </div>
              </div>

              {/* NOTE: The comments section is a separate feature. The static display has been removed to avoid confusion. */}
              <div className="comments-area">
                <div className="comment-respond">
                  <h3 className="comment-reply-title">Post a Comment</h3>
                  <form
                    onSubmit={submitHandler}
                    id="commentform"
                    className="comment-form">
                    <div className="form-textarea">
                      <textarea
                        id="comment"
                        placeholder="Write Your Comments..."></textarea>
                    </div>
                    <div className="form-inputs">
                      <input placeholder="Website" type="url" />
                      <input placeholder="Name" type="text" />
                      <input placeholder="Email" type="email" />
                    </div>
                    <div className="form-submit">
                      <input id="submit" value="Post Comment" type="submit" />
                    </div>
                  </form>
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
