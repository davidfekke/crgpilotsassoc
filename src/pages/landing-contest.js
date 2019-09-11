import React from "react"
import { withPrefix } from "gatsby"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Helmet from "../components/helmet"
import Header from "../components/normalheader"
import Article from "../components/article"
import Footer from "../components/footer"

export default () => (
    <Layout>
        <Helmet title="Landing Contest" />
        <Navbar />
        <Header headline="About the Craig Airport Landing Contest" />
        <Article>
            <h1>Landing Contest Information</h1>
            {/* <img src={withPrefix('capa-group-photo-2019.jpg')} alt="Craig Pilots Group Photo" style={{ width: 'auto' }} /> */}
            <p>
                Come back to this page for more information on the landing contest scheduled for November 16th, 2019.
            </p>
        </Article>
        <Footer />
    </Layout>
);
