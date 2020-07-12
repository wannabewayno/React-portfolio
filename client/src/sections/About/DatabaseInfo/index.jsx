import React from 'react';
import './style.css';

export default function DatabaseInfo(){

    return (
        <div id="data-base" className="list-section">
            <div id="database-container">
                <div id="server">
                    <div id="server-rack-container">
                        <div id="server-1" className="server-rack">
                            <img src="./assets/images/compressed/SQL-logo-modified.png" alt="" className="center"/>
                            <div className="server-light"></div>
                            <div className="server-light"></div>
                            <div className="server-light power-light"></div>
                        </div>
                        <div id="server-2" className="server-rack">
                            <img src="./assets/images/compressed/mongoDB-logo.png" alt="" className="center"/>
                            <div className="server-light"></div>
                            <div className="server-light"></div>
                            <div className="server-light power-light"></div>
                        </div>
                        <div id="server-3" className="server-rack">
                            <img src="./assets/images/compressed/indexedDB-logo-text.png" alt="" className="center"/>
                            <div className="server-light"></div>
                            <div className="server-light"></div>
                            <div className="server-light power-light"></div>
                        </div>
                    </div>
                    <div id="pipe-container">
                        <div id="main-pipe"></div>
                        <div id="t-junction-container">
                            <div id="block"></div>
                            <div id="trapezoid-left" className="trapezoid"></div>
                            <div id="trapezoid-right" className="trapezoid"></div>
                        </div>
                        <div id="vertical-pipe"></div>
                    </div>
                </div>
                <h5>Database skills</h5>
            </div>
        </div>
    )
}