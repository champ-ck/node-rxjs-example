module.exports = (user = {}) => {
  if (user) {
    let userScheme = {
      id: user._id,
      name: user.name || '',
      email: user.email || '',
    }

    return userScheme
  } else {
    return {}
  }
}
