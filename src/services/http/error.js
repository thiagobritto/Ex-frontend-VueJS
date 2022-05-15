
const error = {}

error.check = function (response, callback) {
  let isFatal = false
  let title = ''
  let message = ''

  switch (response.status) {
    case 0:
      isFatal = true
      title = 'Server off..: 0'
      message = 'Contate o suporte técnico'
      break;
    case 400:
      isFatal = false
      title = 'bed request'
      message = 'Erro com requisição ma eleborada!'
      break;
    case 401:
      isFatal = false
      title = 'unauthorizad'
      message = 'Não altorizado!'
      break;
    case 404:
      isFatal = true
      title = 'Server not found..: 404'
      message = 'Contate o suporte técnico'
      break;
    case 500:
      isFatal = true
      title = 'Server error..: 500'
      message = 'Contate o suporte técnico'
      break;
    default:
      isFatal = false
      break;
  }

  callback(isFatal, title, message)
}

export default error
