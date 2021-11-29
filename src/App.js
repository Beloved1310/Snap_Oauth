import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header';

import Private from './Components/PrivateRoute';

import HairList from './Components/HairList';



function App() {
    

    return (

        <div>
    
        <Router>
        
         <div> 
         
           <Switch>
             <Route path="/" exact component={Header} />

             
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



