const language = require("@google-cloud/language");

const client = new language.LanguageServiceClient();

function tweets(tweets) {
  const document = {
    content: tweets,
    type: "PLAIN_TEXT"
  };

  client
    .annotateText({
      document: document,
      features: {
        classifyText: true,
        extractDocumentSentiment: true,
        extractEntities: true,
        extractEntitySentiment: true,
        extractSyntax: true
      }
    })
    .then(responses => {
      var response = responses[0];
      console.log(JSON.stringify(response));
      // doThingsWith(response)
    })
    .catch(err => {
      console.error(err);
    });

  client.annotateText({ document: document });
}

module.exports = tweets;
