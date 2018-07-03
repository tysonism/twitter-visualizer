import React, { Component } from 'react';
import GalleryCard from './GalleryCard';

export default class Gallery extends Component {
  render() {
    let cards = this.props.cards.map( card => <GalleryCard key={card.id} card={card} />);
    return (
      <div className="gallery">
        {cards}
      </div>
    )
  }
}