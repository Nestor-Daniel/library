import React from 'react';
import NewBookPanel from './NewBookPanel';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from "@fortawesome/free-solid-svg-icons";

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNew: props.addNew,
      editBook: props.editBook,
      bookDetails: props.bookDetails
    }
  }
  render() {
    let detailsPanel = this.props.addNew || this.props.editBook ? <NewBookPanel cancel = {this.props.cancel} bookDetails = {this.props.bookDetails} addNewBook={this.props.addNewBook} addNew={this.props.addNew} editBook = {this.props.editBook} updateBook = {this.props.updateBook}/> : null;
    return (
      <div>
        <Button variant="primary" size="sm" type='button' onClick={this.props.addBook}>
          Add <FontAwesomeIcon icon={faBook} />
        </Button>
        {detailsPanel}
      </div>
    );
  }
}
export default NewBook;
