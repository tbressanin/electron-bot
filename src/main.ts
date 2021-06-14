import { app, BrowserWindow } from "electron";
import path from "path";
 
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

app.on("ready", async () => {
	let win = new BrowserWindow({
		autoHideMenuBar: true,
		closable: false,
		resizable: false,
		maximizable: false,
		minimizable: false,
		title: "Electron Training",
	});

	const indexHTML = path.join(__dirname + "/assets/templates/index.html");

	await win.loadFile(indexHTML);	

	win.addListener('blur', () => {
			console.log('Event')
	})

	win.setBounds({ width: 768, height: 440});
});
