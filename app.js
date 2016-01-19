var express = require('express');
var morraCinese = require('./app/morra-cinese');

var app = express();

app.get('/match/:p1', function(req,res){
  var result = morraCinese.play(req.params.p1.toLowerCase());
  switch (result) {
    case 0:
      res.send('Pari!');
      break;
    case 1:
      res.send('Hai vinto!');
      break;
    case 2:
      res.send('Hai perso! :D');
      break;
    default:
      res.send('Ehi! Manda un input che sia \"sasso\", \"carta\" o \"forbice\"!');
  }
});

app.listen(3000, function(){
  console.log('Server started!');
});
