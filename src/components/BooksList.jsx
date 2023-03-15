import React from 'react'
import Book from './Book';
import {data as books} from "../data/data"
// buils the list of books and delegate it at each book
function BooksList() {
  return (
    <main className='flex flex-col-reverse gap-10 items-center'>{books.map((book)=> {
      return <Book key={book.id} src={book.src} id={book.id} />;
    })}
    
    </main>
  )
}

export default BooksList