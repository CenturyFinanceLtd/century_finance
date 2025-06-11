import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const BlogPageFullwidth =() => {
    return(
        <Fragment>
            <Helmet>
                    <title>
                      Century Finance Limited | Investment & Finance Solutions in India
                    </title>
                    <meta
                      name="description"
                      content="Explore trusted financial services with Century Finance Limited. Get expert investment, equity, commodity, and global marketing training all in one place."
                    />
                    <meta
                      name="keywords"
                      content="century finance, century finance limited, century finance company, century finance company ltd, century finance online"
                    />
                  </Helmet>
            <Navbar/>
            <PageTitle pageTitle={'Blogs'} pagesub={'Blog'}/> 
            <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageFullwidth;

