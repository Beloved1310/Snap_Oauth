import React from 'react';
import ParticlesBg from 'particles-bg';
import Fade from 'react-reveal';
import ScriptTag from 'react-script-tag';
import { Link } from 'react-router-dom'

function Header() {
    const Demo = async (props) => (<ScriptTag type='text/javascript' src='../../public/js/script.js' />)();
    console.log(Demo)
    const currentLocation = new URL(window.location.href);
    const authorizationCode = currentLocation.searchParams.get('access_token');
    console.log(authorizationCode)
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
                        <h1 className='responsive-headline'>CONTENT KING</h1>
                        <h3>
                            We believe the world is created by colours of your writing<br></br> Get Started By Clicking
                            the Icon Below!{' '}
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

            <p className='scrolldown'>
                <a className='smoothscroll' href='#about'>
                    <i className='icon-down-circle'></i>
                </a>
            </p>
        </header>
    );
}

export default Header;
