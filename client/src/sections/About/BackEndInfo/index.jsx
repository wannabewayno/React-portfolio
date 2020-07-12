import React from 'react';
import './style.css';

export default function BackEndInfo(){

    return (
        <div id="back-end" className="list-section">
            <div className="line back-end-line"></div>
            <h5>Back-end skills</h5>
            <img src="./assets/images/compressed/server-rack.png" alt=""/>
            <ul className="skill-list center">
                <li className="node"><img src="./assets/images/compressed/node-logo.png" alt="" className="center"/></li>
                <li className="express"><img src="./assets/images/compressed/express-logo.png" alt="" className="center"/></li>
                <li className="handlebars"><img src="./assets/images/compressed/handlebars-logo-text.png" alt="" className="center"/></li>
                <li className="nodemailer"><img src="./assets/images/compressed/nodemailer-logo.png" alt="" className="center"/></li>
            </ul>
        </div>
    )
}