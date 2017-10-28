import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ShowSearchPage from './components/ShowSearchPage'
import HomePage from './components/HomePage'
import { Switch, Route } from 'react-router-dom'

const INITIAL_STATE = {
  books: []
}

class BooksApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = INITIAL_STATE
    this.handleBookStatusChange = this.handleBookStatusChange.bind(this)
  }

  componentDidMount() {
    this.fetchAllBooks()
  }

  fetchAllBooks() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  updateBook(book) {
    BooksAPI.update(book, book.shelf)
      .then((response) => {
        const books = this.state.books.filter((b) => b.id !== book.id)
        this.setState({ books: [...books, book] })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  handleBookStatusChange(book, newStatus) {
    const updatedBook = { ...book, shelf: newStatus }
    this.updateBook(updatedBook)
  }

  render() {
    const { books } = this.state

    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' render={() =>
            <HomePage books={books} onBookStatusChange={this.handleBookStatusChange}/>
          }/>
          <Route exact path='/search' render={() =>
            <ShowSearchPage onBookStatusChange={this.handleBookStatusChange}/>
          }/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
