import React from 'react';

class BookList extends React.Component{
  constructor(){
    super()
  }
  render() {
    let books = this.props.bookList.map(book => {
      return (
        <li>
          <span>Name: {book.name}</span><br/>
          <span>Author: {book.author}</span><br/>
          <span>Year: {book.year}</span><br/>
          <span>Editorial: {book.editorial}</span>
        </li>
      )
    })
    return (
      <ul>{books}</ul>
    )
  }
}
export default BookList;
