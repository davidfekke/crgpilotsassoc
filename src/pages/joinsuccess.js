import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Helmet from "../components/helmet"
import Header from "../components/normalheader"
import Article from "../components/article"
import Footer from "../components/footer"

export default () => (
    <Layout>
        <Helmet title="Thanks for Joining!" />
        <Navbar />
        <Header headline="Thanks for Joining CAPA" />
        <Article>
            <h1>Thanks for Joining CAPA!</h1>
            <p>
                Thank you for joining the Craig Aircraft Pilots Association.
            </p>
        </Article>
        <Footer />
    </Layout>
);
