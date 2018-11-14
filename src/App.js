import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import EmptyCard from './components/EmptyCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: pokedex
    };
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div className="App">
        {pokemon.length > 0 ? <Card pokemon={pokemon} /> : null}
        {pokemon.length === 0 ? <EmptyCard /> : null}
      </div>
    );
  }
}

const pokedex = [
  {
    id: 1,
    name: 'Abra',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/abra.svg'
  },
  {
    id: 2,
    name: 'Bellsprout',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/bellsprout.svg'
  },
  {
    id: 3,

    name: 'Bulbasaur',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/bullbasaur.svg'
  },
  {
    id: 4,

    name: 'Caterpie',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/caterpie.svg'
  },
  {
    id: 5,

    name: 'Charmander',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/charmander.svg'
  },
  {
    id: 6,

    name: 'Dranti',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/dratini.svg'
  },
  {
    id: 7,

    name: 'Eevee',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/eevee.svg'
  },
  {
    id: 8,

    name: 'Jigglypuff',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/jigglypuff.svg'
  },
  {
    id: 9,

    name: 'Mankey',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/mankey.svg'
  },
  {
    id: 10,

    name: 'Meowth',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/meowth.svg'
  },
  {
    id: 11,

    name: 'Mew',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/mew.svg'
  },
  {
    id: 12,

    name: 'Pidgey',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/pidgey.svg'
  },
  {
    id: 13,

    name: 'Pikachu',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/pikachu.svg'
  },
  {
    id: 14,

    name: 'Psyduck',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/psyduck.svg'
  },
  {
    id: 15,

    name: 'Rattata',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/rattata.svg'
  },
  {
    id: 16,

    name: 'Snorlax',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/snorlax.svg'
  },
  {
    id: 17,

    name: 'Squirtle',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/squirtle.svg'
  },
  {
    id: 18,

    name: 'Venonat',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/venonat.svg'
  },
  {
    id: 19,

    name: 'Weedle',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/weedle.svg'
  },
  {
    id: 20,

    name: 'Zubat',
    img: '/Users/DanielCross/Projects/pokemon-store/src/img/zubat.svg'
  }
];

export default App;
