module.exports = {
  port: process.env.PORT || 3000,
  mongoConnection: process.env.MONGO_CONNECTION || 'mongodb://localhost:27017',
}
