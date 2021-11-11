const { app, BrowserWindow, Menu } = require ('electron');

app.on('ready', () =>{
    let win = new BrowserWindow({width: 1080, height: 720});
    win.setMenu(null);
    win.loadFile("C:/Users/Fernandez/Dev/ProyectoBoletos/Login/index.html")
    win.show()
    win.on('closed', () => {
        win = null;
        app.quit();

    });


});
