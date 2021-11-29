import React from 'react';
import Zmage from 'react-zmage';

function HairGallary({ location, last_name, download }) {
    return (
        <article>
            <div className='twelve columns collapsed'>
                <div className='columns portfolio-item'>
                    <div className='item-wrap'>
                        <Zmage
                            alt={last_name}
                            src={download}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
                        />
                    </div>

                    <div>
                        <div>{last_name}</div>
                        <p >{location}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default HairGallary;
