import React from 'react'
import './about.css'
import samPic from './sam-pic.jpeg'

function About() {
    return (
        <div id='about' className='aboutContainer'>
            <div className="aboutHeading">
                About
            </div>
            <div className='aboutContentContainer'>
                <div className="aboutPara">
                    I am a coding fanatic who has recently begun a journey in Web Development 
                    with the dream of becoming a fully fledged Software Engineer. I am incredibly 
                    passionate about what I do and am nearing the completion of a six month bootcamp 
                    in Web Development that has been hosted by Trilogy Education through the University 
                    of Sydney. Here, I have learnt the necessary skills required to become a Full-Stack 
                    Web Developer. To further add to my education, I have been accepted into a Bachelor 
                    of Design Computing/Advanced Studies, the Advanced Studies component will be used to 
                    complete a Major in Software Development. I am beyond excited to see where my love 
                    for this industry takes me.
                </div>
                <div className='picContainer'>
                    <img className="aboutPic" src={samPic} alt='Sam'></img>
                </div>
                
                
            </div>
           
        </div>
    )
}

export default About
