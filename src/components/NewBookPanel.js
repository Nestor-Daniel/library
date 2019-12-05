import React from 'react';
import {Button, Form} from 'react-bootstrap';

class NewBookPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.bookDetails
  }
  saveData = () => {
    let book = this.state;
    this.props.addNewBook(book);
    this.props.cancel()
  }
  setValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  updateBook = () => {
    this.props.updateBook(this.state)
  }
  componentDidUpdate(prevProps) {
      if(this.props.bookDetails !== prevProps.bookDetails) {
        this.setState(this.props.bookDetails)
      }
  }
  render() {
    let saveBtn = this.props.addNew ? <Button variant="success" size="sm" type='submit' onClick={this.saveData}>Save</Button> : null,
        updateBtn =  this.props.editBook ? <Button variant="success" size="sm" type='submit' onClick={this.updateBook}>Update</Button> : null;
    return (
      <Form className = 'bookDetails'>
        <Form.Group>
          <Form.Control size="sm" type='text' placeholder = 'Name' name='name' value={this.state.name} onChange={this.setValue}/>
        </Form.Group>
        <Form.Group>
          <Form.Control size="sm" type='text' placeholder = 'Author' name='author' value={this.state.author} onChange={this.setValue}/>
        </Form.Group>
        <Form.Group>
          <Form.Control size="sm" type='text' placeholder = 'Year' name='year' value={this.state.year} onChange={this.setValue}/>
        </Form.Group>
        <Form.Group>
          <Form.Control size="sm" type='text' placeholder = 'Editorial' name='editorial' value={this.state.editorial} onChange={this.setValue}/>
        </Form.Group>
        {saveBtn} {updateBtn}
        <Button variant="secondary" size="sm" type='button' onClick={this.props.cancel}>Cancel</Button>
      </Form>
    );
  }
}
export default NewBookPanel;
