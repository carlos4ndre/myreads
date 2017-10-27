import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ShowSearchPage from './components/ShowSearchPage'
import HomePage from './components/HomePage'
import { Switch, Route } from 'react-router-dom'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/search' component={ShowSearchPage} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
