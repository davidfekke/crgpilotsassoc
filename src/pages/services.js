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
            
            <div style={{ display: 'grid', gridGap: '10px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
                <div style={{ display: 'inline-block', textAlign: 'center', borderRadius: '3px', padding: '1rem', backgroundColor: '#f7f7f7', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, .3)', marginBottom: '1rem'}}>
                    
                    <div style={{ padding: '1rem'}}>
                        <img src={withPrefix(`SkyHarbor-logo-236x64.png`)} alt="ATP" style={{ width: '175px' }} />
                    </div>
                    <div style={{ fontSize: '2rem' }}>
                        <ExtLink uri="http://skyharboraviation.com/" name="Sky Harbor" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} />
                    </div>
                    
                </div>

                <div style={{ display: 'inline-block',  textAlign: 'center', borderRadius: '3px', padding: '1rem', backgroundColor: '#f7f7f7', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, .3)', marginBottom: '1rem'}}>
                    <div style={{ padding: '1rem'}}>
                        <img src={withPrefix(`gold.gif`)} alt="ATP" style={{ width: '175px' }} />
                    </div>
                    <div style={{ fontSize: '2rem' }}>
                        <ExtLink uri="https://www.craigaircenter.com/" name="Craig Air Center" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} />
                    </div>
                </div>
            </div>

            <div style={{ witdh: '100%', clear: 'both'}}>
                <h3>Flight Training</h3>
            </div>
            
            <div style={{display: 'grid', gridGap: '10px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
                <div style={{ display: 'block', textAlign: 'center', borderRadius: '3px', padding: '1rem', backgroundColor: '#f7f7f7', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, .3)', marginBottom: '1rem'}}>
                    <div style={{ padding: '1rem'}}>
                        <img src={withPrefix(`atp.logo.svg`)} alt="ATP" style={{ width: '175px' }} />
                    </div>
                    <div style={{ fontSize: '2rem' }}>
                        <ExtLink uri="https://atpflightschool.com/" name="ATP" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} />
                    </div>
                </div>
                <div style={{ display: 'block', textAlign: 'center', borderRadius: '3px', padding: '1rem', backgroundColor: '#f7f7f7', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, .3)', marginBottom: '1rem'}}>
                    <div style={{ padding: '1rem'}}>
                        <img src={withPrefix('HolladayAviationvector.svg')} alt="Holladay Aviation" style={{ width: '175px' }} />
                    </div>
                    <div style={{ fontSize: '2rem' }}>
                        <ExtLink uri="https://www.holladayaviation.com/" name="Holladay Aviation" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} />
                    </div>
                </div>
                <div  style={{ display: 'block', textAlign: 'center', borderRadius: '3px', padding: '1rem', backgroundColor: '#f7f7f7', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, .3)', marginBottom: '1rem'}}>
                    <div style={{ padding: '1rem'}}>
                        <img src={withPrefix('sterling-flight-training-logo-1.png')} alt="Sterling Flight Training" style={{ width: '175px'}} />
                    </div>
                    <div style={{ fontSize: '2rem' }}>
                        <ExtLink uri="https://sterlingflight.com/" name="Sterling" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} />
                    </div>
                </div>
            </div>
           
            <div style={{ witdh: '100%', clear: 'both'}}>
                <h3>Banner Towing Advertising</h3>
            </div>
            
            <div style={{ display: 'block', textAlign: 'center', borderRadius: '3px', padding: '1rem', backgroundColor: '#f7f7f7', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, .3)', marginBottom: '1rem'}}>
                <div style={{ padding: '1rem'}}>
                    <img src={BeachBannerLogo} alt="Beach Banners" style={{ width: '175px' }} />
                </div>
                <div style={{ fontSize: '2rem' }}>
                    <ExtLink uri="https://beachbanners.com" name="Beach Banners" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }} />
                </div>
            </div>

            <div style={{ clear: 'both'}}></div>
        </Article>
        <Footer />
    </Layout>
);
