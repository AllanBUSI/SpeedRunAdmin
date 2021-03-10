const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      webSecurity: true,
      contextIsolation: true,
      preload: __dirname + '/preload.js',
      icon: __dirname + '/public/favicon.ico'
    },
    show: false,
  });
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.openDevTools()

  mainWindow.maximize(); // plein écran
  mainWindow.loadURL(
    'http://localhost:3000'
  );
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});