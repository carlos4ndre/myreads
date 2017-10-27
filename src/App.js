import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import ShowSearchPage from './components/ShowSearchPage'
import HomePage from './components/HomePage'
import { Switch, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/search' component={ShowSearchPage} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
