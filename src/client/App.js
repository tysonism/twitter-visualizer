import React from "react";
import "./App.css";
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import dummydata from './dummydata.js';

const handleClick = (e) => {
event.target.classList.add('rocket')
}
const App = () => 
  (<div className='app'>
    <Header />
    <Gallery cards = { dummydata.cards }/>
    <Footer text='© 2018 TweetCollage. All Rights Reserved.'/>
  </div>
);
export default App;
