import React from 'react';

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNew: false,
      name: '',
      author: '',
      year: '',
      editorial: ''
    }
  }
  addNewBook = () => {
    debugger;
    this.setState({
      addNew: true
    });
  }
  cancelNew = () => {
    this.setState({
      addNew: false
    });
  }
  render() {
    let detailsPanel = this.state.addNew ? <div>
      <div className = 'section'>
        <span>Name</span><input type='text' ref='name'/>
      </div>
      <div>
        <span>Author</span><input type='text' ref='author'/>
      </div>
      <div>
        <span>Year</span><input type='text' ref='year'/>
      </div>
      <div>
        <span>Editorial</span><input type='text' ref='editorial'/>
      </div>
    </div> : null,
    cancelBtn = this.state.addNew ? <button type='button' onClick={this.cancelNew}>Cancel</button> : null;
    return (
      <div>
        <button type='button' onClick={this.addNewBook}>Add Book</button>{cancelBtn}
        {detailsPanel}
      </div>
    );
  }
}
export default NewBook;
