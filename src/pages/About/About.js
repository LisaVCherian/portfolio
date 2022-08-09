import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Socials from '../../components/Socials/Socials';
import './About.css'
import { aboutData } from '../../data/aboutData';
import Skills from '../../components/Skills/Skills';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='vertical-center'>
                <Socials />
            </div>
            <div className='text-color-white content'>
                <p className='h4'>Front-end Developer<br />Programmer<br />Mic Lover!</p>

                <p className='aboutPara'>
                    {aboutData.aboutPara}
                    <br /><br /> You can know more about me in the PDF attached below.
                </p>
                <div className='animate delay04 on-hover-40 resume'>
                    <a className='text-color-red' href="https://lisavcresume.tiiny.site/" target="_blank">Download  CV</a>
                </div>
                <p className='heading'>Skills</p>
                <Skills />
                <p className='heading'>Achievements</p>

            </div>
        </div>
    )
}

export default About
