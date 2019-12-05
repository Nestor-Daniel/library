import React from 'react';
import './App.css';
import NewBook from './components/NewBook';
import BookList from './components/BookList';

let bookList = [], index = 1;
bookList.push({id: index++, name: 'It', author: 'Stephen King', year: '1986', editorial: 'FCE'});
bookList.push({id: index++, name: 'The Mist', author: 'Stephen King', year: '1985', editorial: 'FCE'});
bookList.push({id: index++, name: 'Pet Cemetary', author: 'Stephen King', year: '1983', editorial: 'FCE'});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: bookList,
      addNew: false,
      editBook: false,
      bookDetails: {
        name: '',
        author: '',
        year: '',
        editorial: '',
        id: 0
      }
    }
  }
  addNewBook = book => {
    this.setState(prevState => {
      book.id = index++
      return {
        bookList: prevState.bookList.concat(book)
      }
    })
  }
  addBook = () => {
    this.setState({
      addNew: true
    });
  }
  deleteBook = index => {
      this.setState(prevState => {
        return {
          bookList: prevState.bookList.filter(item => {
            return item.id !== index
          })
        }
      })
  }
  updateBook = book => {
    this.setState(prevState => {
      return {
        bookList: prevState.bookList.map(item => {
          if(book.id === item.id) {
            return book
          } else {
            return item
          }
        })
      }
    })
    this.cancel();
  }
  editBookDetails = book => {
    this.setState(prevState => {
      return {
        editBook: true,
        bookDetails: book
      }
    });
  }
  cancel = () => {
    this.setState({
      addNew: false,
      editBook:false,
      bookDetails: {
        name: '',
        author: '',
        year: '',
        editorial: '',
        id: 0
      }
    });
  }
  render () {
    return (
      <div>
        <h1 className="App-header">
          Library Inventory
        </h1>
        <NewBook addNewBook = {this.addNewBook} addNew={this.state.addNew} addBook = {this.addBook} updateBook={this.updateBook} editBook={this.state.editBook} cancel = {this.cancel} bookDetails = {this.state.bookDetails}/>
        <BookList bookList = {this.state.bookList} editBook={this.editBookDetails} deleteBook={this.deleteBook}/>
      </div>
    );
  }
}

export default App;
