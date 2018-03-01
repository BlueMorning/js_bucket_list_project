const express       = require('express');
const parser        = require('body-parser');
const server        = express();
const MongoClient   = require('mongodb').MongoClient;
const ObjectID      = require('mongodb').ObjectID;


server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));



server.get("/countries", function(req, res){



  

})






server.listen(3000, function(){
  console.log('I have Hatamoto!');
});
