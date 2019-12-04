import React from 'react';
import './App.css';
import NewBook from './components/NewBook';
import BookList from './components/BookList';

let bookList = [], index = 1;
bookList.push({id: index++, name: 'It', author: 'Stephen King', year: '2020', editorial: 'FCE'});
bookList.push({id: index++, name: 'The Mist', author: 'Stephen King', year: '2020', editorial: 'FCE'});
bookList.push({id: index++, name: 'Pet Cemetary', author: 'Stephen King', year: '2020', editorial: 'FCE'});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: bookList
    }
  }
  addNewBook = (book) => {
    this.setState(prevState => {
      book.id = index++
      return {
        bookList: prevState.bookList.concat(book)
      }
    })
  }
  render () {
    return (
      <div>
        <header className="App-header">
          Library Inventory
        </header>
        <NewBook addNewBook = {this.addNewBook}/>
        <BookList bookList = {this.state.bookList}/>
      </div>
    );
  }
}

export default App;
