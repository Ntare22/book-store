import { Routes, Route } from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';
import NavBar from './NavBar';

const RouteComponent = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default RouteComponent;
