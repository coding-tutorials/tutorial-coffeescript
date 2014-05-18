(function() {
  var Database, http;

  Database = (function() {
    var mongoClient;

    function Database() {}

    mongoClient = require('mongodb').mongoClient;

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

  http = require('http');

  http.createServer((function(_this) {
    return function(request, response) {
      var database;
      response.writeHead(200, {
        "Content-Type": "text/plain"
      });
      database = new Database();
      database.connectToDb();
      return response.end();
    };
  })(this)).listen(8888);

}).call(this);
