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
                        
                        
                            <label for="volunteering">I am interested in volunteering to help with the following (choose as many as you like): </label>
                            <select name="volunteering" multiple onChange={this.handleChange} >
                                <option value="Ground Operations / Security">Ground Operations / Security</option>
                                <option value="Pilot Safety Briefing">Pilot Safety Briefing</option>
                                <option value="Young Eagles Orientation">Young Eagles Orientation</option>
                                <option value="Marketing and Promotion">Marketing and Promotion</option>
                                <option value="Line Judge">Line Judge</option> 
                                <option value="Party Set-up and Clean-up">Party Set-up and Clean-up</option>    
                            </select>
                            
                            <p>
                            If you are pilot and are interested in participating in the Short Field Landing Contest:
                            </p>
                            
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
                            
                            <p>If you are a pilot and are interested in flying Young Eagles:</p>
                            <label for="ennumber">N# to be flown</label>
                            <input type="text" name="ennumber" onChange={this.handleChange} />
                            
                            <label for="emakeandmodel">Make and Model</label>
                            <input type="text" name="emakeandmodel" onChange={this.handleChange} />
                            
                            <label for="ecertificate">Pilot certificate level</label>
                            <select name="ecertificate" onChange={this.handleChange}>
                                <option value="Private">Private</option>
                                <option value="Commercial">Commercial</option>
                                <option value="ATP">ATP</option>
                            </select>
                            
                            <label for="eaamembernumber">EAA member #</label>
                            <input type="text" name="eaamembernumber" onChange={this.handleChange} />
                            
                            <label for="eaayoutpolicydate">EAA Youth Protection Policy and Program date completed</label>
                            <input type="text" name="eaayoutpolicydate" onChange={this.handleChange} />
                            
                            <button type="submit">Send</button>
                            
                        </form>
            </Article>
            <Footer />
        </Layout>)
    }
}

