import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          genre={book.genre}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default Books;
