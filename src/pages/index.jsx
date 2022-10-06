import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import './home.css';

function Home() {
  return (
    <div className="container">
      <Button link="kamado" title="Kamado" btnClass="button-1" />
      <Button link="nezuko" title="Nezuko" btnClass="button-2" />
      <Button link="colossal" title="Colossal" btnClass="button-3" />
      <Button link="saiyan" title="Super saiyan" btnClass="button-5" />
    </div>
  );
}

export default Home;
