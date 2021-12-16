import { NavLink } from 'react-router-dom';

const links = [
  {
    id: '1',
    path: '/',
    name: 'Home',
  },
  {
    id: '2',
    path: '/categories',
    name: 'Categories',
  },
];
const NavBar = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <ul>
      {links.map((link) => <NavLink key={link.id} to={link.path}>{link.name}</NavLink>)}
    </ul>
  </header>
);

export default NavBar;
