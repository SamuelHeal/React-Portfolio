import React from 'react'
import './home.css'
import Header from '../header/index'
import Body from '../body/index'
import Footer from '../footer/index'
import { SocialIcon } from 'react-social-icons';

function Home() {
    return (
        <div className='homeContainer'>
            <div className='sticky1'>
                <div className='cover'></div>
                <Header />
            </div>
            <div class="sticky-container">
                <p>|</p>
                <div class="sticky">
                    <a className='socialIcon'><SocialIcon network="github" bgColor="#6F2232" /></a>
                    <a className='socialIcon seperator'><SocialIcon network="facebook" bgColor="#6F2232" /></a>
                    <a className='socialIcon'><SocialIcon network="linkedin" bgColor="#6F2232" /></a>
                </div>
                <p>|</p>

            </div>
            <div className='move'>
                <Body />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
