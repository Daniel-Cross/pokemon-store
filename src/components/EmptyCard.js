import React from 'react';

const EmptyCard = () => {
  return (
    <div className="list--empty">
      <img
        src={require('/Users/DanielCross/Projects/pokemon-store/src/img/razz-berry.svg')}
        alt="raspberry"
      />
      <p>Aww, we don't currently have the Pokemon you're looking for.</p>
      <p>Here's a razzberry until we get it for you!</p>
    </div>
  );
};

export default EmptyCard;
