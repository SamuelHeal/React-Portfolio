import React from 'react'
import './computer.css'

function ComputerHeader() {
    return (
        <div className='computer'>
            <div className='navOptions'>
                <a href='#about'>
                    <i className="fi-rr-id-badge navIcon"></i> About Me
                </a>
            </div>
            <div className='navOptions'>
                <a href='#projects'>
                    <i className="fi-rr-briefcase navIcon"></i> Projects
                </a>
            </div>
            <div className='navOptions'>
                <a href='#contact'>
                    <i className="fi-rr-headset navIcon"></i> Contact
                </a>
            </div>
            <div className='navOptions'>
                <a href='#'>
                    <i className="fi-rr-document navIcon"></i> Resume
                </a>
            </div>
        </div>
    )
}

export default ComputerHeader
