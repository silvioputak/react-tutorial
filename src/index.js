import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

// Setup Array of objects
const books = [
   {
      id:1,
      img: "https://m.media-amazon.com/images/I/91+NBrXG-PL._AC_UY218_.jpg",
      author: "BARACK OBAMA",
      title: "A promised Land"
   },
   {
      id:2,
      img: "https://m.media-amazon.com/images/I/71ykofulttL._AC_UY218_.jpg",
      author: "JEFF BEZOS",
      title: "Jef Bezos and the Age of Amazon"
   },
   {
      id:3,
      img: "https://m.media-amazon.com/images/I/61vRDNlfPEL._AC_UY218_.jpg",
      author: "KLAUS SCHWAB",
      title: "COVID-19: THEORY OF LIE"
   },
]

//Componenets

   function BookList(){
      return(
      <section className="booklist">
         {books.map((book)=> {
            return(
                <Book key={book.id} {...book}/>
            )
         })}
      </section>
   );    
}
// Passing props to component
const Book = ({img, title, author}) => {
   //console.log(props)
   //const {img,title,author} = props
   
   return(
      <article className="book">
         <img src={img} alt=""/>
         <h1>{title}</h1>
         <h4>{author}</h4>
         
      </article>
   );
}

//const Image = () => <img src="https://picsum.photos/200" alt=""/>
//const Title = () => <h1>I love you to moon and the back</h1>
//const Author = () => <h4 style = {{color: '#617d98',fontSize:'0.75rem', marginTop:'0.25rem'}}>Silvio Putak</h4>

//const Greeting = () => {
//return React.createElement('h1',{},'hello world')
//}

ReactDom.render(<BookList />, document.getElementById('root'))