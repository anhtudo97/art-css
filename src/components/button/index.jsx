import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Button({ title, link, btnClass }) {
  return (
    <Link to={link} className={`button ${btnClass}`}>
      <div>{title}</div>
    </Link>
  );
}

export default Button;
