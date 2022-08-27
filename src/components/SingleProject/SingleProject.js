import React from 'react'
import './SingleProject.css'
import { FaPlay, FaCode } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

import placeholder from '../../assets/png/placeholder.png'


function SingleProject({ id, name, desc, tags, code, demo, image }) {
    return (
        <div className='text-color-white'>
            <Fade bottom>
                <div key={id} className='singleProject'>
                    <div className='projectContent'>
                        <h2
                            id={name.replace(' ', '-').toLowerCase()}

                        >
                            {name}
                        </h2>
                        <img src={image ? image : placeholder} alt={name} />
                        <div className='project--showcaseBtn'>
                            <a
                                href={demo}
                                target='_blank'
                                rel='noreferrer'
                                // className={classes.iconBtn}
                                aria-labelledby={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()} ${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-demo`}
                            >
                                <FaPlay
                                    id={`${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-demo`}
                                    // className={classes.icon}
                                    aria-label='Demo'
                                />
                            </a>
                            <a
                                href={code}
                                target='_blank'
                                rel='noreferrer'
                                // className={classes.iconBtn}
                                aria-labelledby={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()} ${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-code`}
                            >
                                <FaCode
                                    id={`${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-code`}
                                    // className={classes.icon}
                                    aria-label='Code'
                                />
                            </a>
                        </div>
                    </div>
                    <p
                        className='project--desc'

                    >
                        {desc}
                    </p>
                    <div
                        className='project--lang'

                    >
                        {tags.map((tag, id) => (
                            <span key={id}>{tag}</span>
                        ))}
                    </div>
                </div>
            </Fade >
        </div >
    );
}

export default SingleProject
