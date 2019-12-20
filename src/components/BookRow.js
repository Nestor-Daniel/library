import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class BookRow extends React.Component{
  constructor(props) {
    super(props);
    this.state = props.book;
  }
  deleteRow = () => {
    this.props.deleteBook(this.state.id)
  }
  editBook = () => {
    this.props.editBook(this.state)
  }
  componentDidUpdate(prevProps) {
      if(this.props.book !== prevProps.book) {
        this.setState(this.props.book)
      }
  }
  render(){
    return (
      <tr>
        <td>{this.state.name}</td>
        <td>{this.state.author}</td>
        <td>{this.state.year}</td>
        <td>{this.state.editorial}</td>
        <td><Button variant="danger" size="sm" index = {this.state.id} onClick = {this.deleteRow}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button></td>
        <td><Button variant="primary" size="sm" onClick = {this.editBook}>
          <FontAwesomeIcon icon={faEdit} />
        </Button></td>
      </tr>
    )
  }
}
export default BookRow;
