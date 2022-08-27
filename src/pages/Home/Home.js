import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import Socials from '../../components/Socials/Socials';

// import { socialsData } from '../../data/socialsData';

// import {
//     FaLinkedin,
//     FaGithub,
//     FaInstagram,
//     FaYoutube,
// } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            <div className='vertical-center'>
                <h1>
                    <div className='hide-text-block'>
                        <Link to='./about'>
                            <div class="animate text-color-white on-hover-40 hide-web label-hello "></div>
                            {/* <div class="animate text-color-white on-hover-40 hide-mobile toggle-mobile-second">About</div> */}
                        </Link>

                        <div className='hide-text-block'>
                            <Link to='./projects'>
                                <div class="animate text-color-red on-hover-40 delay04 hide-web label-iam"></div>
                            </Link>
                        </div>

                        <div className='hide-text-block'>
                            <Link to='./contact'>
                                <div class="animate text-color-red on-hover-40 delay08 hide-web label-lisa"></div>
                            </Link>
                        </div>
                    </div>

                    <div className='animate delay10 on-hover-40 resume'>
                        <a className='text-color-white' href="https://lisavcresume.tiiny.site/" target="_blank" rel="noreferrer">Download  CV</a>
                    </div>
                </h1>

                <Socials />
            </div>

            <div class="bg-photo"></div>
        </div>
    )
}

export default Home



{/*
MOBILE
<div class="hide-mobile mobile-tap-area">
	<div class="max-width">
		<div class="vertical-center">
			<h1>
				<div class="text-color-white hide-text-block">
					<div class="animate toggle-mobile-first">Hello.</div>
				</div>
				<div class="text-color-red hide-text-block">
					<div class="animate delay04 toggle-mobile-first">I am</div>
				</div>
				<div class="text-color-red hide-text-block">
					<div class="animate delay08 toggle-mobile-first">Dejan</div>
				</div>
			</h1>
		</div>
	</div>
	<div class="tap-indication">Tap anywhere</div>
</div> */}
