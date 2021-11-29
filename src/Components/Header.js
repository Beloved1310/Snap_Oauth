import React from 'react';
import ParticlesBg from 'particles-bg';
import Fade from 'react-reveal';
import ScriptTag from 'react-script-tag';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';


const snapLogin = function (d, s, id) {
    var js,
        sjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://sdk.snapkit.com/js/v1/login.js';
    sjs.parentNode.insertBefore(js, sjs);
};



function Header() {
    useEffect(() => {
        snapLogin(document, 'script', 'loginkit-sdk');
    }, []);

   
    return (
        <header id='home'>
            <ParticlesBg type='circle' bg={true} />

            <nav id='nav-wrap'>
                <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
                    Show navigation
                </a>
                <a className='mobile-btn' href='#home' title='Hide navigation'>
                    Hide navigation
                </a>

                <ul id='nav' className='nav'>
                    <li className='current'>
                    <Link to='/' className='smoothscroll'>Home</Link>
                        
                    </li>
                    <li className='current'>
                    <Link to='/oauth' className='smoothscroll'>Gallary</Link>
                    </li>
                </ul>
            </nav>

            <div className='row banner'>
                <div className='banner-text'>
                    <Fade bottom duration={1200}>
                        <h1 className='responsive-headline'>Colour Hair</h1>
                        <h3>
                            You define your hair, Get whant you desire<br /> 
                           <b> Get Login now!</b>{' '}
                        </h3>
                    </Fade>

                    <hr />
                    <hr />
                    <hr />
                    <Fade bottom duration={2000}>
                        <div className='social' style={{ paddingTop: 100 }}>
                            <div id='container'>
                                <div id='login-button'></div>
                                <div id='profile' className='hidden'>
                                    <img id='picture' src='#' />
                                    <p id='welcome'>Welcome ✨!</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>

            
        </header>
    );
}

export default Header;
