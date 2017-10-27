import React from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList'

const HomePage = (props) => {
  const {books, onBookStatusChange} = props

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <BookList books={books} onBookStatusChange={onBookStatusChange}/>
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  )
}

export default HomePage
