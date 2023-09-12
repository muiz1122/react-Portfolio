import React, { useRef, useState } from 'react';
import './contact.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pickbazar from '../../asset/pickbazar.png';
import summarizer from '../../asset/Summarize.png';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateForm = () => {
        let isValid = true;

        if (name.trim() === '') {
            setNameError('Please enter your name.');
            isValid = false;
        } else {
            setNameError('');
        }

        if (message.trim() === '') {
            setMessageError('Please enter your message.');
            isValid = false;
        } else {
            setMessageError('');
        }

        if (email.trim() === '') {
            setEmailError('Please enter your email.');
            isValid = false;
        } else {
            setEmailError('');
        }


        return isValid;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return; // Don't send the email if validation fails.
        }

        emailjs.sendForm('service_yuujlo1', 'template_a5q6xih', form.current, 'rzSxrek_1u7GuiDs5')
            .then((result) => {
                console.log(result.text);
                toast.success('Email Sent Successfully!');
                // Reset form fields
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.log(error.text);
                toast.error("This didn't work.")
            });
    };

    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">Portfolio</h1>
                <p className="clientDesc">
                    I am a passionate Full Stack Developer with expertise in the MERN stack,
                    specializing in React for front-end development, Node.js for back-end, and database management.
                    My journey in the world of web development has been marked by hands-on experience, learning,
                    and a strong commitment to creating meaningful digital solutions.
                </p>

                <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="col" style={{ margin: '8px', flex: 1 }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img style={{ width: '18rem' }} src={pickbazar} />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: '400' }}>Pick Bazar</Card.Title>
                                <Card.Text style={{ fontWeight: '200' }}>
                                    An E-commerce website based on React from which you can add to cart products which you <br /> wanna buy.
                                </Card.Text>
                                <Button variant="primary"><Card.Link href="https://pick-bazar-ecom.vercel.app" target="_blank" rel="noreferrer">Click to See</Card.Link></Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col" style={{ margin: '8px' }}>
                        <Card style={{ width: '18rem', flex: 1 }}>
                            <Card.Img style={{ width: '18.5rem' }} src={summarizer} />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: '400' }}>Article Summarizer</Card.Title>
                                <Card.Text style={{ fontWeight: '200' }}>
                                    A react based web app in which you can know about the whole website in the
                                    form of summary just by pasting it's link.
                                </Card.Text>
                                <Button variant="primary"><Card.Link href="https://sumz.surge.sh" target="_blank" rel="noreferrer">Click to See</Card.Link></Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        className="name"
                        name="your_name"
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && <div className="error">{nameError}</div>}
                    <input
                        type="email"
                        className="email"
                        name="your_email"
                        placeholder='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <div className="error">{emailError}</div>}
                    <textarea
                        className='msg'
                        name="message"
                        rows="5"
                        placeholder='Your Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    {messageError && <div className="error">{messageError}</div>}

                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/muiz-safder" id='link' target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin fa-2xl" style={{ color: '#551A8B' }}></i>
                        </a>
                        <a href="https://www.instagram.com/m_u_i_zzz" id='link' target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-instagram fa-2xl" style={{ color: '#551A8B' }}></i>
                        </a>
                        <a href="https://twitter.com/MuizSafdar" id='link' target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-twitter fa-2xl" style={{ color: '#551A8B' }}></i>
                        </a>
                        <a href="https://www.youtube.com" id='link'>
                            <i className="fa-brands fa-youtube fa-2xl" style={{ color: '#551A8B' }} rel="noreferrer"></i>
                        </a>
                    </div>
                </form>
            </div>
        </section >
    )
}

export default Contact