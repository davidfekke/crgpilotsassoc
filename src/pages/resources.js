import React, { useEffect, useState } from "react"
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
import { FaFacebook, FaLinkedin, FaInstagram, FaGalacticRepublic } from 'react-icons/fa'; 
import 'react-toastify/dist/ReactToastify.css';

const ResourcesComponent = () => {
    const defaultWeather = {
        currentweather: '',
        altim: '30.03',
        wind_dir: 0,
        wind_speed: 0,
        gust: 0,
        visibility: 0,
        temp: 0,
        dew: 0,
        avwxcolor: 'black',
        sky_condition: [],
        raw_text: '',
        forecast: [],
        forecast_raw_text: ''
    };

    const [weather, setWeather] = useState(defaultWeather);

    const notify = () => {
        toast.success('Weather refreshed!');
    } 
    
    const refresh = () => {
        axios.get('https://avwx.fekke.com/metar/kcrg').then(results => {
            let avwxcolor = 'black';
            //console.log(results.data[0]);
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
            const current_weather = results.data[0];
            let current_sky_condition = [];
            if (current_weather.sky_condition instanceof Array) {
                current_sky_condition = current_weather.sky_condition;
            } else {
                current_sky_condition.push(current_weather.sky_condition);
            }
            setWeather({ currentweather: results.data[0].flight_category, 
                altim: parseFloat(results.data[0].altim_in_hg).toFixed(2), 
                wind_dir: results.data[0].wind_dir_degrees,
                wind_speed: results.data[0].wind_speed_kt,
                gust: results.data[0].wind_gust_kt,
                visibility: parseInt(results.data[0].visibility_statute_mi),
                temp: results.data[0].temp_c,
                dew: results.data[0].dewpoint_c,
                sky_condition: current_sky_condition,
                avwxcolor,
                raw_text: results.data[0].raw_text
            });
            notify();
        });
    
        axios.get('https://avwx.fekke.com/taf/kcrg').then(results => {   
            setWeather({ 
                forecast: results.data[0].forecast,
                forecast_raw_text: results.data[0].raw_text
            });
        });
    }

    useEffect(() => {
        refresh();
    }, []);

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
                            onClick={refresh}>Refresh</button><br /><br />
                    <strong>Current Weather at KCRG:</strong> <span style={{ color: `${weather.avwxcolor}`, fontWeight: 'bold'}}> {weather.currentweather}</span><br />
                    <strong>Sky Condition: </strong>
                        <ul>{weather.sky_condition && weather.sky_condition.map(cond => {
                                return (<li key={cond.cloud_base_ft_agl}>{cond.sky_cover} {cond.cloud_base_ft_agl}</li>) 
                            })}
                        </ul>
                    <strong>Altimeter:</strong> {weather.altim}<br />
                    <strong>Visibility:</strong> {weather.visibility}<br />
                    <strong>Wind Direction:</strong> {weather.wind_dir}<br />
                    <strong>Wind Speed:</strong> {weather.wind_speed}<br />
                    <strong>Wind Gust:</strong> {weather.gust}<br />
                    <strong>Temperature:</strong> {weather.temp} (Celcius)<br />
                    <strong>Dewpoint:</strong> {weather.dew} (Celcius)<br />
                    <strong>Raw Text:</strong> {weather.raw_text}<br /><br />
                        

                    <strong>Forcasted weather at KCRG:</strong><br /><br />
                    {weather.forecast.map(item => {
                        const from_date = moment(item.fcst_time_from).format('YYYY-MM-DD h:mm a');
                        const to_date = moment(item.fcst_time_to).format('YYYY-MM-DD h:mm a');
                        return (<div key={item.fcst_time_from}>
                            <strong>From:</strong> {from_date}&nbsp;
                            <strong>to:</strong> {to_date} <br />
                            <strong>Sky Conditions: </strong>
                            <ul>
                                {(item.sky_condition && item.sky_condition.map(cond => <li key={cond.cloud_base_ft_agl}>{cond.sky_cover} {cond.cloud_base_ft_agl}</li>))}
                            </ul>
                            <strong>Wind direction:</strong> {item.wind_dir_degrees}<br />
                            <strong>Wind speed:</strong> {item.wind_speed_kt}<br />
                            {item.wind_gust_kt && <><strong>Wind gust:</strong> {item.wind_gust_kt}<br /></> }
                            <strong>Visibility:</strong> {parseInt(item.visibility_statute_mi)}<br /> 
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
                    <a href="craigpilots.locals.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style= {{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
                            <FaGalacticRepublic size={ 20 } style={{ padding: '5px', color: 'black' }} /> Craig Pilots Locals
                        </a>
                    </p>
                </div>
                
                

            </div>
            
        </Article>
        <Footer />
    </Layout>);   
}

export default ResourcesComponent;
