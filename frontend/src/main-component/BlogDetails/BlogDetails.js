import React, { Fragment, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import BlogSingle from "../../components/BlogDetails/BlogSingle.js";
import Footer from "../../components/footer/Footer";

const BlogDetailsPage = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!slug) return;

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.centuryfinancelimited.com/api/blogs/${slug}`
        );
        if (!response.ok) {
          throw new Error("Blog post not found.");
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

  if (loading) {
    return (
      <Fragment>
        <Helmet>
          <title>Loading Blog... | Century Finance Limited</title>
        </Helmet>
        <Navbar />
        <PageTitle pageTitle={"Loading..."} pagesub={"Blog"} />
        <div className="section-padding">
          <div className="container">Loading Content...</div>
        </div>
        <Footer />
        <Scrollbar />
      </Fragment>
    );
  }

  if (error || !blog) {
    // Also handle if blog is null after loading
    return (
      <Fragment>
        <Helmet>
          <title>Error Loading Blog | Century Finance Limited</title>
        </Helmet>
        <Navbar />
        <PageTitle pageTitle={"Post Not Found"} pagesub={"Blog"} />
        <div className="section-padding">
          <div className="container">
            Error: {error || "The requested blog post could not be found."}
          </div>
        </div>
        <Footer />
        <Scrollbar />
      </Fragment>
    );
  }

  return (
    <Fragment>
      {/* --- Dynamic Helmet for Loaded Blog Post --- */}
      <Helmet>
        {/* CHANGE #1: Use 'metaTitle' for the page title, with a fallback to the main title */}
        <title>{`${
          blog.metaTitle || blog.title
        } | Century Finance Limited`}</title>

        {/* This was already correct */}
        <meta name="description" content={blog.metaDescription} />

        {/* CHANGE #2: Use 'metaKeywords' from your schema. It's already a string, so no .join() is needed. */}
        <meta name="keywords" content={blog.metaKeywords} />
      </Helmet>

      <Navbar />

      {/* This correctly uses the main blog title for the hero section */}
      <PageTitle pageTitle={blog.title} pagesub={"Blog"} />

      {/* The BlogSingle component receives all the blog data to display */}
      <BlogSingle blLeft={true} />

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogDetailsPage;
