import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookList from './BookList'

const INITIAL_STATE = {
  searchResults: {
    books: []
  }
}

class ShowSearchPage extends Component {
  constructor(props) {
    super(props)

    this.searchBooks = this.searchBooks.bind(this)
    this.state = INITIAL_STATE
  }

  searchBooks(query, maxResults=10) {
    if (query.length === 0) {
      return
    }

    BooksAPI.search(query, maxResults)
      .then((results) => {
        if (results.error) {
          console.log(results.error)
          return
        }

        this.setState({ searchResults: { books: results}})
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { searchResults } = this.state
    const { onBookStatusChange } = this.props

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              onChange={(event) => this.searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <BookList books={searchResults.books} onBookStatusChange={onBookStatusChange}/>
        </div>
      </div>
    )
  }
}

export default ShowSearchPage
