import { app, BrowserWindow } from "electron";
import path from "path";

app.on("ready", async () => {
	let win = new BrowserWindow({
		autoHideMenuBar: true,
		title: "Electron Training",
	});

	const indexHTML = path.join(__dirname + "/index.html");

	await win.loadFile(indexHTML);	

	win.setBounds({ width: 600, height: 320 });
});
