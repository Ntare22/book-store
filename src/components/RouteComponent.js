import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './Books';
import Categories from './Categories';
import NavBar from './NavBar';
import store from '../redux/configureStore';

const RouteComponent = () => (
  <>
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Provider>
  </>
);

export default RouteComponent;
