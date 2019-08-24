import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { List } from './App';
import Books from './books'
 
ReactDOM.render(
   <Router>
       <div>
           <Route exact path="/" component={List} />
           <Route path="/fiction" component={Books} />
           <Route path="/drama" component={Books} />
           <Route path="/humor" component={Books} />
           <Route path="/politics" component={Books} />
           <Route path="/philosophy" component={Books} />
           <Route path="/history" component={Books} />
           <Route path="/adventure" component={Books} />
       </div>
   </Router>,
   document.getElementById('root'));
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 
 

