import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Title, List, Page1, Page2, Page3 } from './App';
import Books from './books'
 
ReactDOM.render(
   <Router>
       <div>
           <Route exact path="/" component={List} />
           <Route path="/page1" component={Books} />
           <Route path="/page2" component={Page2} />
           <Route path="/page3" component={Page3} />
       </div>
   </Router>,
   document.getElementById('root'));
 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 

