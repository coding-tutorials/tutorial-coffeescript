(function() {
  var Database, Person, http;

  Database = (function() {
    var Server, mongo, mongoClient;

    function Database() {}

    mongo = require("mongodb/lib/mongodb");

    Server = require('mongodb').Server;

    mongoClient = require('mongodb').MongoClient;

    Database.prototype.connectToDb = function() {
      return mongoClient.connect('mongodb://localhost:27017/exampleDb', function(err, db) {
        if (!err) {
          return console.log("connected to mongo!");
        } else {
          return console.log("failed to connect to mongo :(");
        }
      });
    };

    return Database;

  })();

  Person = (function() {
    var collectionPerson;

    function Person() {}

    collectionPerson = db.collection("person");

    Person.prototype.insert = function(people) {
      return collectionPerson.insert(people, {
        W: 1
      }, function(err, result) {
        return console.log("foi " + result);
      });
    };

    return Person;

  })();

  insertPeopleIntoMongo(function() {
    var costa, john, people, rafaello;
    john = {
      "name": "John Kinera",
      "age": 19,
      "courses": ["math", "french"]
    };
    rafaello = {
      "name": "Rafaello J. Minessota",
      "age": 43,
      "courses": ["philosophem"]
    };
    costa = {
      "name": "Kliev K. Costa",
      "age": 23,
      "courses": ["french", "sciences"]
    };
    people = {
      john: john,
      rafaello: rafaello,
      costa: costa
    };
    return people;
  });

  http = require('http');

  http.createServer((function(_this) {
    return function(request, response) {
      response.writeHead(200, {
        "Content-Type": "text/plain"
      });
      insertPeopleIntoMongo();
      return response.end();
    };
  })(this)).listen(8080);

}).call(this);
