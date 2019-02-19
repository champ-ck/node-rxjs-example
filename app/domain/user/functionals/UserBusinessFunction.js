const addNumber = (user) => {
  let newUser = {
    ...user,
    number: 1,
  }

  return newUser
}

const addNumberTwo = (user) => {
  let newUser = {
    ...user,
    number_two: 2,
  }

  return newUser
}

const addUserPoint = (users = []) => {
  const newUserData = []

  users.map((data) => {
    newUserData.push({
      ...data,
      point: 100,
    })
  })

  return newUserData
}

module.exports = {
  addNumber: addNumber,
  addNumberTwo: addNumberTwo,
  addUserPoint: addUserPoint,
}
