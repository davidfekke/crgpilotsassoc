import React from "react"
import { withPrefix } from "gatsby"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Helmet from "../components/helmet"
import Header from "../components/normalheader"
import Article from "../components/article"
import Footer from "../components/footer"
import ExtLink from "../components/extlink"
import BeachBannerLogo from "./beach-banners-logo.svg"

export default () => (
    <Layout>
        <Helmet title="Services" />
        <Navbar />
        <Header headline="Services available at Craig" />
        <Article>
            <h1>Services</h1>
            <div style={{ witdh: '100%'}}>
                <h3>Fixed Base Operators</h3>
            </div>
            
            <div style={{ display: 'block', width: '100%', clear: 'both'}}>
                
                <div style={{ float: 'left', width: '200px', padding: '1rem'}}>
                    <img src={withPrefix(`SkyHarbor-logo-236x64.png`)} alt="ATP" style={{ width: '175px' }} />
                </div>
                <div style={{ overflow: 'hidden'}}>
                    <ExtLink uri="http://skyharboraviation.com/" name="Sky Harbor" />
                </div>
                
            </div>

            <div style={{ display: 'block', width: '100%', clear: 'both'}}>
                <div style={{ float: 'left', width: '200px', padding: '1rem'}}>
                    <img src={withPrefix(`gold.gif`)} alt="ATP" style={{ width: '175px' }} />
                </div>
                <div style={{ overflow: 'hidden'}}>
                    <ExtLink uri="https://www.craigaircenter.com/" name="Craig Air Center" />
                </div>
            </div>

            
            <div style={{ witdh: '100%', clear: 'both'}}>
                <h3>Flight Training</h3>
            </div>
            
            <div style={{ display: 'block', width: '100%', clear: 'both'}}>
                <div style={{ float: 'left', width: '200px', padding: '1rem'}}>
                    <img src={withPrefix(`atp.logo.svg`)} alt="ATP" style={{ width: '175px' }} />
                </div>
                <div style={{ overflow: 'hidden'}}>
                    <ExtLink uri="https://atpflightschool.com/" name="ATP" />
                </div>
            </div>
            <div style={{ display: 'block', width: '100%', clear: 'both'}}>
                <div style={{ float: 'left', width: '200px', padding: '1rem'}}>
                    <img src={withPrefix('HolladayAviationvector.svg')} alt="Holladay Aviation" style={{ width: '175px' }} />
                </div>
                <div style={{ overflow: 'hidden'}}>
                    <ExtLink uri="https://www.holladayaviation.com/" name="Holladay Aviation" />
                </div>
            </div>
            <div style={{ display: 'block', width: '100%', clear: 'both'}}>
                <div style={{ float: 'left', width: '200px', padding: '1rem'}}>
                    <img src={withPrefix('sterling-flight-training-logo-1.png')} alt="Sterling Flight Training" style={{ width: '175px'}} />
                </div>
                <div style={{ overflow: 'hidden'}}>
                    <ExtLink uri="https://sterlingflight.com/" name="Sterling" />
                </div>
            </div>
           
            <div style={{ witdh: '100%', clear: 'both'}}>
                <h3>Banner Towing Advertising</h3>
            </div>
            
            <div style={{ display: 'block', width: '100%', clear: 'both'}}>
                <div style={{ float: 'left', width: '200px', padding: '1rem'}}>
                    <img src={BeachBannerLogo} alt="Beach Banners" style={{ width: '175px' }} />
                </div>
                <div style={{ overflow: 'hidden'}}>
                    <ExtLink uri="https://beachbanners.com" name="Beach Banners" />
                </div>
            </div>

            <div style={{ clear: 'both'}}></div>
        </Article>
        <Footer />
    </Layout>
);
