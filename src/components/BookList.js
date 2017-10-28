import React from 'react'
import Book from './Book'

const BookList = (props) => {
  const { books, onBookStatusChange } = props
  console.log(books)

  return (
    <ol className='books-grid'>
    {
      books.map((book, index) => (
        <li key={index}>
          <Book
            title={book.title}
            image_url={book.imageLinks && book.imageLinks.thumbnail}
            authors={book.authors}
            status={book.shelf}
            onBookStatusChange={(newStatus) => onBookStatusChange(book, newStatus)}
          />
        </li>
      ))
    }
    </ol>
  )
}

export default BookList
