import React from 'react';
import '../styles/homeHero.scss';

function homeHero() {
  return (
    <div className='container-outer'>
      <div className='container hero'>
        <div className='hero-1' />
        <div className='hero-2' />
        <div className='hero-3'>
          <div className='hero-3-text'>
            <h1>Souther California Photographer</h1>
            <p>Based in Orange County, but ready to capture moments anywhere.</p>
          </div>
          <div className='hero-3-image' />
        </div>
      </div>
    </div>
  );
}

export default homeHero;