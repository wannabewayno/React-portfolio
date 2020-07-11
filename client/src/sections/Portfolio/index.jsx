import React from 'react';

function Portfolio(){

    return (
        <section id='portfolio'>
            Portfolio section
            {/* <!-- Docks the window to fit the screen --> */}
            <dock></dock>
            <div>
                <h3>Recent Projects</h3>
                <p>Just to name a few...</p>
            </div>
            <div className='project-thumbnails'>
                <thumbnail className="recipedia z-depth-1">
                    <div className="thumbnail-image"></div>
                    <div className="logo-container">
                        <img src="./assets/images/compressed/recipedia-logo.png" alt="" className="logo"/>
                    </div>
                    <div className="overlay">
                        <div className="thumbnail-info">
                            Intuitively consolidate recipe sharing, meal planning and shopping list generation.
                            <a href="https://projects-2.herokuapp.com" className="anchor-btn">
                                <i className="material-icons right">chevron_right</i>Website
                            </a>
                        </div>
                    </div>
                </thumbnail>
            </div>
            <h5 className="z1">Want to work together?</h5>
        </section>
    )
}

export default Portfolio;