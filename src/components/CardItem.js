import React from 'react';
import '../styles/Card.css';

const CardItem = props => {
  const { pokemon } = props;
  console.log(pokemon);
  return (
    <div className="listItem">
      <img src={pokemon.img} alt={pokemon.name} title={pokemon.name} />
      <h3 className="listItem__name">{pokemon.name}</h3>
      <div className="listItem__price">
        <div className="listItem__priceTxt">$40</div>
      </div>
      <div className="listItem__addButton">Add to Card</div>
    </div>
  );
};

export default CardItem;
