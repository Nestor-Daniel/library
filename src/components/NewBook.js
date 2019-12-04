import React from 'react';
import NewBookPanel from './NewBookPanel';

class NewBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addNew: false
    }
  }
  addNewBook = () => {
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
    let detailsPanel = this.state.addNew ? <NewBookPanel cancelNew = {this.cancelNew} addNewBook={this.props.addNewBook}/> : null;
    return (
      <div>
        <button type='button' onClick={this.addNewBook}>Add Book</button>
        {detailsPanel}
      </div>
    );
  }
}
export default NewBook;
