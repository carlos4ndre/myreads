import React from 'react'
import { Link } from 'react-router-dom'
import BookList from './BookList'

const HomePage = (props) => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <BookList books={props.books}/>
    <div className='open-search'>
      <Link to='/search'>Add a book</Link>
    </div>
  </div>
)

export default HomePage
