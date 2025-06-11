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
        {/* --- Default Helmet for Loading State --- */}
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

  if (error) {
    return (
      <Fragment>
        {/* --- Default Helmet for Error State --- */}
        <Helmet>
          <title>Error Loading Blog | Century Finance Limited</title>
        </Helmet>
        <Navbar />
        <PageTitle pageTitle={"Error"} pagesub={"Blog"} />
        <div className="section-padding">
          <div className="container">Error: {error}</div>
        </div>
        <Footer />
        <Scrollbar />
      </Fragment>
    );
  }

  return (
    <Fragment>
      {/* --- Dynamic Helmet for Loaded Blog Post --- */}
      {blog && (
        <Helmet>
          {/* Dynamically set the page title */}
          <title>{`${blog.title} | Century Finance Limited`}</title>

          {/* Dynamically set the meta description */}
          <meta name="description" content={blog.metaDescription} />

          {/* Dynamically set the meta keywords */}
          <meta name="keywords" content={blog.primaryKeywords.join(", ")} />
        </Helmet>
      )}

      <Navbar />
      <PageTitle
        pageTitle={blog ? blog.title : "Blog Details"}
        pagesub={"Blog"}
      />

      {blog && <BlogSingle blog={blog} />}

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogDetailsPage;
