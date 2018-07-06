import React, {
  Component,
} from 'react';
import Canvas from './Canvas';
import Footer from './Footer';

export default class CollagePage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.id = props.match.params.id || props.queryResults.id;
    this.card = props.cards && props.cards.find(candidate => candidate.id === this.id, this);
    this.state = {
      isVisible: props.isVisible,
    }
    this.navigateHome = this.navigateHome.bind(this);
    this.updateVisibility = this.updateVisibility.bind(this);
  }

  updateVisibility() {
    this.setState({
      isVisible: true,
    });
  }

  navigateHome() {
    this.props.history.push('/');
  }

  render() {
    let resultImage = null;
    if (this.card) {
      resultImage = (
        <img
          className="result-collage__img"
          src={`../public/assets/img/placeholder-${this.id}.jpg`}
        />
      );
    } else if (
      this.props.queryResults.results.value
      && this.props.queryResults.results.value.length > 0
    ) {
      resultImage = (
        <Canvas
          id={this.id}
          history={this.props.history}
          match={this.props.history}
          location={this.props.history}
          images={this.props.queryResults.results.value}
          dimensions={this.props.dimensions}
          updateVisibility={this.updateVisibility}
        />
      );
    }
    return (
      <React.Fragment>
      <main>
        <div className={'result' + (this.state.isVisible ? ' visible': '')}>
          <div className="result__branding">
            <img
              className="result__logo"
              src="../public/assets/img/logo-blue.png"
              alt="TweetCollage logo"
            />
            <img
              className="result__wordmark"
              src="../public/assets/img/logo-wordmark-blue.png"
              alt="TweetCollage"
            />
          </div>
          <div className="result__intro">
            <span className="result__intro-title">{`${(this.card && this.card.user)
              || this.props.queryResults.user}${this.props.introTitle}`}</span>
            {this.props.subTitle}
          </div>
          <div className="result-collage">
            {resultImage}
            <img
              className="result-collage__thumb"
              src={`../public/assets/img/placeholder-user-${this.id}.png`}
            />
          </div>

          <button className="result__button" onClick={this.navigateHome}>
            {this.props.link}
          </button>
        </div>
      </main>
      <Footer text="© 2018 TweetCollage. All Rights Reserved." />
      </React.Fragment>
    );
  }
}
