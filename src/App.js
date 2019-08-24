import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
 
import "./App.css"
 
const List = () => {
 return (
   <div className="home">
     <div className="title">
       <h1>Guttenberg Project</h1>
     </div>
     <div className="list">
       <Link to="/fiction">
         <Button variant="contained" color="primary">
           fiction
         </Button>
       </Link>
       <Link to="/drama">
         <Button variant="contained" color="primary">
           drama
         </Button>
       </Link>
       <Link to="/humor">
         <Button variant="contained" color="primary">
           humor
         </Button>
       </Link>
       <Link to="/politics">
         <Button variant="contained" color="primary">
           politics
         </Button>
       </Link>
       <Link to="/philosophy">
         <Button variant="contained" color="primary">
           philosophy
         </Button>
       </Link>
       <Link to="/history">
         <Button variant="contained" color="primary">
           history
         </Button>
       </Link>
       <Link to="/adventure">
         <Button variant="contained" color="primary">
           adventure
         </Button>
       </Link>
     </div>
   </div>
 )
}
 
export { List }
 
//http://skunkworks.ignitesol.com:8000/
 

