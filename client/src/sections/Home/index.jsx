import React from 'react';

function Home(){

    return (
        <section id='home'>
            <dock></dock>
            <div className="shade">
                <h1 className="name" dangerouslySetInnerHTML={{__html: '&lt Wayne<span class="last-name"> Griffiths</span>/&gt'}}></h1>
            </div>
            <div className="shade-long">
                <h4 className="title">Full-Stack Web Developer</h4>
            </div>
        </section>
    )
}

export default Home;