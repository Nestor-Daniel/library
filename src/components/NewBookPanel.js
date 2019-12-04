import React from 'react';

class NewBookPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      author: '',
      year: '',
      editorial: ''
    }
  }
  saveData = () => {
    let book = this.state;
    this.props.addNewBook(book);
    this.setState({
      name: '',
      author: '',
      year: '',
      editorial: ''
    });
    this.props.cancelNew()
  }
  setValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div className = 'section'>
          <span>Name</span><input type='text' name='name' onChange={this.setValue}/>
        </div>
        <div>
          <span>Author</span><input type='text' name='author'onChange={this.setValue}/>
        </div>
        <div>
          <span>Year</span><input type='text' name='year'onChange={this.setValue}/>
        </div>
        <div>
          <span>Editorial</span><input type='text' name='editorial'onChange={this.setValue}/>
        </div>
        <button type='button' onClick={this.props.cancelNew}>Cancel</button>
        <button type='button' onClick={this.saveData}>Save</button>
      </div>
    );
  }
}
export default NewBookPanel;
