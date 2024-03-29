import React from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import Navbar from "../components/navbar.js"
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Article from "../components/article.js"
import MainHelmet from "../components/helmet.js"
// import Img from "gatsby-image"

export default class BlogList extends React.Component {
  joinAction() {
    navigate('join');
  }

  shortFieldSignUp() {
    navigate('shortfieldform');
  }
  
  eaaSignUp() {
    navigate('youngeaglesform');
  }
  
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? '/' : `/news/${(currentPage - 1).toString()}`;
    const nextPage = `/news/${(currentPage + 1).toString()}`;

    return (
      <Layout>
        <MainHelmet title="Craig Airport Pilots Association" />
        <Navbar />
        <Header />
        <Article>
        
          <div style={{ borderRadius: '3px', padding: '1rem', backgroundColor: '#f7f7f7', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, .3)', marginBottom: '1rem' }}>
            <h1 style={{ fontSize: '3rem'}}>Craig Airport Pilots Association Goals</h1>
              <ul>
                <li>Build a community of people interested in Craig Airport and Flying</li>
                <li>Share information about Airport operations, Social events and Flying in General</li>  
              </ul>
              <button className="cool" onClick={this.joinAction}>Click here to Join!</button>
          </div>

          {/* <div style={{ borderRadius: '3px', padding: '.5rem', backgroundColor: '#e3f0ff', boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, .3)', marginBottom: '1rem' }}>
            <h1 style={{ fontSize: '2rem'}}>Short Field Landing Competition</h1>
            <button className="cool" onClick={this.shortFieldSignUp}>Click here to Enter Short Field Landing Competition!</button>
          
            <h1 style={{ fontSize: '2rem'}}>Short Field Landing Competition and EAA Young Eagles</h1>
            <button className="cool" onClick={this.eaaSignUp}>Click here to volunteer!</button>
          </div> */}

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
                    {HeaderImage && <img src={HeaderImage} style={{ width: '100%'}} alt="Feature" />}
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