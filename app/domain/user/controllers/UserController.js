const { catchError } = require('rxjs/operators')
const { throwError, concat, of } = require('rxjs')
const { validateUserInput, validateIdInput } = require('../functionals/UserControllerFunction')
const createUserScheme = require('../schemes/CreateUserScheme')
const getUserScheme = require('../schemes/GetUserScheme')
const UserBusiness = require('../business/UserBusiness')
var instance

class UserController {
  constructor() {
    this.UserBusiness = new UserBusiness()
  }

  mCreate(req, res) {
    const user = req.body

    if (validateUserInput(user)) {
      this.UserBusiness
        .mCreate(user)
        .pipe(
          catchError((err) => {
            return throwError(err)
          })
        )
        .subscribe(
          (user) => {
            console.log('next')
            res.json(createUserScheme(user))
          },
          (err) => {
            console.log(err)
            res.json(err)
          },
          () => {
            console.log('complete')
          }
        )
    } else {
      console.log('invalid input')
      res.json({ error: 'invalid input' })
    }
  }

  mListUser(req, res) {
    this.UserBusiness
      .mListUser()
      .pipe(
        catchError((err) => {
          return throwError(err)
        })
      )
      .subscribe(
        (users) => {
          console.log('next')
          res.json(users)
        },
        (err) => {
          console.log(err)
          res.json({ error: 'error' })
        },
        () => {
          console.log('complete')
        }
      )
  }

  mGetUser(req, res) {
    console.log(req.query.id)
    const userID = req.query ? req.query.id : ''

    console.log(Buffer.byteLength(req.query.id, 'utf8'))

    if (validateIdInput) {
      this.UserBusiness
        .mGetUser(userID)
        .pipe(
          catchError((err) => {
            return throwError(err)
          })
        )
        .subscribe(
          (user) => {
            console.log('next')
            res.json(getUserScheme(user))
          },
          (err) => {
            console.log('error')
            console.log(err)
            res.json({ error: err + '' })
          },
          () => {
            console.log('complete')
          }
        )
    } else {
      res.json(getUserScheme())
    }
  }
}

module.exports = (function() {
  if (!instance) {
    instance = new UserController()
  }
  return instance
})()
