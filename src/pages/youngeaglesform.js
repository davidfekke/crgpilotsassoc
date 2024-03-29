import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import MainHelmet from "../components/helmet"
import Header from "../components/normalheader"
import Article from "../components/article"
import Footer from "../components/footer"

function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}



class EAAYoungEagles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        if (e.target.type === 'select-multiple') {
            const optionArray = e.target.selectedOptions;
            const valueArray = Object.values(optionArray).map(item => item.value);
            this.setState({ [e.target.name]: valueArray });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        }).then(() => navigate(form.getAttribute("action")))
            .catch(error => alert(error));
    };

    render() {
        return (<Layout>
            <MainHelmet title="EAA Young Eagles" />
            <Navbar />
            <Header headline="Volunteer for EAA Young Eagles" />
            <Article>
                <h1>EAA Young Eagles Rally and Short Field Landing Contest</h1>
                {/* <p><Link to={'terms'}>Privacy Policy</Link></p> */}
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
    
                            <label htmlFor="firstname">First Name: </label>
                            <input type="text" name="firstname" onChange={this.handleChange} />
                        
                    
                            <label  htmlFor="lastname">Last Name: </label>
                            <input type="text" name="lastname" onChange={this.handleChange} />
                        
                        
                            <label htmlFor="email">Email: </label>
                            <input type="text" name="email" onChange={this.handleChange} />
                        
                        
                            <label htmlFor="phone">Phone: </label>
                            <input type="text" name="phone" onChange={this.handleChange} />
                        
                        
                            <label htmlFor="volunteering">I am interested in volunteering to help with the following (choose as many as you like): </label>
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
                            
                            <label htmlFor="nnumber">N# to be flown</label>
                            <input type="text" name="nnumber" onChange={this.handleChange} />
                            
                            <label htmlFor="makeandmodel">Make and Model</label>
                            <input type="text" name="makeandmodel" onChange={this.handleChange} />
                            
                            <label htmlFor="certificate">Pilot certificate level</label>
                            <select name="certificate" onChange={this.handleChange}>
                                <option value="Private">Private</option>
                                <option value="Commercial">Commercial</option>
                                <option value="ATP">ATP</option>
                            </select>
                            
                            <p>If you are a pilot and are interested in flying Young Eagles:</p>
                            <label htmlFor="ennumber">N# to be flown</label>
                            <input type="text" name="ennumber" onChange={this.handleChange} />
                            
                            <label htmlFor="emakeandmodel">Make and Model</label>
                            <input type="text" name="emakeandmodel" onChange={this.handleChange} />
                            
                            <label htmlFor="ecertificate">Pilot certificate level</label>
                            <select name="ecertificate" onChange={this.handleChange}>
                                <option value="Private">Private</option>
                                <option value="Commercial">Commercial</option>
                                <option value="ATP">ATP</option>
                            </select>
                            
                            <label htmlFor="eaamembernumber">EAA member #</label>
                            <input type="text" name="eaamembernumber" onChange={this.handleChange} />
                            
                            <label htmlFor="eaayoutpolicydate">EAA Youth Protection Policy and Program date completed</label>
                            <input type="text" name="eaayoutpolicydate" onChange={this.handleChange} />
                            
                            <button type="submit">Send</button>
                            
                        </form>
            </Article>
            <Footer />
        </Layout>)
    }
}

export default EAAYoungEagles
