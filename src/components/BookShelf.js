import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
  const { title, books, onBookStatusChange } = props

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {
            books.map((book, index) => (
              <li key={index}>
                <Book
                  title={book.title}
                  image_url={book.imageLinks.thumbnail}
                  authors={book.authors}
                  status={book.shelf}
                  onBookStatusChange={(newStatus) => onBookStatusChange(book, newStatus)}
                />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
