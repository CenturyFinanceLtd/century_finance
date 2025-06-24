import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const BlogPageFullwidth =() => {
    return (
      <Fragment>
        <Helmet>
          <title>
            Explore Latest Financial Insights & Stock Market Blogs | Century
            Finance
          </title>
          <meta
            name="description"
            content="Stay updated with expert tips, investment strategies, and financial market trends on Century Finance's blog. Perfect for beginners and seasoned investors alike."
          />
          <meta
            name="keywords"
            content="Century Finance Limited blog, financial services blog, investment strategies India, market advice blog, online financial training courses, investment strategy guides, risk management in investing blog
"
          />
        </Helmet>
        <Navbar />
        <PageTitle pageTitle={"Blogs"} pagesub={"Blog"} />
        <BlogList blLeft={"d-none"} blRight={"col-lg-10 offset-lg-1"} />
        <Footer />
        <Scrollbar />
      </Fragment>
    );
};
export default BlogPageFullwidth;

