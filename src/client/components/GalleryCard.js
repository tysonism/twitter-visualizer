import React from 'react';

export default function GalleryCard(props) {
  let card = props.card;
  return (
    <div className="gallery-card">
      <img className="gallery-card__image" src={`./public/assets/img/${card.img}`} />
      <div className="gallery-card__details">
        <img className="gallery-card__details-thumb" src={`./public/assets/img/${card.img}`} />
        <div className="gallery-card__details-content">
          <div className="gallery-card__details-twitter">{card.user}</div>
          <div className="gallery-card__details-tweet">
            {card.text}
          </div>
        </div>
      </div>
    </div>
  );
}