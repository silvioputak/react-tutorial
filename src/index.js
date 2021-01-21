import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

// Setup variables
const author = "Silvio Putak"
const title = "I love you to moon and the back"
const img = "https://picsum.photos/200"

//Componenets
function BookList(){
   return(
      <section className="booklist">
         <Book/>
         <Book/>
         <Book/>
         <Book/>
         
      </section>
   );    
}

const Book = () => {
   return(
      <article className="book">
         <img src={img} alt=""/>
         <h1>{title}</h1>
         <h4>{author}</h4>
         <p>{/*let x = 6*/}</p>
         
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