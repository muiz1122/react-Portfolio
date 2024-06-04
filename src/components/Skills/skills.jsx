import React from 'react';
import './skills.css';
import UIDesign from "../../asset/ui-design.png";
import WebDesign from "../../asset/website-design.png";
import AppDesign from "../../asset/app-design.png";

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">
                As a React developer, I possess a strong foundation in HTML, CSS, and JavaScript.
                My commitment to continuous learning drives me to explore and master new technologies,
                ensuring that I deliver high-quality, cutting-edge solutions.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend Developer</h2>
                        <p>
                            A dedicated React developer with expertise in
                            frontend technologies, crafting dynamic and user-centric web applications.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>JavaScript and React Expert</h2>
                        <p>
                            A seasoned developer proficient in JavaScript and React,
                            specializing in building interactive and performant web solutions.
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>HTML/CSS and React Developer</h2>
                        <p>
                            An experienced developer skilled in HTML, CSS(Tailwind), and React,
                            creating visually stunning and responsive web interfaces.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
