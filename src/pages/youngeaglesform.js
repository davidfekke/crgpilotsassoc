import React from "react"
import { navigateTo } from "gatsby-link"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Helmet from "../components/helmet"
import Header from "../components/normalheader"
import Article from "../components/article"
import Footer from "../components/footer"

function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class EAAYoungEagles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        }).then(() => navigateTo(form.getAttribute("action")))
            .catch(error => alert(error));
    };

    render() {
        return (<Layout>
            <Helmet title="EAA Young Eagles" />
            <Navbar />
            <Header headline="EAA Young Eagles" />
            <Article>
                <h1>EAA Young Eagles</h1>
                <p>
                    Use this form to volunteer for the EAA Young Eagles.
                </p>
                <form 
                            name="eaayoungeagles" 
                            method="POST" 
                            action="/" 
                            data-netlify-honeypot="bot-field" 
                            data-netlify="true"
                            onSubmit={this.handleSubmit}>
                            
                            <p hidden>
                                <label>Don’t fill this out:{" "}
                                    <input name="bot-field" onChange={this.handleChange} />
                                </label>
                            </p>

                            <input type="hidden" name="form-name" value="eaayoungeagles" onChange={this.handleChange} />
    
                            <label for="firstname">First Name: </label>
                            <input type="text" name="firstname" onChange={this.handleChange} />
                        
                    
                            <label  for="lastname">Last Name: </label>
                            <input type="text" name="lastname" onChange={this.handleChange} />
                        
                        
                            <label for="email">Email: </label>
                            <input type="text" name="email" onChange={this.handleChange} />
                        
                        
                            <label for="phone">Phone: </label>
                            <input type="text" name="phone" onChange={this.handleChange} />
                        
                        
                            <label for="message">Message: </label>
                            <textarea rows="7" name="message" onChange={this.handleChange}></textarea>
                            
                            <button type="submit">Send</button>
                            
                        </form>
            </Article>
            <Footer />
        </Layout>)
    }
}

