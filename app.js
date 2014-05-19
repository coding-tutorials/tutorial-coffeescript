(function() {
  var Database, PersonRepository, http, insertPeopleIntoMongo;

  Database = (function() {
    var Server, mongo, mongoClient;

    mongo = require("mongodb/lib/mongodb");

    Server = require('mongodb').Server;

    mongoClient = require('mongodb').MongoClient;

    mongo = null;

    function Database() {
      this.connectToDb();
    }

    Database.prototype.connectToDb = function() {
      return mongoClient.connect('mongodb://localhost:27017/exampleDb', function(err, db) {
        if (!err) {
          this.mongo = db;
          return console.log("connected to mongo!");
        } else {
          return console.log("failed to connect to mongo :(");
        }
      });
    };

    return Database;

  })();

  PersonRepository = (function() {
    var collectionPerson;

    collectionPerson = null;

    function PersonRepository() {
      var db, mongoloide;
      db = new Database();
      mongoloide = db.mongo;
      this.collectionPerson = mongoloide("person");
    }

    PersonRepository.prototype.insert = function(people) {
      return collectionPerson.insert(people, {
        W: 1
      }, function(err, result) {
        return console.log("foi " + result);
      });
    };

    return PersonRepository;

  })();

  insertPeopleIntoMongo = function() {
    var costa, john, people, personRepository, rafaello;
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
      "name": "Kligitev K. Costa",
      "age": 23,
      "courses": ["french", "sciences"]
    };
    people = {
      john: john,
      rafaello: rafaello,
      costa: costa
    };
    personRepository = new PersonRepository();
    personRepository.insert(people);
    return people;
  };

  http = require('http');

  http.createServer((function(_this) {
    return function(request, response) {
      response.writeHead(200, {
        "Content-Type": "text/plain"
      });
      console.log("initializing");
      insertPeopleIntoMongo();
      return response.end();
    };
  })(this)).listen(8080);

}).call(this);
