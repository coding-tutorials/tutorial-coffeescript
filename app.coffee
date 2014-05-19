class Database
  mongo = require "mongodb/lib/mongodb" 
  Server = require('mongodb').Server
  mongoClient = require('mongodb').MongoClient
  mongo = null

  constructor: ()->
    @connectToDb()

  connectToDb: () ->
    mongoClient.connect 'mongodb://localhost:27017/exampleDb', (err,db) ->
      unless err
        @mongo = db
        console.log "connected to mongo!"
      else
        console.log "failed to connect to mongo :("

class PersonRepository
  collectionPerson = null

  constructor: ()->
    db = new Database()
    mongoloide = db.mongo
    @collectionPerson = mongoloide("person")

  insert: (people) ->
    collectionPerson.insert people, {W:1}, (err, result) ->
      console.log "foi " + result

insertPeopleIntoMongo= () ->
  john = {
    "name": "John Kinera",
    "age": 19,
    "courses" : ["math","french"]
  }

  rafaello = {
    "name": "Rafaello J. Minessota",
    "age": 43,
    "courses" : ["philosophem"]
  }

  costa = {
    "name": "Kligitev K. Costa",
    "age": 23,
    "courses" : ["french", "sciences"]
  }

  people = {john, rafaello, costa}
  personRepository = new PersonRepository()
  personRepository.insert people
  return people

http = require('http')
http.createServer((request, response) =>
  response.writeHead 200, {"Content-Type": "text/plain"}

  console.log "initializing"
  insertPeopleIntoMongo()

  response.end()
).listen(8080)



