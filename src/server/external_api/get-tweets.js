const  Twit = require('twit');
require('dotenv').config();

const variables = require('./variables')
const { TWITTER_AUTH } = variables;
const T = new Twit(variables.TWITTER_AUTH);

const getTweets = (user) => {
  const tweetList = [];
  T.get(`https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${user}&count=10`)
  .then(resp => {
    const tweets = resp.data;

    for (let tweet of tweets) {
      tweetList.push(tweet.text)
      console.log(tweet.text)
    }

    return tweetList;
  })
  .catch(err => console.log(err))
};

module.exports=getTweets;