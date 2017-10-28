import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

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
    BooksAPI.search(query, maxResults)
      .then((books) => {
        this.setState({ searchResults: { books }})
      })
      .catch(function(error) {
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
          <ol className='books-grid'>
          {
            searchResults.books.map((book, index) => (
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
}

export default ShowSearchPage
