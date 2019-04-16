import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Helmet from "../components/helmet"
import Header from "../components/header"
import Article from "../components/article"
import Footer from "../components/footer"

export default () => (
    <Layout>
        <Helmet title="About the Craig Airport Pilots Association" />
        <Navbar />
        <Header headline="About the Craig Airport Pilots Association" />
        <Article>
            <h1>About</h1>
            <ul>
                <li>Build a community of people interested in Craig Airport and Flying</li>
                <li>Share information about Airport operations, Social events and Flying in General</li>
            </ul>
            
        </Article>
        <Footer />
    </Layout>
);
