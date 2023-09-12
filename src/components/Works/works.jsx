import React from 'react';
import './works.css';
import Button from 'react-bootstrap/Button';
import Link from 'antd/es/typography/Link';
import resume from '../../asset/Muiz Safdar Resume-1.png'



const Works = () => {

    return (
        <section id='works'>
            <h2 className="worksTitle">About Me</h2>

            <span className="worksDesc">
                <p style={{ fontWeight: '500', fontSize: '1.5rem' }}>Introduction:</p>"As a dedicated Full Stack Developer, I bring extensive expertise in
                the MERN stack to the table. I specialize in leveraging React for front-end development, harnessing the power of Node.js for
                back-end solutions, and skillfully managing databases. My journey in the realm of web development has been characterized by
                hands-on experience, a perpetual quest for knowledge, and an unwavering commitment to delivering meaningful and innovative
                digital solutions."
            </span>
            <span className="worksDesc">
                <p style={{ fontWeight: '500', fontSize: '1.5rem' }}>Studies:</p> Currently, I am in last year of my degree (Software Engineering) and doing practical work along with my studies.
                I have done some projects of front-end UI and working on React JS. I have also command in JavaScript
                and exploring more about it..
            </span>
            <span style={{ fontWeight: '500', fontSize: '1.5rem', margin: '20px', fontFamily: 'initial' }}>
                For further information, please review my CV.
            </span>
            <Button variant="primary" style={{ fontSize: '1rem', padding: '1rem 1.5rem' }}><Link href={resume} target="_blank" rel="noreferrer">Click to See</Link></Button>
        </section>
    )
}

export default Works 