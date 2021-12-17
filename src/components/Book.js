import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  id, genre, title,
}) => {
  const dispatch = useDispatch();
  const deleteBook = (book) => {
    dispatch(removeBook(book));
  };
  return (
    <div>
      <p id="genre">{genre}</p>
      <h2 id="title">{title}</h2>
      <button type="button" onClick={() => deleteBook(id)}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
