import React from "react"
import { Link, navigate } from "gatsby"
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
const testForm = () => (
    <Layout>
        <MainHelmet title="Services" />
        <Navbar />
        <Header headline="Services available at Craig" />
        <Article>
            <h1>Short Field Landing Contest</h1>
            <p><Link to={'terms'}>Privacy Policy</Link></p>
            <p>
                Use this form to volunteer to signup for the Short Field Landing Contest.
            </p>
        </Article>
        <Footer />
    </Layout>
)

export default testForm;


// export default class EAAYoungEagles extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     handleChange = e => {
//         if (e.target.type === 'select-multiple') {
//             const optionArray = e.target.selectedOptions;
//             const valueArray = Object.values(optionArray).map(item => item.value);
//             this.setState({ [e.target.name]: valueArray });
//         } else {
//             this.setState({ [e.target.name]: e.target.value });
//         }
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         const form = e.target;
//         fetch("/", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: encode({
//                 "form-name": form.getAttribute("name"),
//                 ...this.state
//             })
//         }).then(() => navigate(form.getAttribute("action")))
//             .catch(error => alert(error));
//     };

//     render() {
//         return (<Layout>
//             <Helmet title="Short Field Landing Contest Form" />
//             <Navbar />
//             <Header headline="Short Field Landing Contest Form" />
//             <Article>
//                 <h1>Short Field Landing Contest</h1>
//                 <p>
//                     Use this form to volunteer to signup for the Short Field Landing Contest.
//                 </p>
//                 <form 
//                             name="shortfield" 
//                             method="POST" 
//                             action="/landing-contest" 
//                             data-netlify-honeypot="bot-field" 
//                             data-netlify="true"
//                             onSubmit={this.handleSubmit}>
                            
//                             <p hidden>
//                                 <label>Don’t fill this out:{" "}
//                                     <input name="bot-field" onChange={this.handleChange} />
//                                 </label>
//                             </p>

//                             <input type="hidden" name="form-name" value="shortfield" onChange={this.handleChange} />
    
//                             <label htmlFor="firstname">First Name: </label>
//                             <input type="text" name="firstname" onChange={this.handleChange} />
                        
                    
//                             <label  htmlFor="lastname">Last Name: </label>
//                             <input type="text" name="lastname" onChange={this.handleChange} />
                        
                        
//                             <label htmlFor="email">Email: </label>
//                             <input type="text" name="email" onChange={this.handleChange} />
                        
                        
//                             <label htmlFor="phone">Phone: </label>
//                             <input type="text" name="phone" onChange={this.handleChange} />
                            
//                             <label htmlFor="nnumber">N# to be flown</label>
//                             <input type="text" name="nnumber" onChange={this.handleChange} />
                            
//                             <label htmlFor="makeandmodel">Make and Model</label>
//                             <input type="text" name="makeandmodel" onChange={this.handleChange} />
                            
//                             <label htmlFor="certificate">Pilot certificate level</label>
//                             <select name="certificate" onChange={this.handleChange}>
//                                 <option value="Student">Student</option>
//                                 <option value="Private" selected>Private</option>
//                                 <option value="Commercial">Commercial</option>
//                                 <option value="ATP">ATP</option>
//                             </select>
                            
//                             <button type="submit">Send</button>
                            
//                         </form>
//             </Article>
//             <Footer />
//         </Layout>)
//     }
// }

