import React from 'react'
import './portfolio.css'
import gymClub from './gymClub.png'

function Portfolio() {
    return (
        <div>
            Portfolio

            <div className="projContainer">
                <div className="projInfoContainer">
                    <h2>Gym Club</h2>
                    <p className="projCat">Full-Stack</p>
                    <p className="projSpec"><span>Languages</span><br /><br />HTML - CSS - Javascript - mySQL<br /></p>
                    <div className='linkContainer'>
                        <a href='https://github.com/SamuelHeal/gym-club' target='_blank' rel="noreferrer" className="projGit">Github</a>
                        <a href='https://gym-club-group-project.herokuapp.com/' target='_blank' rel="noreferrer" className="projGit">Website</a>
                    </div>
                </div>
                <img className='img' src={gymClub} alt='Gym Club'/>
            </div>
        </div>
    )
}

export default Portfolio
