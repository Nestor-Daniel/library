import React from 'react';
import BookRow from './BookRow';

class BookList extends React.Component{
  render() {
    let books = this.props.bookList.map(book => {
      return (
        <BookRow key = {book.id} book = {book} deleteBook={this.props.deleteBook} editBook = {this.props.editBook}/>
      )
    })
    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Year</th>
          <th>Editorial</th>
        </tr>
        </thead>
        <tbody>{books}</tbody>
      </table>
    )
  }
}
export default BookList;
