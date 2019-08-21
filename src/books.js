import React from "react";
import { Link } from 'react-router-dom';
 
class Books extends React.Component {
   constructor() {
       super();
       this.state = {
           books: []
       }
   }
 
   componentDidMount() {
       fetch("http://skunkworks.ignitesol.com:8000/books?mime_type=image")
           .then(results => {
               return results.json();
           }).then(data => {
               let books = data.results.map(book => {
                   if(book.authors[0] != undefined){
                       return(
                           <div key = "book.id">
                               <img src={book.formats['image/jpeg']}/>
                               <h1>{book.title}</h1>
                               <p>{book.authors[0].name}</p>
                           </div>
                       )
                   }
                   console.log(book)
               })
               this.setState({ books: books })
               console.log("state", this.state.books);
           })
 
   }
 
   render() {
       return (
           <div className="title">
               {this.state.books}
               <div>
               <Link to="/"><button>Back list</button></Link>
               </div>
           </div>
       )
   }
}
 
export default Books;

