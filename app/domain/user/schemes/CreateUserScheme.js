module.exports = (user = {}) => {
  let userScheme = {
    id: user._id,
    name: user.name || '',
    email: user.email || '',
  }

  return userScheme
}
