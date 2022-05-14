
const error = {}

error.check = function (response, callback) {
  let err = false

  switch (response.status) {
    case 400:
      err = true
      break;
    case 401:
      err = true
      break;
    default:
      err = false
      break;
  }

  callback(err, {
    status: response.status, 
    statusText: response.statusText, 
    data: response.data
  })
}

export default error
