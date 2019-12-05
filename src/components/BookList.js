import React from 'react';
import BookRow from './BookRow';
import {Table} from 'react-bootstrap';

class BookList extends React.Component{
  render() {
    let books = this.props.bookList.map(book => {
      return (
        <BookRow key = {book.id} book = {book} deleteBook={this.props.deleteBook} editBook = {this.props.editBook}/>
      )
    })
    return (
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Year</th>
          <th>Editorial</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody className='scrollableTable'>{books}</tbody>
      </Table>
    )
  }
}
export default BookList;
