import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

// Setup variables
const firstBook = {
   img: "https://picsum.photos/200",
   author: "Silvio Putak",
   title: "I love you to moon and the back"
}

//Componenets
function BookList(){
   return(
      <section className="booklist">
         <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
         <Book img={firstBook.img} title="Krto Mesić" author="Silvio Putka" godina={22}/>
         
         
         
      </section>
   );    
}

const Book = (props) => {
   console.log(props)
   return(
      <article className="book">
         <img src={props.img} alt=""/>
         <h1>{props.title}</h1>
         <h4>{props.author}</h4>
         
         
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