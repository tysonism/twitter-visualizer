import React, {
  Component,
} from 'react';
import {
  Route, Switch, Link,
} from 'react-router-dom';
import './App.css';
import {
  EPROTONOSUPPORT,
} from 'constants';
import {
  ENGINE_METHOD_NONE,
} from 'constants';
import {
  log,
} from 'util';
import axios from 'axios';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Progress from './components/Progress';
import Footer from './components/Footer';
import CollagePage from './components/CollagePage';
import Collage from './Components/Collage';
import dummydata from './dummydata';

class App extends Component {
  constructor(props) {
    super(props);
    this.serverUrl = 'https://tweetcollage.herokuapp.com/api/tweets';
    this.dimensions = {
      width: 1024,
      height: 512,
      columns: 5,
      rows: 2,
    };
    this.state = {
      searchInput: '',
      cards: [],
      queryResults: {
        results: {
          value: [],
        },
        user: '',
        id: '',
      },
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      cards: dummydata.cards,
    });
  }

  handleSearchInput(event) {
    this.setState({
      searchInput: event.target.value,
    });
  }

  handleSearchSubmit(event) {
    const context = this;
    event.preventDefault();
    // axios
    //   .post(this.serverUrl, this.state.searchInput)
    //   .then((response) => {
    //     this.setState({
    //       queryResults: response.data,
    //     }, () => { context.props.history.push(`/result/${response.data.id}`); });
    //   })
    //   .catch(err => console.log(err));
    axios({
      method: 'get',
      url: `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${
        this.state.searchInput
      }&size=medium&aspect=Tall`,
      headers: {
        'Ocp-Apim-Subscription-Key': 'c24662dcb15b4e9391b74fdf5279e2bb',
      },
    })
      .then((response) => {
        const move = () => this.props.history.push('/generate/');
        this.setState(
          {
            searchInput: '',
            queryResults: {
              id: '01',
              user: '@batman',
              results: response.data,
            },
          },
          move,
        );
      })
      .catch((response) => {
        console.log('error :', response);
      });
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/generate/"
          render={routeProps => (
            <div className="app">
              <Progress {...routeProps} />
              <Footer text="© 2018 TweetCollage. All Rights Reserved." />
            </div>
          )}
        />
        <Route
          path="/generate/:id?"
          render={routeProps => (
            <div className="result--background app">
              <CollagePage
                {...routeProps}
                link={'make another'}
                introTitle=", your collage is done!"
                subTitle=" Take a look . . ."
                queryResults={this.state.queryResults}
                isVisible={false}
                dimensions = {this.dimensions}
              />
              <footer>© 2018 TweetCollage. All Rights Reserved.</footer>
            </div>
          )}
        />
        <Route
          exact
          path="/collage/:id"
          render={routeProps => (
            <div className="app">
              <CollagePage
                {...routeProps}
                cards={this.state.cards}
                link={'home'}
                introTitle=" "
                subTitle="collage"
                queryResults={this.state.queryResults}
                isVisible={true}
                dimensions={this.dimensions}
              />
              <footer>© 2018 TweetCollage. All Rights Reserved.</footer>
            </div>
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <div className="app">
              <Header
                searchInput={this.state.searchInput}
                handleChange={this.handleSearchInput}
                handleSubmit={this.handleSearchSubmit}
              />
              <main>
                <Gallery {...routeProps} cards={this.state.cards} />
              </main>
              <Footer text="© 2018 TweetCollage. All Rights Reserved." />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
