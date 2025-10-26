
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function NavBar() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);


  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/">
  <i className="bi bi-house-door-fill"></i> 
  <span className="brand-text">NEWHOME</span>
</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Furnitures
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blog"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Blog
              </NavLink>
            </li>


          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link">
                🛒 Cart ({totalQuantity})
              </NavLink>
            </li>
            <li className="nav-item ms-auto">
              <NavLink
                to="/login"
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                <FontAwesomeIcon icon={faRightToBracket} className="me-2" />
                Login
              </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default NavBar;