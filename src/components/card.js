import React, { Component } from 'react';
import '../styles/card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Card">
        <div class="wrapper">
          <div class="list">
            <div class="listItem">
              <img
                src={require('/Users/DanielCross/Projects/pokemon-store/src/img/abra.svg')}
                alt="Abra"
                title="Abra"
              />
              <h3 class="listItem__name">Pikachu</h3>
              <div class="listItem__price">
                <div class="listItem__priceTxt">$40</div>
              </div>
              <div class="listItem__addButton">Add to Card</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
