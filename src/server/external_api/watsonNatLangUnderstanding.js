const NaturalLanguageUnderstandingV1 = require("watson-developer-cloud/natural-language-understanding/v1");
const variables = require('./variables');

const { WATSON_URI, WATSON_USERNAME, WATSON_PASSWORD } = variables;
const analyzeTweets = text => {
  const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({ url: WATSON_URI, username: WATSON_USERNAME, password: WATSON_PASSWORD });

  const parameters = {
    text,
    features: {
      categories: {
        concepts: {
          limit: 10
        },
        emotion: {
          document: true
        },
        sentiment: true,
        keywords: true
      },
      entities: {
        limit: 50
      },
      keywords: {
        limit: 10
      }
    },
    clean: true
  };

  naturalLanguageUnderstanding.analyze(parameters, function(err, response) {
    if (err) console.log(err);
    else return JSON.stringify(response, null, 2);
  });
};

module.exports=analyzeTweets;