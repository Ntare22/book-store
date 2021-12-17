import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../redux/books/books';
import AddBook from './AddBook';
import Book from './Book';
import Scroll from './Scroll';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);
  const books = useSelector((state) => state.booksReducer);
  return (
    <div className="container">
      <Scroll>
        <div className="books">
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              genre={book.genre}
            />
          ))}
        </div>
      </Scroll>
      <div className="add-book">
        <AddBook />
      </div>
    </div>
  );
};

export default Books;
