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
            raw_text: '',
            forecast: [],
            forecast_raw_text: ''
        };

        this.buttonRefresh = this.buttonRefresh.bind(this);
        this.refresh = this.refresh.bind(this);
    }
    
    componentDidMount() {
        //https://avwxproxy.herokuapp.com/metar/kcrg
        this.refresh();
    }

    buttonRefresh(event) {
        console.log('Weather refreshed');
        event.preventDefault();
        this.refresh();
    }

    refresh() {
        axios.get('https://avwx.herokuapp.com/metar/kcrg').then(results => {
            let avwxcolor = 'black';
            console.log(results.data.reports[0])
            switch (results.data.reports[0].flight_category) {
                case 'VFR':
                    avwxcolor = 'green';
                    break;
                case 'MVFR':
                    avwxcolor = 'blue';
                    break;
                case 'IFR':
                    avwxcolor = 'red';
                    break;
                default:
                    avwxcolor = 'black';
            }
            this.setState({ currentweather: results.data.reports[0].flight_category, 
                altim: results.data.reports[0].altim_in_hg.toFixed(2), 
                wind_dir: results.data.reports[0].wind_dir_degrees,
                wind_speed: results.data.reports[0].wind_speed_kt,
                gust: results.data.reports[0].wind_gust_kt,
                visibility: results.data.reports[0].visibility_statute_mi,
                temp: results.data.reports[0].temp_c,
                dew: results.data.reports[0].dewpoint_c,
                avwxcolor,
                raw_text: results.data.reports[0].raw_text
            });
        });

        axios.get('http://avwx.herokuapp.com/taf/kcrg').then(results => {   
            this.setState({ 
                forecast: results.data.reports[0].forecast,
                forecast_raw_text: results.data.reports[0].raw_text
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
                    <button style={{ fontSize: '1rem', 
                                            borderRadius: '3px', 
                                            backgroundColor: 'lightblue',
                                            padding: '0.5rem',
                                            marginTop: '1rem' }} 
                            onClick={this.refresh}>Refresh</button><br /><br />
                    Current Weather at KCRG: <span style={{ color: `${this.state.avwxcolor}`, fontWeight: 'bold'}}> {this.state.currentweather}</span><br />
                    Altimeter: {this.state.altim}<br />
                    Wind Direction: {this.state.wind_dir}<br />
                    Wind Speed: {this.state.wind_speed}<br />
                    Wind Gust: {this.state.gust}<br />
                    Temperature: {this.state.temp} (Celcius)<br />
                    Dewpoint: {this.state.dew} (Celcius)<br />
                    Raw Text: {this.state.raw_text}<br /><br />
                    

                Forcasted weather at KCRG:<br /><br />
                {this.state.forecast.map(item => {
                    const from_date = moment(item.fcst_time_from).format('YYYY-MM-DD h:mm:ss a');
                    const to_date = moment(item.fcst_time_to).format('YYYY-MM-DD h:mm:ss a');
                    return (<div key={item.fcst_time_from}>
                        From: {from_date}&nbsp;
                        to: {to_date} <br />
                        Wind direction: {item.wind_dir_degrees}<br />
                        Wind speed: {item.wind_speed_kt}<br />
                        Wind gust: {item.wind_gust_kt}<br />
                        Visibility: {item.visibility_statute_mi}<br /> 
                        Sky Condition: {item.sky_condition.sky_cover} {item.sky_condition.cloud_base_ft_agl}<br /><br />
                    </div>)
                })}
                Raw Text: {this.state.forecast_raw_text}<br /><br />
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
