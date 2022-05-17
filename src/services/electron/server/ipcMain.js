import { ipcMain } from 'electron'

ipcMain.on('asyncteste', (event, arg) => {
  console.log(arg) // prints "ping"
  event.reply('asynchronous-reply', 'pong')
})

ipcMain.handle('invoketeste', async (event, someArgument) => {
  console.log(someArgument);
  const result = await someArgument
  return result
})

ipcMain.on('syncteste', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = arg
})

export default ipcMain