import React, {
  Component,
} from 'react';

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.user = '01';
  }

  componentDidMount() {
    const context = this;
    const progress = window.setTimeout(() => {
      context.props.history.push(`/result/${this.user}`);
    }, 1500);
  }

  render() {
    return (
      <main>
        <div className="progress">
          <div className="progress__content">
            <div className="progress__branding">
              <img
                className="progress__logo"
                src="/public/assets/img/logo.png"
                alt="TweetCollage logo"
              />
              <img
                className="progress__wordmark"
                src="/public/assets/img/logo-wordmark-white.png"
                alt="TweetCollage"
              />
            </div>
            <div className="progress__message">
              <span className="progress__message-headline">Hold on tight!</span>We're creating your
              collage . . .
            </div>
            <ul className="progress__list">
              <li className="progress__item">1. Gathering tweets</li>
              <li className="progress__item">2. Analyzing words</li>
              <li className="progress__item">3. Finding images</li>
              <li className="progress__item">4. Mixing it all together</li>
            </ul>
            <div className="progress__done">Done!</div>
          </div>
        </div>
      </main>
    );
  }
}
