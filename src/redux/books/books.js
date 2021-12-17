import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_ALL_BOOKS = 'bookStore/books/GET_ALL_BOOKS';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/A0Lbu1ca8dyx60LUdE0j/books';

const initialState = [];

export const getAllBooks = () => async (dispatch) => {
  const res = await axios.get(url);
  const books = res.data;
  const allBooks = Object.entries(books);
  const booksArray = [];
  allBooks.forEach(([key, book]) => {
    const id = key;
    const { title, category } = book[0];
    booksArray.push({ id, title, genre: category });
  });
  dispatch({
    type: GET_ALL_BOOKS,
    booksArray,
  });
};

export const addBook = ({ id, title, genre }) => async (dispatch) => {
  const res = await axios.post(url, {
    item_id: id,
    title,
    category: genre,
  });

  if (res.data === 'Created') {
    dispatch({
      type: ADD_BOOK,
      book: { id, title, genre },
    });
  }
};

export const removeBook = (id) => async (dispatch) => {
  const res = await axios.delete(`${url}/${id}`, {
    headers: {
      'content-type': 'application/json',
    },
  });

  const deletedBook = await res.data;

  if (deletedBook) {
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return [...action.booksArray];
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
