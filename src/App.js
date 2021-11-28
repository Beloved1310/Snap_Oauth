import React from 'react';
import Header from './Components/Header';
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

function App() {
    useEffect(() => {
        snapLogin(document, 'script', 'loginkit-sdk');
    }, []);

    return (
        <div>
            <Header />
        </div>
    );
}

export default App;

