import React from 'react'

const BookStatusSelect = (props) => {
  const {status, onChange} = props

  return (
    <select value={status || 'none'} onChange={(event) => onChange(event.target.value)}>
      <option value='moveTo' disabled>Move to...</option>
      <option value='currentlyReading'>Currently Reading</option>
      <option value='wantToRead'>Want to Read</option>
      <option value='read'>Read</option>
      <option value='none'>None</option>
    </select>
  )
}

export default BookStatusSelect
