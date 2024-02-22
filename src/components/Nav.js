import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='d-flex justify-content-around align-items-center '>
        <Link to="/" className='link-underline link-underline-opacity-0'>Home</Link>
        &nbsp;&nbsp;
        <Link to="/about" className='link-underline link-underline-opacity-0'>About</Link>
        &nbsp;&nbsp;
        <Link to="/movies" className='link-underline link-underline-opacity-0'>Movies</Link>
        &nbsp;&nbsp;
    </div>
  )
}

export default Nav