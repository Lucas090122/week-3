import Book from './component/Book.js';
import booksData from './booksData';

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
  {booksData.map((book) => <Book key={book.id}  book={book} name="sami"/>)} 
      </div>
    </div>
  );
}

export default App;
