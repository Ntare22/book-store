import PropTypes from 'prop-types';

const Book = ({ genre, title, author }) => (
  <div>
    <p id="genre">{genre}</p>
    <h2 id="title">{title}</h2>
    <p id="author">{author}</p>
  </div>
);

Book.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
