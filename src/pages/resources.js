import React from "react"
import axios from "axios"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Helmet from "../components/helmet"
import Header from "../components/normalheader"
import Article from "../components/article"
import Footer from "../components/footer"
import ExtLink from "../components/extlink"

class Resources extends React.Component {
    constructor() {
        super();
        
        this.state = { currentweather: '',
            altim: '30.03',
            wind_dir: 0,
            wind_speed: 0,
            gust: 0,
            visibility: 0,
            temp: 0,
            dew: 0};
    }
    
    componentDidMount() {
        //https://avwxproxy.herokuapp.com/metar/kcrg
        axios.get('https://avwxproxy.herokuapp.com/metar/kcrg', { headers: {
            'Access-Control-Allow-Origin': '*',
          }}).then(results => {
            this.setState({ currentweather: results.data[0].flight_category, 
                altim: results.data[0].altim_in_hg, 
                wind_dir: results.data[0].wind_dir_degrees,
                wind_speed: results.data[0].wind_speed_kt,
                gust: results.data[0].wind_gust_kt,
                visibility: results.data[0].visibility_statute_mi,
                temp: results.data[0].temp_c,
                dew: results.data[0].dewpoint_c
            });
        });
        
    }
    
    render() {
        return (<Layout>
            <Helmet title="Resources" />
            <Navbar />
            <Header headline="Resources" />
            <Article>
                <h1>Resources</h1>
                <p>Here are some great resources available to pilots.</p>
                <h3>Weather</h3>
                    Current Weather at KCRG: {this.state.currentweather}<br />
                    Altimeter: {this.state.altim}<br />
                    Wind Direction: {this.state.wind_dir}<br />
                    Wind Speed: {this.state.wind_speed}<br />
                    Wind Gust: {this.state.gust}<br />
                    Temperature: {this.state.temp} (Celcius)<br />
                    Dewpoint: {this.state.dew} (Celcius)<br />
                    
                    <p>
                        <ExtLink uri="https://www.1800wxbrief.com" name="Leidos 1-800-WX-BRIEF" /><br />
                        <ExtLink uri="https://www.aviationweather.gov/" name="Aviation Weather" /><br />
                    </p>
                    
                <h3>Flight Planning</h3>
                    
                <p>
                    <ExtLink uri="https://www.foreflight.com" name="ForeFlight" /><br />
                    <ExtLink uri="https://www.fltplan.com" name="Flight Plan" /><br />
                    <ExtLink uri="https://www.skyvector.com" name="Sky Vector" /><br />
                </p>
                
                <h3>Gear</h3>
                <p>
                    <ExtLink uri="https://www.sportys.com/pilotshop" name="Sporty's Pilot Shop" />
                </p>
                
                <h3>Parts</h3>
                <p>
                <ExtLink uri="https://www.aircraftgeneralsupply.com" name="Aircraft General Supply" /><br />
                <ExtLink uri="https://www.aircraftspruce.com" name="Aircraft Spruce" /><br />
                </p>
                
                
            </Article>
            <Footer />
        </Layout>)
    }
}

export default Resources;

// export default () => (
//     <Layout>
//         <Helmet title="Resources" />
//         <Navbar />
//         <Header headline="Resources" />
//         <Article>
//             <h1>Resources</h1>
//             <p>Here are some great resources available to pilots.</p>
//             <h3>Weather</h3>
//                 Current Weather at KCRG: 
//             <h3>Gear</h3>
            
//             <h3>Parts</h3>
            
            
//         </Article>
//         <Footer />
//     </Layout>
// );

