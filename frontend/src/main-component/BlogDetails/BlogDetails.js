import React, { Fragment, useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import BlogSingle from "../../components/BlogDetails/BlogSingle.js";
import Footer from "../../components/footer/Footer";

const BlogDetailsPage = () => {
  // Renamed to avoid confusion with the variable
  const { slug } = useParams();

  // State to hold the fetched blog, loading status, and errors
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect to fetch the data when the component mounts or slug changes
  useEffect(() => {
    const fetchBlogData = async () => {
      if (!slug) return;

      setLoading(true);
      try {
        // Using the slug to fetch the specific blog post
        // NOTE: Using localhost for development example. Use your live URL for production.
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

  // Conditional rendering while data is being fetched
  if (loading) {
    return (
      <Fragment>
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
      <Navbar />
      {/* Now we can safely use the title because we wait for the data.
              We also provide a fallback title just in case.
            */}
      <PageTitle
        pageTitle={blog ? blog.title : "Blog Details"}
        pagesub={"Blog"}
      />

      {/* Pass the fully fetched 'blog' object as a prop to the child component.
       */}
      {blog && <BlogSingle blog={blog} />}

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default BlogDetailsPage;
