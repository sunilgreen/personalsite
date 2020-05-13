import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import PDC from '../assets/pdc.png'
import SOON from '../assets/comingsoon.png'
import GOPEER from '../assets/gopeer.png'
import './Styles/MyWork.css'

export default function MyWork({id}) {
    return (
        <Container id={id} fluid>
            <br/>
            <h3 className="title">My Work</h3>
            <Row>
            <Col id="coursework" sm={3}>
                <h3 className="subtitle">Coursework</h3>    
                <ul id="courseworklist">
                    <li>CS 180 Object Oriented Programming</li>  
                    <li>CS 182 Principles of Computer Science</li>
                    <li>CS 240 Programming in C</li>  
                    <li>CS 250 Computer Architecture</li>
                    <li>CS 251 Data Structures And Algorithms</li>
                    <li>CS 252 Systems Programming</li>
                    <li>CS 307 Software Engineering</li>
                </ul>        
            </Col>

            <Col id="outsideclass">
                <h3 className="subtitle">Outside the Classroom</h3>    
                <img id="pdcimage" src={PDC}></img> 
                <h4>Purdue PDC</h4>
                <p className="bodytext">I am the current President
                    and one of the founding members of The Political Discourse Club.
                    It's an organization that helps students on campus talk about politics
                    civily. We also work on publishing student created media through our website <a  href="https://purduepdc.org">purduepdc.org.  </a> 
                    Check out the site to see our student created articles, cartoons, and podcast.
                </p>
                <br/>
                <br/>

                <img id="gopeerimage" src={GOPEER}></img>
                <h4 className="sectiontitle">GoPeer</h4>
                <p className="bodytext">I tutor online through a service called GoPeer. I can tutor a wide 
                                        range of subjects including Math through Calculus II, A.P. U.S. History, A.P. World History
                                        and basic Spanish. You can find my profile for the service <a href="https://gopeer.org/profile/5baa72773354c231625738db?referrer=1WXIVl">here.</a>
                </p>


                       
            </Col>

            <Col id="personalprojects" sm={3}>
                <h3 className="subtitle">Personal Projects</h3>
                <img id="comingsoon" src={SOON}></img> 
                
            </Col>
                
            </Row>
            
        </Container>
    )
}
