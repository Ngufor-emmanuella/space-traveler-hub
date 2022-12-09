import { Outlet, NavLink } from 'react-router-dom';
import Logo from '../asset/planet.png';

const Navbar = () => (
  <>
    <header className="head first">
      <div className="logo flex">
        <img src={Logo} className="logo-on" alt="space logo" />
        <h2 className="logo-word">Space Travellers Hub</h2>
      </div>
      <ul className="Navigation flex">
        <li><NavLink to="/">Rockets</NavLink></li>
        <li><NavLink to="/missions">Missions</NavLink></li>
        <li><NavLink to="/my_profile">My Profile</NavLink></li>
      </ul>
    </header>
    <Outlet />
  </>
);

export default Navbar;
