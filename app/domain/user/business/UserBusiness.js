const { map, take, flatMap } = require('rxjs/operators')
const { addNumber, addNumberTwo, addUserPoint } = require('../functionals/UserBusinessFunction')
const createUserModel = require('../models/CreateUserModel')
const UserRepository = require('../../repositories/UserRepository')

class UserBusiness {
  constructor() {
    this.userRepository = new UserRepository()
  }

  mCreate(user = {}) {
    const userModel = createUserModel(user)
    const observable = this.userRepository.mCreateUser(userModel).pipe(
      map((data) => {
        return data
      })
    )

    return observable
  }

  mGetUser(userId = '') {
    const observable = this.userRepository.mFindUser(userId).pipe(
      map((data) => {
        return data
      })
    )

    return observable
  }

  mListUser() {
    const observable = this.userRepository.mListAllUser().pipe(
      map((data) => {
        return addUserPoint(data)
      })
    )

    return observable
  }
}

module.exports = UserBusiness
