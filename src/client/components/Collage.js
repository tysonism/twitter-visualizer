import React, { Component } from 'react';
import axios from 'axios';
import Canvas from './Canvas';

class Collage extends Component {
  constructor(props) {
    super(props);
    this.url = `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${props.query}`;
    this.state = {
      imageData: [],
      storedCollage: null,
    };
  }

  componentDidMount() {
    // Uses stored collage if available then exits method
  }

  render() {
    return (
      <div className="Collage">
        {this.state.imageData.length || this.state.storedCollage > 0 ? (
          <Canvas dimensions={this.props.dimensions} images={this.state.imageData} storedCollage={this.storedCollage} queryResults={this.props.queryResults} />
        ) : null}
      </div>
    );
  }
}

export default Collage;