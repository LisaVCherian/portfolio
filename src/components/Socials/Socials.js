import React from 'react'
import './socials.css'
import { socialsData } from '../../data/socialsData';

import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
} from 'react-icons/fa';

const Socials = () => {
    return (
        <div className='socials'>
            {socialsData.linkedIn && (
                <a
                    href={socialsData.linkedIn}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaLinkedin
                        className='icon-social'
                        // style={ }
                        aria-label='LinkedIn'
                    />
                </a>
            )}
            {socialsData.github && (
                <a
                    href={socialsData.github}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaGithub
                        className='icon-social'
                        // style={{ color: theme.secondary }}
                        aria-label='GitHub'
                    />
                </a>
            )}
            {socialsData.instagram && (
                <a
                    href={socialsData.instagram}
                    target='_blank'
                    rel='noreferrer'
                >
                    <FaInstagram
                        className='icon-social'
                        // style={{ color: theme.secondary }}
                        aria-label='Instagram'
                    />
                </a>
            )}
        </div>
    )
}

export default Socials
