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
        if (e.target.type === 'select-multiple') {
            const optionArray = e.target.selectedOptions;
            const valueArray = Object.values(optionArray).map(item => item.value);
            this.setState({ [e.target.name]: valueArray });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
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
            <Helmet title="Short Field Landing Contest Form" />
            <Navbar />
            <Header headline="Short Field Landing Contest Form" />
            <Article>
                <h1>Short Field Landing Contest</h1>
                <p>
                    Use this form to volunteer to signup for the Short Field Landing Contest.
                </p>
                <form 
                            name="shortfield" 
                            method="POST" 
                            action="/landing-contest" 
                            data-netlify-honeypot="bot-field" 
                            data-netlify="true"
                            onSubmit={this.handleSubmit}>
                            
                            <p hidden>
                                <label>Don’t fill this out:{" "}
                                    <input name="bot-field" onChange={this.handleChange} />
                                </label>
                            </p>

                            <input type="hidden" name="form-name" value="shortfield" onChange={this.handleChange} />
    
                            <label for="firstname">First Name: </label>
                            <input type="text" name="firstname" onChange={this.handleChange} />
                        
                    
                            <label  for="lastname">Last Name: </label>
                            <input type="text" name="lastname" onChange={this.handleChange} />
                        
                        
                            <label for="email">Email: </label>
                            <input type="text" name="email" onChange={this.handleChange} />
                        
                        
                            <label for="phone">Phone: </label>
                            <input type="text" name="phone" onChange={this.handleChange} />
                            
                            <label for="nnumber">N# to be flown</label>
                            <input type="text" name="nnumber" onChange={this.handleChange} />
                            
                            <label for="makeandmodel">Make and Model</label>
                            <input type="text" name="makeandmodel" onChange={this.handleChange} />
                            
                            <label for="certificate">Pilot certificate level</label>
                            <select name="certificate" onChange={this.handleChange}>
                                <option value="Private">Private</option>
                                <option value="Commercial">Commercial</option>
                                <option value="ATP">ATP</option>
                            </select>
                            
                            <button type="submit">Send</button>
                            
                        </form>
            </Article>
            <Footer />
        </Layout>)
    }
}

