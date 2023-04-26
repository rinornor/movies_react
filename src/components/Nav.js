import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
        <Link to="/">Home</Link>
        &nbsp;&nbsp;
        <Link to="/about">About</Link>
        &nbsp;&nbsp;
        <Link to="/movies">Movies</Link>
        &nbsp;&nbsp;
    </div>
  )
}

export default Nav