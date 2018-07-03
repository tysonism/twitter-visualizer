  const express = require("express");
  const path = require("path");
  const cluster = require('cluster');
  const numCPUs = require('os').cpus().length;
  const cors = require('cors');
  const getTweets = require('./external_api/get-tweets');
  const analyzeTweets = require('./external_api/watsonNatLangUnderstanding');

  const PORT = process.env.PORT || 8000;

  if (cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);

    
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });

  } else {
    
    
    const app = express();
    app.use(express.json())
    app.use(cors());
   
    app.post('/api/tweets', (req, res) => {
      const {user} = req.body;
      if (typeof user !== 'string') res.status(400).json({error: `Invalid input.  String expected. Received ${typeof user}`});
      
      const tweets = getTweets(user);

      if (!tweets) res.status(500).json({ error: "There was a server error."})

    })

    app.use(express.static(path.resolve(__dirname, '../../dist')));

    app.listen(PORT, function () {
      console.error(`Cluter ${process.pid} is listening on port ${PORT}`);
    });
  }
