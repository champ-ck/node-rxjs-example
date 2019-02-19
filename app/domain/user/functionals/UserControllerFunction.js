const ObjectID = require('mongodb').ObjectID

const validateUserInput = (input = {}) => {
  let validate = true

  if (!input.email) {
    validate = false
  }

  if (!input.user) {
    validate = false
  }

  return validate
}

const validateIdInput = (userId) => {
  let validate = true

  if (!ObjectID.isValid(userId)) {
    validate = false
  }

  return validate
}

module.exports = {
  validateUserInput: validateUserInput,
  validateIdInput: validateIdInput,
}
