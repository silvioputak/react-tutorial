import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

import Book from './Book'
import {data} from './books'

import {greeting} from './testing/testing'
//Componenets

   function BookList(){
      return(
      <section className="booklist">
         {data.map((book)=> {
            return(
                <Book key={book.id} {...book}/>
            )
         })}
      </section>
   );    
}
// Passing props to book


//const Image = () => <img src="https://picsum.photos/200" alt=""/>
//const Title = () => <h1>I love you to moon and the back</h1>
//const Author = () => <h4 style = {{color: '#617d98',fontSize:'0.75rem', marginTop:'0.25rem'}}>Silvio Putak</h4>

//const Greeting = () => {
//return React.createElement('h1',{},'hello world')
//}

ReactDom.render(<BookList />, document.getElementById('root'))