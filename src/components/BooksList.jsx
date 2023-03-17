import React from 'react'
import Book from './Book';
import {data as books} from "../data/data"
import { useState, useEffect } from 'react';
// buils the list of books and delegate it at each book
function BooksList({}) {
  const [background, setBackground] = useState('#ffffff');
  useEffect(()=>{},[])
  function handleBackground(color){
    const body = document.querySelector("body");
    setBackground(color);
    body.style.backgroundColor = background;
  }
  return (
    <main className='flex flex-col-reverse gap-10 items-center'>{books.map((book)=> {
      return <Book key={book.id} src={book.src} id={book.id} handleBackground={()=>handleBackground(book.color)}/>;
    })}
    
    </main>
  )
}

export default BooksList