import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from "../components/helmet"
import Navbar from "../components/navbar"
import Header from "../components/normalheader"
import Article from "../components/article"
import Footer from "../components/footer"
import Img from "gatsby-image"

export default class NewsPost extends React.Component {
    render() {
        const data = this.props.data
        const {
            prev,
            next
        } = this.props.pageContext
        const post = data.page
        let HeaderImage;
        if (post.frontmatter.cover_image !== undefined && 
            post.frontmatter.cover_image !== null && 
            post.frontmatter.cover_image.childImageSharp !== undefined && 
            post.frontmatter.cover_image.childImageSharp !== null) {
            HeaderImage = post.frontmatter.cover_image.childImageSharp.fluid;
        }

        //const url = `https://fek.io/blog${post.fields.slug}`;
        //const title = post.frontmatter.title;

        return (<Layout>
            <Helmet title={post.frontmatter.title} />
            <Navbar />
            <Header headline={ post.frontmatter.title }/>{" "} 
                <Article> {" "} 
                { post.frontmatter.date} {" "} <br />
                {HeaderImage && <Img fluid={post.frontmatter.cover_image.childImageSharp.fluid} alt="Feature" />}
                {/* // {HeaderImage && <Img fluid={HeaderImage} alt="Feature" />} */}
                <div dangerouslySetInnerHTML={{ __html: post.html }}/>{" "} 
                {prev && (<Link to={`/news${prev.fields.slug}`} > ←Previous Page </Link>)} 
                {" "} 
                {next && <span> &nbsp; </span>}{" "} 
                {next && <Link to={`/news${next.fields.slug}`}> Next Page→ </Link>}{" "} 
                </Article> {" "} 
                <Footer />
            </Layout>)
        }
    }
                    
    export const query = graphql `
        query($slug: String!) {
            page: markdownRemark(fields: {slug: {eq: $slug } }) {
                html
                frontmatter {
                    title
                    date(formatString: "MMMM Do, YYYY")
                    cover_image {
                        childImageSharp {
                            fluid(maxWidth: 1160, quality: 75) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
                fields {
                    slug
                }
            }
        }
`