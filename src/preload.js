import { contextBridge } from 'electron'

import ApiIpcRenderer from '@/services/electron/api/ipcRenderer'

// Expose ipcRenderer to the client
contextBridge.exposeInMainWorld('ipcRenderer', ApiIpcRenderer)

//alert("It Worked!") // Remove this line once you confirm it worked
