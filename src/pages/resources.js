import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Helmet from "../components/helmet"
import Header from "../components/header"
import Article from "../components/article"
import Footer from "../components/footer"

export default () => (
    <Layout>
        <Helmet title="Resources" />
        <Navbar />
        <Header headline="Resources" />
        <Article>
            <h1>Resources</h1>
            <p>Here are some great resources available to pilots.</p>
            
        </Article>
        <Footer />
    </Layout>
);
