import React from 'react';
import './style.css';

export default function FrontEndInfo(){

    return (
        <div id="front-end" className="list-section">
            <div className="line front-end-line"></div>
            <h5>Front-End skills</h5>
            <div id="front-end-container">
                <div id="monitor">
                    <div id="screen">
                        <div id="screen-container">
                            <div id="square-top-left" className="square"></div>
                            <div id="content-top-right" className="content">
                                <div className="subContent"></div>
                                <div className="subContent"></div>
                            </div>
                            <div id="content-bottom-left" className="content">
                                <div className="subContent"></div>
                                <div className="subContent"></div>
                            </div>
                            <div id="square-bottom-right" className="square"></div>
                        </div>
                    </div>
                    <div id="dash">
                        <div id="light-1" className="light"></div>
                        <div id="light-2" className="light"></div>
                    </div>
                    <div id="stand"></div>
                </div>
            </div>
            <ul className="skill-list center">
                <li className="html5"><img src="./assets/images/compressed/html5-logo.png" alt="" className="center"/></li>
                <li className="css3"><img src="./assets/images/compressed/css3-logo.png" alt="" className="center"/></li>
                <li className="react"><img src="./assets/images/compressed/react-nude-text-logo.png" alt="" className="center"/></li>
                <li className="jquery"><img src="./assets/images/compressed/jquery-logo.png" alt="" className="center"/></li>
            </ul>
        </div>
    )
}