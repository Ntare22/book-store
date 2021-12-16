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

const AddBook = () => (
  <div>
    <h2>Add New Book</h2>
    <div>
      <input type="text" />
      <select name="genres">
        {genres.map((genre) => <option key={genre.id} value={genre.name}>{genre.name}</option>)}
      </select>
      <input type="submit" />
    </div>

  </div>
);

export default AddBook;
