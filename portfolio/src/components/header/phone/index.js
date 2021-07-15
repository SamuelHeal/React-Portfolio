import React from 'react'
import './phone.css'

function PhoneHeader({menuOpen, setMenuOpen}) {
    return (
        <div className='phone'>
            <div className='closeIcon' onClick={() => setMenuOpen(!menuOpen)}>
                <i className="fi-rr-cross-circle"></i>       
            </div>
            <div className='iconOptions'>
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
        </div>
    )
}

export default PhoneHeader
