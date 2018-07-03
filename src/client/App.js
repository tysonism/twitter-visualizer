import React, {
  Component,
} from 'react';
import {
  Route, Switch, Link
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
    this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this);
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

  handleSearchKeyPress(event) {
    // if (event.key === 'Enter') {
    //   this.handleSearchSubmit(event);
    // }
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/progress"
          render={(routeProps) => (
            <div className="app">
              <Progress {...routeProps}    />
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
                link={'make another'}
                introTitle="Your collage is done!"
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
                link={'home'}
                introTitle='@user'
                subTitle="collage"
              />
              <footer>© 2018 TweetCollage. All Rights Reserved.</footer>
            </div>
          )}
        />
        <Route
          path='/generator'
          render={
            ()=>(
              <div className="App">
                <Link to='/'>Home</Link>
                <Collage query="balloons" />
              </div>)
          }

        />
        <Route
          render={() => (
            <div className="app">
              <Header
                searchInput={this.state.searchInput}
                handleChange={this.handleSearchInput}
                handleSubmit={this.handleSearchSubmit}
                handleKeyPress={this.handleSearchKeyPress}
              />
              <main>
                <Gallery cards={this.state.cards} />
              </main>
              <Footer text="© 2018 TweetCollage. All Rights Reserved." />
              <Link to='/generator'>To Collage Generator</Link>
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default App;
