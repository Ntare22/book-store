import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');

  const dispatch = useDispatch();

  const genres = [
    {
      id: 1,
      name: 'Science Fiction',
    },
    {
      id: 2,
      name: 'Adventure',
    },
    {
      id: 3,
      name: 'Action',
    },
    {
      id: 4,
      name: 'Economy',
    },
  ];

  const handleTitle = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleGenre = (e) => {
    e.preventDefault();
    setGenre(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      id: uuidv4(),
      title,
      genre,
    };
    dispatch(addBook(newBook));
  };
  return (
    <div>
      <h2>Add New Book</h2>
      <div>
        <input
          id="title"
          placeholder="Title of the Book"
          type="text"
          onChange={handleTitle}
        />
        <select id="genres" name="genres" value={genre} onChange={handleGenre} required>
          <option>Pick Genre</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
        <button onClick={submitBookToStore} type="button">
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddBook;
