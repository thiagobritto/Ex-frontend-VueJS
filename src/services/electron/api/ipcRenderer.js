import { ipcRenderer } from 'electron'

export default {
  send: (channel, data) => {
    let validChannels = ['teste'] // <-- Array of all ipcRenderer Channels used in the client
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data)
    }
  },
  sendSync: (channel, data) => {
    let validChannels = ['syncteste']
    if (validChannels.includes(channel)) {
      return ipcRenderer.sendSync(channel, data)
    }
  },
  invoke: (channel, data) => {
    let validChannels = ['invoketeste']
    if (validChannels.includes(channel)) {
      return new Promise((resove, reject) => {
        ipcRenderer.invoke(channel, data).then(res => {
          resove(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  },
  receive: (channel, func) => {
    let validChannels = ['nameOfElectronChannel'] // <-- Array of all ipcMain Channels used in the electron
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
  }
}