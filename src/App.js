import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
 
const Title = () => {
 return (
   <div className="title">
     <h1>React Router demo</h1>
     <Link to="/list"><button>Show the List</button></Link>
   </div>
 )
}
const List = () => {
 return (
   <div className="nav">
   <h1>React Router demo</h1>
     <Link to="/page1">
       <Button variant="contained" color="primary">
         Page1
     </Button>
     </Link>
     <Link to="/page2">
       <Button variant="contained" color="primary">
         Page2
     </Button>
     </Link>
     <Link to="/page3">
       <Button variant="contained" color="primary">
         Page3
     </Button>
     </Link>
   </div>
 )
}
 
const Page1 = () => {
 return (
   <div className="title">
     <h1>This is Page1</h1>
     <Link to="/"><button>Back list</button></Link>
   </div>
 )
}
 
const Page2 = () => {
 return (
   <div className="title">
     <h1>This is Page2</h1>
     <Link to="/"><button>Back list</button></Link>
   </div>
 )
}
 
const Page3 = () => {
 return (
   <div className="title">
     <h1>This is Page3</h1>
     <Link to="/"><button>Back list</button></Link>
   </div>
 )
}
 
export { Title, List, Page1, Page2, Page3 }
 
//http://skunkworks.ignitesol.com:8000/

