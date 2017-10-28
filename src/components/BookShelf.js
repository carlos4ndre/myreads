import React from 'react'
import BookList from './BookList'

const BookShelf = (props) => {
  const { title, books, onBookStatusChange } = props

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
          <BookList books={books} onBookStatusChange={onBookStatusChange}/>
      </div>
    </div>
  )
}

export default BookShelf
