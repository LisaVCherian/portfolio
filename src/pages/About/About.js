import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Socials from '../../components/Socials/Socials';
import './About.css'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='vertical-center'>
                <Socials />
            </div>
            <div className='text-color-white content'>
                <p className='h4'>Full Stack Web Developer<br />Mic Lover!</p>
                <p className='para'>
                    Hey there! I'm Lisa VC, a full stack web developer
                </p>
                <p className='heading'>Skills</p>
                <p className='heading'>Achievements</p>

            </div>
        </div>
    )
}

export default About
