import React, {
  Component,
} from 'react';
import {
  Route, Switch, Link,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import { log } from "util";
import Progress from './components/Progress';
import Footer from './components/Footer';
import CollagePage from './components/CollagePage';
import Collage from './Components/Collage';
import dummydata from './dummydata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      cards: [],
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
    event.preventDefault();
    this.props.history.push('/progress');
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/progress"
          render={routeProps => (
            <div className="app">
              <Progress {...routeProps} />
              <Footer text="© 2018 TweetCollage. All Rights Reserved." />
            </div>
          )}
        />
        <Route
          exact
          path="/result/:id"
          render={routeProps => (
            <div className="app">
              <CollagePage
                {...routeProps}
                cards={this.state.cards}
                link={'make another'}
                introTitle=", your collage is done!"
                subTitle="Take a look . . ."
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
                introTitle=' '
                subTitle="collage"
              />
              <footer>© 2018 TweetCollage. All Rights Reserved.</footer>
            </div>
          )}
        />
        <Route
          path="/generator"
          render={() => (
            <div className="App">
              <Link to="/">Home</Link>
              <Collage
                query="dragonfly"
                dimensions={{
                  width: 1024,
                  height: 512,
                  columns: 4,
                  rows: 4,
                }}
              />
            </div>
          )}
        />
        <Route
          render={(routeProps) => (
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
              <Link to="/generator">To Collage Generator</Link>
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default App;
