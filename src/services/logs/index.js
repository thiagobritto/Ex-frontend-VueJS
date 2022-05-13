
const log = {}
//document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";


log.ms = (key, value, days) => {
  let validate = (validate) ? `; expires=${log.now(days)}` : ''
  document.cookie = `${key}=${value || ''}${validate}; path=/`
}

log.json = (key, value, days) => {
  value = JSON.stringify(value)
  let validate = (validate) ? `; expires=${log.now(days)}` : ''
  document.cookie = `INFO [ ${key} ] ( ${log.now()} )=${value || ''}${validate}; path=/`
}


log.now = (days = 0) => {
  let date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 100))
  return date.toUTCString()
}

export default log
