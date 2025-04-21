import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Navbar = ({ cartCount, toggleCart }) => (
  <nav className="navbar navbar-dark bg-dark px-4">
    <a className="navbar-brand" href="/">🛍️ Shopping Cart Application</a>
    <button className="btn btn-outline-light position-relative" onClick={toggleCart}>
      <ShoppingCart size={20} />
      {cartCount > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {cartCount}
        </span>
      )}
    </button>
  </nav>
);

export default Navbar;
