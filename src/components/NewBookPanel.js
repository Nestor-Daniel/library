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
  render() {
    let saveBtn = this.props.addNew ? <Button variant="success" type='button' onClick={this.saveData}>Save</Button> : null,
        updateBtn =  this.props.editBook ? <Button variant="success" type='button' onClick={this.updateBook}>Update</Button> : null;
    return (
      <div>
        <div className = 'bookDetails'>
          <Form.Label>Name</Form.Label><input type='text' name='name' value={this.state.name} onChange={this.setValue}/>
        </div>
        <div>
          <span>Author</span><input type='text' name='author' value={this.state.author} onChange={this.setValue}/>
        </div>
        <div>
          <span>Year</span><input type='text' name='year' value={this.state.year} onChange={this.setValue}/>
        </div>
        <div>
          <span>Editorial</span><input type='text' name='editorial' value={this.state.editorial} onChange={this.setValue}/>
        </div>
        <Button variant="secondary" type='button' onClick={this.props.cancel}>Cancel</Button>
        {saveBtn} {updateBtn}
      </div>
    );
  }
}
export default NewBookPanel;
