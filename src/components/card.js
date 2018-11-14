import React, { Component } from 'react';
import CardItem from './CardItem';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { pokemon } = this.props;
    return (
      <div className="list">
        {pokemon.map(pokemon => (
          <CardItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    );
  }
}

export default Card;
