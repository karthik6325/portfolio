import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-animated-progress-bar';
import './skill.css'

const skill = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className='skill' id='skill'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>Some of my skills are</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className='item'>
                                    <ProgressBar width="230" trackWidth="13" percentage="78" fontColor="white" defColor={{
                                        fair: 'yellow',
                                        good: 'yellow',
                                        excellent: 'yellow',
                                        poor: 'yellow',
                                    }} />
                                    <h4>C/C++</h4>
                                </div>
                                <div className='item'>
                                <ProgressBar className='progress' width="230" trackWidth="13" percentage="60" fontColor="white" defColor={{
                                        fair: 'yellow',
                                        good: 'yellow',
                                        excellent: 'yellow',
                                        poor: 'yellow',
                                    }} />
                                    <h4>MySQL</h4>
                                </div>
                                <div className='item'>
                                <ProgressBar className='progress' width="230" trackWidth="13" percentage="70" fontColor="white" defColor={{
                                        fair: 'yellow',
                                        good: 'yellow',
                                        excellent: 'yellow',
                                        poor: 'yellow',
                                    }} />
                                    <h4>HTML</h4>
                                </div>
                                <div className='item'>
                                <ProgressBar className='progress' width="230" trackWidth="13" percentage="70" fontColor="white" defColor={{
                                        fair: 'yellow',
                                        good: 'yellow',
                                        excellent: 'yellow',
                                        poor: 'yellow',
                                    }} />
                                    <h4>CSS</h4>
                                </div>
                                <div className='item'>
                                <ProgressBar className='progress' width="230" trackWidth="13" percentage="60" fontColor="white" defColor={{
                                        fair: 'yellow',
                                        good: 'yellow',
                                        excellent: 'yellow',
                                        poor: 'yellow',
                                    }} />
                                    <h4>Javascript</h4>
                                </div>
                                <div className='item'>
                                <ProgressBar className='progress' width="230" trackWidth="13" percentage="55" fontColor="white" defColor={{
                                        fair: 'yellow',
                                        good: 'yellow',
                                        excellent: 'yellow',
                                        poor: 'yellow',
                                    }} />
                                    <h4>React.js</h4>
                                </div>
                                <div className='item'>
                                <ProgressBar className='progress' width="230" trackWidth="13" percentage="55" fontColor="white" defColor={{
                                        fair: 'yellow',
                                        good: 'yellow',
                                        excellent: 'yellow',
                                        poor: 'yellow',
                                    }} />
                                    <h4>MongoDB</h4>
                                </div>
                                <div className='item'>
                                <ProgressBar className='progress' width="230" trackWidth="13" percentage="60" fontColor="white" defColor={{
                                        fair: 'yellow',
                                        good: 'yellow',
                                        excellent: 'yellow',
                                        poor: 'yellow',
                                    }} />
                                    <h4>Express</h4>
                                </div>
                                <div className='item'>
                                <ProgressBar className='progress' width="230" trackWidth="13" percentage="50" fontColor="white" defColor={{
                                        fair: 'yellow',
                                        good: 'yellow',
                                        excellent: 'yellow',
                                        poor: 'yellow',
                                    }} />
                                    <h4>Python</h4>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default skill

