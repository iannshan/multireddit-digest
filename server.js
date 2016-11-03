var express = require('express');

var GuessStorage = {
  add: function(guesses) {
    if (guesses < this.fewestGuesses) {
      this.fewestGuesses = guesses;
      console.log('fewest guesses updated to:', guesses);
    }
    return this.fewestGuesses;
  }
};

var createGuessStorage = function() {
  var guessStorage = Object.create(GuessStorage);
  guessStorage.fewestGuesses = 101;
  return guessStorage;
};

var storage = createGuessStorage();

var app = express();
app.use(express.static('build'));

app.get('/guesses', function(request, response) {
  response.json(storage.fewestGuesses);
  console.log('fetched guesses');
});

app.post('/guesses/:guesses', function(request, response) {
  var guesses = parseInt(request.params.guesses);
  storage.add(guesses);
});

app.listen(process.env.PORT || 8080, process.env.IP);
