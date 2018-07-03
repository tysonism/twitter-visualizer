import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GalleryCard from './GalleryCard';

export default class Gallery extends Component {
  render() {
    let cards = this.props.cards.map( card => <Link key={card.id}  to={`/collage/${card.id}`}><GalleryCard card={card} /></Link>);
    return (
      <div className="gallery">
        {cards}
      </div>
    )
  }
}