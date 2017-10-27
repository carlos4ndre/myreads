import React from 'react'
import BookStatusSelect from './BookStatusSelect'

const Book = (props) => {
  const { title, image_url, authors } = props

  return (
    <div className='book'>
      <div className='book-top'>
        <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${image_url})` }}></div>
        <div className='book-shelf-changer'>
          <BookStatusSelect />
        </div>
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-authors'>
        {
          authors.join(', ')
        }
      </div>
    </div>
  )
}

export default Book
