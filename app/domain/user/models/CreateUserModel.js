module.exports = (user) => {
  const userObj = {
    email: user.email,
    name: user.user,
  }

  return userObj
}
