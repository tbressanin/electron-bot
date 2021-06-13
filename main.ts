import { app, BrowserWindow } from 'electron'

app.on('ready', () => {
	console.log('App is ready');
	let win = new BrowserWindow()
	win.setBounds({ x: 0, y: 0, width: 100, height: 100 })
}) 