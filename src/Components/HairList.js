import React from 'react';
import HairGallary from './HairGallary';
import { Link } from 'react-router-dom';

import '../index.css';

import { useGlobalContext } from '../context';

export default function HairList() {
    const { hair } = useGlobalContext();

    return (
        <section className='section'>
           
                <nav id='nav-wrap'>
                    <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
                        Show navigation
                    </a>
                    <a className='mobile-btn' href='#home' title='Hide navigation'>
                        Hide navigation
                    </a>

                    <ul id='nav' className='nav'>
                        <li className='current'>
                            <Link to='/' className='smoothscroll'>
                                Home
                            </Link>
                        </li>
                    </ul>
                </nav>

                {hair.slice(0, 10).map((item) => {
                    return <HairGallary key={item.id} {...item} />;
                })}
          
        </section>
    );
}
