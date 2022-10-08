import React from 'react';
import './style.scss';

export default function Nezuko() {
  return (
    <section className="wrapper_nezuko">
      <div className="nezuko">
        <div className="u-neck"></div>
        <div className="neck"></div>
        <div className="ear-r"></div>
        <div className="ear-l"></div>
        <div className="face">
          <div className="u-eye"></div>
          <div className="eye-r"></div>
          <div className="eye-r-u">
            <div></div>
          </div>
          <div className="eye-l"></div>
          <div className="eye-l-u">
            <div></div>
          </div>
          <div className="nose"></div>
          <div className="mouth">
            <div></div>
          </div>
        </div>
        <div className="hair">
          <div className="h1"></div>
          <div className="h2"></div>
          <div className="h3"></div>
          <div className="h4"></div>
        </div>
        <div className="ribbon">
          <div></div>
        </div>
      </div>
    </section>
  );
}
