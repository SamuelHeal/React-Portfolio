import React, { useState } from 'react';
import './body.css'
import Landing from './landing/index'
import About from './about/index'
import Portfolio from './portfolio/index'
import Contact from './contact/index'
import Skills from './skills/index'
import Header from './header/index'




function Body() {
    // return (
    //     <div className='bodyContainer'>
    //         <div>
    //             <Landing />
    //         </div>
    //         <div>
    //             <About />
    //         </div>
    //         <div>
    //             <Skills />
    //         </div>
    //         <div>
    //             <Portfolio />
    //         </div>
    //         <div>
    //             <Contact />
    //         </div>
            
    //     </div>
    // )
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        
        if (currentPage === 'About') {
            return (
                <div className='bodyContainer'>
                    <div>
                        <Landing />
                    </div>
                    <div>
                        <About />
                    </div>
                </div>
            ) 
            
        }
        if (currentPage === 'Skills') {
            return (
                <div className='bodyContainer'>
                    <div>
                        <Landing />
                    </div>
                    <div>
                        <Skills />
                    </div>
                </div>
            ) 
        }
        if (currentPage === 'Portfolio') {
            return (
                <div className='bodyContainer'>
                    <div>
                        <Landing />
                    </div>
                    <div>
                        <Portfolio />
                    </div>
                </div>
            ) 
        }
        if (currentPage === 'Contact') {
            return (
                <div className='bodyContainer'>
                    <div>
                        <Landing />
                    </div>
                    <div>
                        <Contact />
                    </div>
                </div>
            ) 
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <div className='sticky1'>
                <div className='cover'></div>
                {/* We are passing the currentPage from state and the function to update it */}
                <Header currentPage={currentPage} handlePageChange={handlePageChange} />
                {/* Here we are calling the renderPage method which will return a component  */}
          
            </div>
            <div>
                {renderPage()}
            </div>
        </div>
        
      );

}

{/* <div className='sticky1'>
                <div className='cover'></div>
                <Header />
            </div> */}
export default Body
