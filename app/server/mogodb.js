const MongoClient = require('mongodb').MongoClient
const config = require('../config/config')
var connectionInstance

module.exports = function(callback) {
  callback = callback || function() {}
  if (connectionInstance) {
    callback(null, connectionInstance)
    return
  }

  MongoClient.connect(
    config.mongoConnection,
    { useNewUrlParser: true },
    (error, databaseConnection) => {
      if (error) {
        callback(error)
      } else {
        console.log('new Instance')
        connectionInstance = databaseConnection.db('exampleDb')
        callback(null, connectionInstance)
      }
    }
  )
}
