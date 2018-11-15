import React from 'react';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src={require('/Users/DanielCross/Projects/pokemon-store/src/img/pokeball.png')}
          alt="Pokeball"
        />
      </div>
    </header>
  );
};

export default Navbar;
