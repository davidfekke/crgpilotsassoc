import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Helmet from "../components/helmet"
import Header from "../components/header"
import Article from "../components/article"
import Footer from "../components/footer"
import ExtLink from "../components/extlink"

export default () => (
    <Layout>
        <Helmet title="Services" />
        <Navbar />
        <Header headline="Services available at Craig" />
        <Article>
            <h1>Services</h1>
            <h3>Fixed Base Operators</h3>
            <ul>
                <li><ExtLink uri="http://skyharboraviation.com/" name="Sky Harbor" /></li>
                <li><ExtLink uri="https://www.craigaircenter.com/" name="Craig Air Center" /></li>
            </ul>
            <h3>Flight Training</h3>
            <ul>
                <li><ExtLink uri="https://atpflightschool.com/" name="ATP" /></li>
                <li><ExtLink uri="https://www.holladayaviation.com/" name="Holladay Aviation" /></li>
                <li><ExtLink uri="https://sterlingflight.com/" name="Sterling" /></li>
            </ul>
        </Article>
        <Footer />
    </Layout>
);
