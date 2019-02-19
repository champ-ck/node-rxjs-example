const mongo = require('../../server/mogodb')
const { bindNodeCallback, bindCallback, from } = require('rxjs')
const ObjectID = require('mongodb').ObjectID
const mongoInstance = bindNodeCallback(mongo)
const { map, take, flatMap } = require('rxjs/operators')

class UserRepository {
  constructor() {
    this.database = mongoInstance().pipe(
      map((db) => {
        const collection = db.collection('user')
        return collection
      })
    )
  }

  mCreateUser(user = {}) {
    const create = this.database.pipe(
      flatMap((collection) => {
        const dbCallback = (callback) => {
          collection.insertOne(user, (error, data) => {
            callback(error, data.ops[0])
          })
        }
        const callback = bindNodeCallback(dbCallback)
        const observable = callback()

        return observable
      })
    )

    return create
  }

  mFindUser(userId) {
    const observable = this.database.pipe(
      flatMap((collection) => {
        const dbCallback = (callback) => {
          const query = {
            _id: ObjectID(userId),
          }

          collection.findOne(query, (error, data) => {
            console.log(data)
            callback(error, data)
          })
        }
        const callback = bindNodeCallback(dbCallback)
        const observable = callback()

        return observable
      })
    )

    return observable
  }

  mListAllUser() {
    const observable = this.database.pipe(
      flatMap((collection) => {
        const dbCallback = (callback) => {
          collection
            .find({})
            .limit(10)
            .toArray((error, data) => {
              callback(error, data)
            })
        }
        const callback = bindNodeCallback(dbCallback)
        const observable = callback()

        return observable
      })
    )

    return observable
  }
}

module.exports = UserRepository
