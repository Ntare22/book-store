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
    <div className="book">
      <div className="book-details">
        <p id="genre">{genre}</p>
        <h2 id="title">{title}</h2>
        <div className="buttons">
          <button type="button">Comments</button>
          <button type="button" className="rmv-btn" onClick={() => deleteBook(id)}>Remove</button>
          <button type="button" className="edit-btn">Edit</button>
        </div>
      </div>
      <div className="book-progress">
        <div className="book-percentage">
          <span>64%</span>
          <p>completed</p>
        </div>
        <div className="current-chapter">
          <h4>Current Chapter</h4>
          <p>Chapter 17</p>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
