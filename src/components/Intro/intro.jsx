import React from 'react';
import './intro.css'
import bg from '../../asset/bg-pic.png';
import { Link } from 'react-scroll';
import btnImg from '../../asset/hireme.png';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className='hello' style={{ fontWeight: '280' }}>Hello,</span>
                <span className='introText'>I'm <span className="introName">Muiz</span><br />React <span className='introName'>Js</span> Developer</span>
                <p className="introPara" style={{ fontWeight: '400' }}>I am a skilled Web Developer with experience <br /> in creating various web apps</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className='btnImg' />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro