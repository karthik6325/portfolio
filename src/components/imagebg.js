import React from 'react'
import './imagebg.css';
import Introimg from '../assets/programming-skills.jpg';
import { Link } from 'react-router-dom'

const Imagebg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='intro-img' src={Introimg} alt="img" />
            </div>
            <div className='content'>
                <p>HI, I'M KARTHIK</p>
                <h1>MERN Stack Developer</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Imagebg
