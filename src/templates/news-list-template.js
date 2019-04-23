import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Navbar from "../components/navbar.js"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Article from "../components/article.js"
import MainHelmet from "../components/helmet.js"

export default class BlogList extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '/' : `/news/${(currentPage - 1).toString()}`;
    const nextPage = `/news/${(currentPage + 1).toString()}`;

    return (
      <Layout>
        <MainHelmet />
        <Navbar />
        <Header />
        <Article>
          <div>
            <h1 style={{ fontSize: '3rem'}}>Craig Airport Pilots Association Goals</h1>
              <ul>
                <li>Build a community of people interested in Craig Airport and Flying</li>
                <li>Share information about Airport operations, Social events and Flying in General</li>  
              </ul>
          </div>
          <div>
            <h1><Link to="join" style={{ textDecoration: 'none', color: 'blue' }}>Click here to sign up!</Link></h1>
          </div>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            let HeaderImage;
            if (node.frontmatter.cover_image !== undefined && node.frontmatter.cover_image !== null && node.frontmatter.cover_image.publicURL !== undefined && node.frontmatter.cover_image.publicURL !== null) {
                HeaderImage = node.frontmatter.cover_image.publicURL;
            }
            return (<div key={node.fields.slug}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        <Link to={`news${node.fields.slug}`} style={{ textDecoration: 'none', color: 'black' }}>{title}</Link>
                    </div>
                    {HeaderImage && <img src={HeaderImage} alt="Feature" />}
                    <div dangerouslySetInnerHTML={{ __html: node.html}} />
                </div>)
          })}
          <div style={{ margin: '0px 0px 30px 0px'}}>
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
            {!isFirst && !isLast && <span>&nbsp;</span>}
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </div>
        </Article>
        <Footer />
      </Layout>
    )
  }
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            cover_image {
              publicURL
            }
          }
          html
          excerpt
          timeToRead
        }
      }
    }
  }
`