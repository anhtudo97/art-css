import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="container">
      <Link to="kamado" className="item btn-red">
        <div>Kamado</div>
      </Link>
      <Link to="nezuko" className="item btn-green">
        <div>Nezuko</div>
      </Link>
      <Link to="saiyan" className="item btn-warning">
        <div>Super Saiyan</div>
      </Link>
      <Link to="colossal" className="item btn-orange">
        <div>Colossal</div>
      </Link>
    </div>
  );
}

export default Home;
