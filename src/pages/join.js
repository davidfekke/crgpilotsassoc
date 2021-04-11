import React from "react"
import { Link } from "gatsby"
import { navigateTo } from "gatsby-link"
import Layout from "../components/layout"
import Navbar from "../components/navbar.js"
import Header from "../components/normalheader.js"
import Footer from "../components/footer.js"
import Article from "../components/article.js"
import MainHelmet from "../components/helmet.js"

function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}


export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: ''
        };
    }

    checkIfPassedValidation = currState => {
        let retValue = { passed: true, message: '' };
        if (!currState.firstname || currState.firstname.length === 0) {
            retValue.passed = false;
            retValue.message += ' Must include a first name.';
        }
        if (!currState.lastname || currState.lastname.length === 0) {
            retValue.passed = false;
            retValue.message += ' Must include a last name.';
        }
        if (!currState.email || currState.email.length === 0) {
            retValue.passed = false;
            retValue.message += ' Must include an email.';
        }
        return retValue;
    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const result = this.checkIfPassedValidation(this.state);
        console.log(result);
        if (result.passed) {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({
                    "form-name": form.getAttribute("name"),
                    ...this.state
                })
            }).then(() => navigateTo(form.getAttribute("action")))
                .catch(error => alert(error));    
        } else {
            alert(`VALIDATION FAILED: ${result.message}`);
        }
    };

    render() {
        return (
            <Layout>
                <MainHelmet title="Join CAPA" />
                <Navbar />
                <Header headline="Join the Craig Airport and Pilots Association" />
                <Article>
                    <div>
                        <h1>How to Join</h1>
                        <p>
                        Please provide contact information for Craig Airports Pilots Association:</p>
                        
                        <p><Link to={'terms'}>Privacy Policy</Link></p>
                        
                        <p style={{ color: 'red'}}>* Required</p>
    
                        <form 
                            name="join" 
                            method="POST" 
                            action="/joinsuccess/"
                            data-netlify-honeypot="bot-field" 
                            data-netlify="true"
                            onSubmit={this.handleSubmit}>
                            
                            <p hidden>
                                <label>Don’t fill this out:{" "}
                                    <input name="bot-field" onChange={this.handleChange} />
                                </label>
                            </p>

                            <input type="hidden" name="form-name" value="join" onChange={this.handleChange} />
    
                            <label htmlFor="firstname">First Name: <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" name="firstname" onChange={this.handleChange} />
                        
                    
                            <label  htmlFor="lastname">Last Name: <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" name="lastname" onChange={this.handleChange} />
                        
                            <label htmlFor="email">Email: <span style={{ color: 'red' }}>*</span></label>
                            <input type="text" name="email" onChange={this.handleChange} />
                        
                            <label htmlFor="address">Address: </label>
                            <input type="text" name="address" onChange={this.handleChange} />
                            
                            <label htmlFor="phone">Phone: </label>
                            <input type="text" name="phone" onChange={this.handleChange} />
                        
                            <label htmlFor="aircraft">Aircraft Model and Type: </label>
                            <input type="text" name="aircraft" onChange={this.handleChange} />
                            
                            <label htmlFor="hangerlocation">Hanger Location: </label>
                            <input type="text" name="hangerlocation" onChange={this.handleChange} />
                            
                            <label htmlFor="anything">Anything you want to tell Us?: </label>
                            <input type="text" name="anything" onChange={this.handleChange} />
                            
                            <h3 style={{ gridColumn: '1 / 3' }}>You must opt in to at least one communication method</h3>
                            <label htmlFor="optinemail">You may email me information</label>
                            <input type="checkbox" name="optinemail" defaultValue="false" value="true" onChange={this.handleChange} />
                            
                            <label htmlFor="optincall">You may call me</label>
                            <input type="checkbox" name="optincall" defaultValue="false" value="true" onChange={this.handleChange} />
                            
                            <button type="submit">Send</button>
                            
                        </form>
                        
                    </div>
                </Article>
                <Footer />
            </Layout>
        )
    }
    
}
