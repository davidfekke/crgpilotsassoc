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
        <Helmet title="About the Craig Airport Pilots Association" />
        <Navbar />
        <Header headline="About the Craig Airport Pilots Association" />
        <Article>
            <h1>About</h1>
            <p>
                The purpose of the Craig Airport Pilots Association is to help build a community of people interested in Craig Airport and Flying.
                We also want to help share information about Airport operations, Social events and Flying in General. 
            </p>
            <p>
                Craig, now known as Jacksonville Executive at Craig Airport (JAXEX), was originally built in the 1940s, 
                one of six airports in the area developed for military training. 
                In 1946 the US Military gave the airport to the City of Jacksonville, 
                which named the airport after fallen Navy Lt. Commander James Edwin Craig (1901-1941) who was killed 
                in action during the Japanese attack on Pearl Harbor.  
            </p>
            <img src={withPrefix('02585.gif')} alt="Diagram" style={{ width: 'auto' }}/>
        </Article>
        <Footer />
    </Layout>
);
