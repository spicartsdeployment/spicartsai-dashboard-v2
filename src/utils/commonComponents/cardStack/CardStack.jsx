// CardStack.js
import React from 'react';
import './CardStack.css'; // Import the CSS styles

const CardStack = ({ title, content }) => {
  return (
    <div className="card-stack">
      <div className="card card-3"></div>
      <div className="card card-2"></div>
      <div className="card card-1">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default CardStack;



        // <div className="features-grid">
        //   {cardStackData.map((card) => (
        //     <CardStack key={card.id} title={card.title} content={card.content} />
        //   ))}
        // </div>