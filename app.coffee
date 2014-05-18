class Database
  mongoClient = require('mongodb').mongoClient

  connectToDb: () ->
    mongoClient.connect 'mongodb://localhost:27017/exampleDb', (err,db) ->
      unless err
        console.log "connected to mongo!"
      else
        console.log "failed to connect to mongo :("

http = require('http')
http.createServer((request, response) =>
  response.writeHead(200, {"Content-Type": "text/plain"});

  database = new Database()
  database.connectToDb()

  response.end();
).listen(8888)