import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookList = (props) => {
  const { books, onBookStatusChange } = props
  const defaultImage = require('../icons/blank-book.png')

  return (
    <ol className='books-grid'>
    {
      books.map((book, index) => (
        <li key={index}>
          <Book
            title={book.title}
            imageUrl={(book.imageLinks && book.imageLinks.thumbnail) || defaultImage}
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

BookList.PropTypes = {
  books: PropTypes.array.required,
  onBookStatusChange: PropTypes.func.required
}

export default BookList
