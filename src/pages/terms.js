import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Helmet from "../components/helmet"
import Header from "../components/normalheader"
import Article from "../components/article"
import Footer from "../components/footer"

export default () => (
    <Layout>
        <Helmet title="Terms" />
        <Navbar />
        <Header headline="Privacy Policy and Terms" />
        <Article>
            <h1>Privacy Policy</h1>
            <p>
            Privacy policy - We are collecting this information for use with Craig Airports Pilots Association to contact you and keep you informed.  You may always opt out and we will do our best to remove you promptly.  This is all run on Google forms and is as secure as Google makes it, we will take reasonable care to protect it but given the nature of the internet please don't include any information that you wish to keep secure.
            </p>
        </Article>
        <Footer />
    </Layout>
);
