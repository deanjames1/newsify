import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-dark'>
      <h1 className='text-primary'>
        <span className='text-white'>{title}</span>.
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/About'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "newsify",
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
