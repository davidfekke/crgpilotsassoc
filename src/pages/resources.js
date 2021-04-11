import React from "react"
import axios from "axios"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Helmet from "../components/helmet"
import Header from "../components/normalheader"
import Article from "../components/article"
import Footer from "../components/footer"
import ExtLink from "../components/extlink"
import moment from "moment"
import { ToastContainer, toast } from 'react-toastify';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; 
import 'react-toastify/dist/ReactToastify.css';

class Resources extends React.Component {
    constructor() {
        super();
        
        this.state = { 
            currentweather: '',
            altim: '30.03',
            wind_dir: 0,
            wind_speed: 0,
            gust: 0,
            visibility: 0,
            temp: 0,
            dew: 0,
            avwxcolor: 'black',
            sky_condition: {
                sky_cover: '',
                cloud_base_ft_agl: ''
            },
            raw_text: '',
            forecast: [],
            forecast_raw_text: ''
        };

        this.buttonRefresh = this.buttonRefresh.bind(this);
        this.refresh = this.refresh.bind(this);

        toast.configure();
        this.notify = this.notify.bind(this);
    }
    
    componentDidMount() {
        //https://avwxproxy.herokuapp.com/metar/kcrg
        this.refresh();
    }

    notify() {
        toast.success('Weather refreshed!');
    } 

    buttonRefresh(event) {
        console.log('Weather refreshed');
                
        event.preventDefault();
        this.refresh();
    }

    refresh() {
        axios.get('https://avwxproxy.herokuapp.com/metar/kcrg').then(results => {
            let avwxcolor = 'black';
            console.log(results.data);
            switch (results.data[0].flight_category) {
                case 'VFR':
                    avwxcolor = 'green';
                    break;
                case 'MVFR':
                    avwxcolor = 'blue';
                    break;
                case 'IFR':
                    avwxcolor = 'red';
                    break;
                case 'LIFR':
                    avwxcolor = '#ff78cb';
                    break;
                default:
                    avwxcolor = 'black';
            }
            console.log(results.data[0].visibility_statute_mi)
            this.setState({ currentweather: results.data[0].flight_category, 
                altim: results.data[0].altim_in_hg.toFixed(2), 
                wind_dir: results.data[0].wind_dir_degrees,
                wind_speed: results.data[0].wind_speed_kt,
                gust: results.data[0].wind_gust_kt,
                visibility: parseInt(results.data[0].visibility_statute_mi),
                temp: results.data[0].temp_c,
                dew: results.data[0].dewpoint_c,
                sky_condition: results.data[0].sky_condition,
                avwxcolor,
                raw_text: results.data[0].raw_text
            });
            this.notify();
        });

        axios.get('https://avwxproxy.herokuapp.com/taf/kcrg').then(results => {   
            this.setState({ 
                forecast: results.data.TAF[0].forecast,
                forecast_raw_text: results.data.TAF[0].raw_text
            });
        });
    }
    
    render() {
        return (<Layout>
            <Helmet title="Resources" />
            <ToastContainer autoClose={2000} />
            <Navbar />
            <Header headline="Resources" />
            <Article>
                <h1>Resources</h1>

                <p>Here are some great resources available to pilots.</p>
                
                <div style={{ display: 'grid', gridGap: '10px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>
                    
                    <div className="resourceBlock" style={{ gridRow: '1 / 3'}}>
                        <h3>Current Weather</h3>
                        <button style={{ fontSize: '1rem', 
                                                borderRadius: '3px', 
                                                backgroundColor: 'lightblue',
                                                padding: '0.5rem',
                                                marginTop: '1rem' }} 
                                onClick={this.refresh}>Refresh</button><br /><br />
                        Current Weather at KCRG: <span style={{ color: `${this.state.avwxcolor}`, fontWeight: 'bold'}}> {this.state.currentweather}</span><br />
                        Sky Condition: {this.state.sky_condition.sky_cover} {this.state.sky_condition.cloud_base_ft_agl}<br />
                        Altimeter: {this.state.altim}<br />
                        Visibility: {this.state.visibility}<br />
                        Wind Direction: {this.state.wind_dir}<br />
                        Wind Speed: {this.state.wind_speed}<br />
                        Wind Gust: {this.state.gust}<br />
                        Temperature: {this.state.temp} (Celcius)<br />
                        Dewpoint: {this.state.dew} (Celcius)<br />
                        Raw Text: {this.state.raw_text}<br /><br />
                            

                        Forcasted weather at KCRG:<br /><br />
                        {this.state.forecast.map(item => {
                            const from_date = moment(item.fcst_time_from).format('YYYY-MM-DD h:mm a');
                            const to_date = moment(item.fcst_time_to).format('YYYY-MM-DD h:mm a');
                            return (<div key={item.fcst_time_from}>
                                From: {from_date}&nbsp;
                                to: {to_date} <br />
                                {(item.sky_condition && item.sky_condition.cloud_base_ft_agl) && (<div>Sky Condition: {item.sky_condition.sky_cover} {item.sky_condition.cloud_base_ft_agl}</div>)}
                                Wind direction: {item.wind_dir_degrees}<br />
                                Wind speed: {item.wind_speed_kt}<br />
                                Wind gust: {item.wind_gust_kt}<br />
                                Visibility: {parseInt(item.visibility_statute_mi)}<br /> 
                                <br />
                            </div>)
                        })}
                        Raw Text: {this.state.forecast_raw_text}<br /><br />
                    </div>

                    <div className="resourceBlock" >
                        <h3>Weather</h3>
                        <p>
                            <ExtLink uri="https://www.1800wxbrief.com" name="Leidos 1-800-WX-BRIEF" /><br />
                            <ExtLink uri="https://www.aviationweather.gov/" name="Aviation Weather" /><br />
                            <ExtLink uri="http://www.usairnet.com/cgi-bin/launch/code.cgi?Submit=Go&sta=KCRG&state=FL" name="US Airnet" /><br />
                        </p>
                    </div>
                    
                    <div className="resourceBlock" >
                        <h3>Flight Planning</h3>
                            
                        <p>
                            <ExtLink uri="https://www.foreflight.com" name="ForeFlight" /><br />
                            <ExtLink uri="https://www.fltplan.com" name="Flight Plan" /><br />
                            <ExtLink uri="https://www.skyvector.com" name="Sky Vector" /><br />
                            <ExtLink uri="https://www.windy.com" name="Windy" /><br />
                        </p>
                    </div>
                    
                    <div className="resourceBlock">
                        <h3>Parts and Gear</h3>
                        <p>
                            <ExtLink uri="https://www.sportys.com/pilotshop" name="Sporty's Pilot Shop" /><br />
                            <ExtLink uri="https://www.pilotmall.com/" name="Pilot Mall" /><br />
                            <ExtLink uri="https://www.aircraftgeneralsupply.com" name="Aircraft General Supply" /><br />
                            <ExtLink uri="https://www.aircraftspruce.com" name="Aircraft Spruce" /><br />
                        </p>
                    </div>
                    
                    <div className="resourceBlock" >
                        <h3>Social Media</h3>
                        <p>
                        <a href = "https://www.facebook.com/groups/849967972062524/"
                            target = "_blank"
                            rel = "noopener noreferrer"
                            style = {{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}> 
                            <FaFacebook size = { 20 } style = {{ padding: '5px', color: 'black' }} /> Facebook
                        </a> 
                        <a href="https://www.linkedin.com/groups/12242408/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style= {{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center'}}>
                            <FaLinkedin size={ 20 } style={{ padding: '5px', color: 'black' }} /> Linkedin
                        </a>
                        <a href="https://www.instagram.com/capa_flies/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style= {{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
                            <FaInstagram size={ 20 } style={{ padding: '5px', color: 'black' }} /> Instagram
                        </a>
                        </p>
                    </div>
                    
                    

                </div>
                
            </Article>
            <Footer />
        </Layout>)
    }
}

export default Resources;
