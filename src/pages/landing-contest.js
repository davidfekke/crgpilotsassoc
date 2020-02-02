import React from "react"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Helmet from "../components/helmet"
import Header from "../components/normalheader"
import Article from "../components/article"
import Footer from "../components/footer"

export default () => (
    <Layout>
        <Helmet title="Landing Contest" />
        <Navbar />
        <Header headline="About the Craig Airport Landing Contest" />
        <Article>
            <h1>2019 Short Field Landing Contest and EAA Young Eagles Rally</h1>
            {/* <img src={withPrefix('capa-group-photo-2019.jpg')} alt="Craig Pilots Group Photo" style={{ width: 'auto' }} /> */}
            <h2>
                Sponsored by: CAPA, EAA Chapter 193, First Coast 99s, Civil Air Patrol
            </h2>
            <p>
                <strong>Date:</strong> 		Saturday November 16, 2019<br />

                <strong>Time:</strong>		10 a.m. until 3 p.m.<br />
                
                <strong>Location:</strong> 	KCRG<br />                        
            </p>




<table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid black" }}>
    <tbody >
        <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td>8:30 a.m.</td>
            <td>Safety Briefing for Contest Pilots</td>
            <td>Holladay Aviation classroom</td>
        </tr>
        <tr style={{ borderBottom: "1px solid #ddd" }}>
        <td>9:00 a.m.</td>		<td>Safety Briefing for YE Pilots</td>			<td>Holladay Aviation classroom</td>
        </tr>
        <tr style={{ borderBottom: "1px solid #ddd" }}>
        <td>10:00 a.m.</td>	<td>Young Eagles Flights</td> 				<td>Tower Ramp</td>        
        </tr>
        <tr style={{ borderBottom: "1px solid #ddd" }}>
        <td>10:00 a.m.</td>	<td>Landing Contest</td>					<td>Tower Ramp</td>        
        </tr>
        <tr style={{ borderBottom: "1px solid #ddd" }}>
        <td>11 a.m.</td>		<td>99s/EAA Lunch Table Opens</td> 			<td>Tower Pavilion</td>        
        </tr>
        <tr style={{ borderBottom: "1px solid #ddd" }}>
        <td>3 p.m.</td>		<td colSpan="2">Flight Activities Terminate</td>        
        </tr>
        <tr>
        <td>3:30 p.m.</td>		<td>Awards Ceremony</td>					<td>Holladay Aviation classroom</td>        
        </tr>
    </tbody>
</table>

<h3>Landing Contest Rules:</h3>

<ul>
    <li>
    Based on guidelines for short field approach and landing in FAA Private Pilot ACS:
    </li>
    
        <ul>
            <li>
            Touch down at a proper pitch attitude, within 200 feet beyond or on the specified point, threshold markings or runway numbers, with no side drift, minimum float, and with the airplane’s longitudinal axis aligned with and over runway centerline.
            </li>
            <li>
            Execute a timely go-around if the approach cannot be made within the tolerances specified above or for any other condition that may result in an unsafe approach or landing.
            </li>
        </ul>
    
    <li>
    Scoring will be based on where the main wheels touch without bouncing.
    </li>
    <li>
    Each pilot gets 3 landing attempts.
    </li>
    <li>
    Go-arounds count as an attempt and will be scored.
    </li>
    <li>
    The pilot is expected to make 2 touch and go’s then a full stop, to expedite the flow of traffic. If the first or second attempt results in a full stop, the pilot’s turn is over.
    </li>
    <li>
    Style points (maximum 5 total additional points) may be awarded to a pilot for incorporating any of the following techniques into his or her approaches: forward slip to a landing, power off approach, crosswind landing, 3-point landing (for pilots flying tailwheel aircraft). These points may be used for deciding the winner in the event of a tie.    
    </li>
</ul>

<h3>Eligibility:</h3>

<ul>
    <li>
    Pilots must possess a valid US Private Pilot Certificate and 3rd Class Medical, or higher
    </li>
    <li>
    Student Pilots 18 years or older may participate with CFI approval (CFI must also attend safety briefing)
    </li>
    <li>
    Scoring of each landing attempt:
    </li>
</ul>

 



<p>
Touchdown on the numbers (60’) = 5 points<br />

Touchdown on the first runway centerline stripe (200’) = 4 points<br />

Touchdown on the second runway centerline stripe (400’) = 3 points<br />

Touchdown short or long = 0 points<br />

Go around = 1 point<br />

Bounces = 0 points<br />
</p>






<h3>Landing Contest Entrance Fees and Prizes</h3>

<ul>
    <li>
    <strong>$20/pilot entrance fee per pilot:</strong>
    </li>
    
        <ul>
            <li>
                Each participating pilot receives a free CAPA t-shirt
            </li>
            <li>
                Winner receives a $100 gift certificate for Aircraft General Supply
            </li>
        </ul>
    
    <li>
    Proceeds will help fund Young Eagles raffle prizes (value $200)
    </li>
    <li>
    Honorable mention certificates for non-participating arrivals
    </li>
    <li>
    Post-contest volunteer party and awards ceremony sponsored by Holladay Aviation
    </li>
</ul>
        </Article>
        <Footer />
    </Layout>
);
