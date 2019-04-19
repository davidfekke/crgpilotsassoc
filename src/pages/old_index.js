import React from "react"
import { withPrefix } from "gatsby"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Helmet from "../components/helmet"
import Header from "../components/header"
import Article from "../components/article"
import Footer from "../components/footer"
import ExtLink from "../components/extlink"

export default () => (
    <Layout>
        <Helmet title="Craig Airport Pilots Association" />
        <Navbar />
        <Header headline="Welcome to the Craig Airport Pilots Association" />
        <Article>
            <h1>Craig Airport Pilots Association Goals</h1>
            <ul>
                <li>Build a community of people interested in Craig Airport and Flying</li>
                <li>Share information about Airport operations, Social events and Flying in General</li>
            </ul>
            <p>
                <ExtLink uri="https://goo.gl/forms/f9nZ5Ii0lWg1Fezg2" name="Click here to sign up!" />
            </p>
            <h1>News</h1>
            <p>
                2-22-19 <strong>Second annual CAPA Coffee</strong>
            </p>
            <img src={withPrefix('capa-group-photo-2019.jpg')} alt="Group" />
        </Article>
        <Footer />
    </Layout>
);
