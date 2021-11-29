import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';

import Private from './Components/PrivateRoute';
import { useEffect } from 'react';
import HairList from './Components/HairList';

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
    
        <Router>
        
         <div> 
         
           <Switch>
             <Route path="/" exact component={Header} />
             <Route path="/oauth" exact component={HairList} />
             
             <Private path="/oauth">
               <HairList />
             </Private>
            
 
           </Switch>
         </div>
       </Router>
      
     </div>

    );
}

export default App;



