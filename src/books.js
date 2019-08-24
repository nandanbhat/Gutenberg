import React from "react";
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
 
class Books extends React.Component {
   constructor() {
       super();
       this.state = {
           books: [],
           title: '',
           hasMoreItems: true,
           nextHref: null,
           url: '',
           value: ''
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
       this.loadItems = this.loadItems.bind(this);
       this.loadFilter = this.loadFilter.bind(this);
   }
 
   handleChange(event) {
       this.setState({value: event.target.value});
     }
 
   loadItems(page) {
       var self = this;
       let genre = this.props.location.pathname.slice(1)
       // this.setState({title: genre})
 
       let url = this.state.url;
 
       if (this.state.nextHref) {
           url = this.state.nextHref;
       }
 
       fetch(url)
           .then(results => {
               return results.json();
           }).then(data => {
               let books = data.results.map(book => {
                   if (book.authors[0] != undefined) {
                       return (
                           <div key="book.id" className="col-3 col-m-4">
                               <img className="image" src={book.formats['image/jpeg']} />
                               <p className="bookName">{book.title}</p>
                               <p>{book.authors[0].name}</p>
                           </div>
                       )
                   }
                   //console.log(book)
               })
               if (data.next) {
                   self.setState({
                       books: books,
                       nextHref: data.next,
                       url: url
                   });
               } else {
                   self.setState({
                       hasMoreItems: false
                   });
               }
               //console.log("state", this.state.books);
           })
   }
 
   loadFilter(page) {
       var self = this;
       let genre = this.props.location.pathname.slice(1)
       // this.setState({title: genre})
 
       let url = this.state.url;
 
       fetch(url)
           .then(results => {
               return results.json();
           }).then(data => {
               let books = data.results.map(book => {
                   if (book.authors[0] != undefined) {
                       return (
                           <div key="book.id" className="col-3 col-m-4">
                               <img className="image" src={book.formats['image/jpeg']} />
                               <p className="bookName">{book.title}</p>
                               <p>{book.authors[0].name}</p>
                           </div>
                       )
                   }
                   console.log(book)
               })
               if (data.next) {
                   self.setState({
                       books: books,
                       nextHref: data.next,
                       url: url
                   });
               } else {
                   self.setState({
                       hasMoreItems: false
                   });
               }
               console.log("state", this.state.books);
           })
   }
 
   componentDidMount() {
       let genre = this.props.location.pathname.slice(1)
       var url = "http://skunkworks.ignitesol.com:8000/books?mime_type=image&topic=" + genre;
       this.setState({ title: genre, url: url })
   }
 
   handleSubmit(event) {
       let url = this.state.url + '&search=' + this.state.value;
       this.setState({url: url}, this.loadFilter)
     }
 
   render() {
       const loader = <div className="loader">Loading ...</div>;
 
       return (
           <div className="books">
               <div className="topnav">
                   <div className="search-container">
                   <Link to="/"><button className = "back"><i className="fa fa-arrow-left "></i></button></Link>
                       <form onSubmit = {this.handleSubmit}>
                           <input type="text" placeholder="Search.." name="search" onChange={this.handleChange} />
                               <button type="submit"><i className="fa fa-search"></i></button>
                          
                       </form>
                   </div>
               </div>
              
               <div>
                   <h1>{this.state.title.toLocaleUpperCase()}</h1>
               </div>
               <InfiniteScroll
                   pageStart={0}
                   loadMore={this.loadItems}
                   hasMore={this.state.hasMoreItems}
                   loader={loader}>
                   <div className="col-12">
                       {this.state.books}
                   </div>
               </InfiniteScroll>
           </div>
 
       )
   }
}
 
export default Books;
 

