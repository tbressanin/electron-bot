import { app, BrowserWindow } from 'electron'

app.on('ready', () => {
	let win = new BrowserWindow()
	win.setBounds({width: 600, height: 100 })
}) 