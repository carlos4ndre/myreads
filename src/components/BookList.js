import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookList = (props) => {
  const { books, onBookStatusChange } = props
  const defaultImage = require('../icons/blank-book.png')

  return (
    <ol className='books-grid'>
    {
      books.map((book, index) => {
        const { title, imageLinks, authors, shelf } = book
        return (
          <li key={index}>
            <Book
              title={title}
              imageUrl={(imageLinks && imageLinks.thumbnail) || defaultImage}
              authors={authors}
              status={shelf}
              onBookStatusChange={(newStatus) => onBookStatusChange(book, newStatus)}
            />
          </li>
        )
      })
    }
    </ol>
  )
}

BookList.PropTypes = {
  books: PropTypes.array.required,
  onBookStatusChange: PropTypes.func.required
}

export default BookList
