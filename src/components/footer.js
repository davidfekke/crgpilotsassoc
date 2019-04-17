import React from "react"
import Container from "./container.js"
import { Link } from "gatsby"
import ExtLink from "./extlink"
import { FaFacebook } from 'react-icons/fa'; // FaTwitter, FaLinkedin, FaGithub, FaYoutube
import footerStyles from "./footer.module.css"

export default () => {
    return ( <
        footer style = {
            { backgroundColor: '#868e96', marginTop: '2rem' } } >
        <
        Container >
        <
        div style = {
            { paddingTop: '1rem', paddingBottom: '2rem' } } >
        <
        div style = {
            { textAlign: 'center', height: '3rem', paddingTop: '20px', paddingBottom: '10px', } } >
        <
        a href = "https://www.facebook.com/groups/849967972062524/"
        target = "_blank"
        rel = "noopener noreferrer"
        style = {
            { textDecoration: 'none', color: 'black' } } > < FaFacebook size = { 32 }
        style = {
            { padding: '5px' } }
        /> </a > {
            /* <a href="https://www.linkedin.com/in/david-fekke-1913ba2/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}><FaLinkedin size={32}  style={{ padding: '5px' }} /></a> 
                                    <a href="https://github.com/davidfekke/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}><FaGithub size={32}  style={{ padding: '5px' }} /></a>
                                    <a href="https://www.youtube.com/davidfekke/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}><FaYoutube size={32}  style={{ padding: '5px' }} /></a> */
        } <
        /div> <
        nav className = { footerStyles.gridarea } >
        <
        div >
        <
        ul >
        <
        li >
        <
        strong > Connect < /strong> <
        /li> <
        li >
        <
        Link to = "news" > News < /Link> <
        /li> <
        li >
        <
        a href = "https://www.facebook.com/groups/849967972062524/"
        target = "_blank"
        rel = "noopener noreferrer"
        style = {
            { textDecoration: 'none', color: 'black' } } > Facebook < /a> <
        /li>

        <
        /ul> <
        /div> <
        div >
        <
        ul >
        <
        li >
        <
        strong > Resources < /strong> <
        /li> <
        li >
        <
        ExtLink uri = "https://www.faa.com"
        name = "FAA" / >
        <
        /li> <
        li >
        <
        ExtLink uri = "https://www.1800wxbrief.com/Website/#!/"
        name = "1-800-WX-BRIEF" / >
        <
        /li> <
        li > Test < /li> <
        /ul>                             <
        /div> <
        div >
        <
        ul >
        <
        li >
        <
        strong > Sites < /strong> <
        /li> <
        li >
        <
        ExtLink uri = "http://www.flyjacksonville.com/Home.aspx?sMP=JAA"
        name = "Jax Aviation Authority" / >
        <
        /li> <
        li >
        <
        ExtLink uri = "http://www.flyjacksonville.com/Home.aspx?sMP=JAXEX"
        name = "JAXEX" / >
        <
        /li> <
        /ul> <
        /div> <
        div >
        <
        ul >
        <
        li >
        <
        strong > Pages < /strong> <
        /li> <
        li >
        <
        Link to = { `about` } > About < /Link> <
        /li> <
        li >
        <
        Link to = { `terms` } > Terms and Conditions < /Link> <
        /li> <
        /ul> <
        /div>     <
        /nav> <
        div style = {
            { textAlign: 'center', fontSize: 'small', paddingTop: '1rem' } } >
        <
        p style = {
            { fontWeight: '600' } } > Copyright 2019, Craig Airport Pilots Association < /p> <
        /div> <
        /div> <
        /Container> <
        /footer>
    )
}