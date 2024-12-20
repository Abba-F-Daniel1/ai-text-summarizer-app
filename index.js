const express = require('express');
const summarizeText = require('./summamarize.js');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Parses JSON bodies (as sent by API clients)
app.use(express.json());

// Enables CORS for all requests
app.use(cors({
  origin: ['https://ai-text-summarizer-app-chi.vercel.app', 'http://localhost:3000'], methods: ['POST']
}));

// Serves static files from the 'public' directory
app.use(express.static('public'));
// Routes
// Handle POST requests to the '/summarize' endpoint

app.post('/summarize', (req, res) => {

  // TODO: handle POST /summarize request

  // get the text_to_summarize property from the request body
  const text = req.body.text_to_summarize;

  // call your summarizeText function, passing in the text from the request
  summarizeText(text)
    .then(response => {
      res.send(response); // Send the summary text as a response to the client
    })
    .catch(error => {
      console.log(error.message);
    });


});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
