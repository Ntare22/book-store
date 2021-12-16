import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

const books = [
  {
    id: 1,
    genre: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    percentageCompleted: 40,
    currentChapter: '17',
    commments: [],
  },
  {
    id: 2,
    genre: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    percentageCompleted: 8,
    currentChapter: '12',
    commments: [],
  },
];

const Books = () => (
  <div>
    {books.map((book) => (
      <Book
        key={book.id}
        genre={book.genre}
        title={book.title}
        author={book.author}
      />
    ))}
    <AddBook />
  </div>
);

export default Books;
