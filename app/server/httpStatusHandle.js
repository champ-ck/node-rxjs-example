const httpStatusHandle = (req, res) => {
  if (res.status(500)) {
    res.send('error code: 500')
  } else if (res.status(404)) {
    res.send('error code: 404')
  }
}

module.exports = {
  httpStatusHandle: httpStatusHandle,
}
