import React, {
  Component,
} from 'react';
import Footer from './Footer'

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.user = '01';
  }

  render() {
    return (
      <React.Fragment>
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
      <Footer text="© 2018 TweetCollage. All Rights Reserved." />
      </React.Fragment>
    );
  }
}
