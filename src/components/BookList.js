import React from 'react'
import BookShelf from './BookShelf'

const BookList = (props) => {
  const { books } = props
  const bookShelves = [
    {
      title: 'Currently Reading',
      books: books.filter((b) => b.shelf === 'currentlyReading')
    },
    {
      title: 'Want to Read',
      books: books.filter((b) => b.shelf === 'wantToRead')
    },
    {
      title: 'Read',
      books: books.filter((b) => b.shelf === 'read')
    }
  ]

  return (
    <div className='list-books-content'>
      <div>
        {
          bookShelves.map((bookShelf, index) => (
            <BookShelf
              key={index}
              title={bookShelf.title}
              books={bookShelf.books}
            />
          ))
        }
      </div>
    </div>
  )
}

export default BookList
