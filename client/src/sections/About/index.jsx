import React from 'react';
import FrontEndInfo from './FrontEndInfo';
import BackEndInfo from './BackEndInfo';
import DatabaseInfo from './DatabaseInfo';

function About(){

    return (
        <section id='about'>
            <dock></dock>
            <h3>About</h3>

            <div id="sub-content" class="info-byte">
                <h6>The Full-Stack</h6>
                <p>Coding for the entire scope, I'll take you from sketch to production in no time</p>
            </div>

            <div id="main-content" class="info-byte">
                <h6>Philosophy</h6>
                <p>I Code projects from the ground-up with fresh ideas and enthusiasm</p>
            </div>

            <figure id="full-stack">
                <img src="./assets/images/compressed/full-stack-stack.png" alt=""/>
                <figcaption>Full-Stack Developer</figcaption>
            </figure>
            
            <FrontEndInfo/>
            <BackEndInfo/>
            <DatabaseInfo/>
        </section>
    )
}

export default About;