// electron example
// https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md

'use strict';

const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
const ipcMain = electron.ipcMain;



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;


// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});


  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;

  });


  // var caseWindow = new BrowserWindow({
  //   width: 400,
  //   height: 400,
  //   show: false,
  // })
  // caseWindow.loadURL('file://' + __dirname + '/case.html')


  // var prefsWindow = new BrowserWindow({
  //   width: 400,
  //   height: 400,
  //   show: false,
  // })
  // prefsWindow.loadURL('file://' + __dirname + '/prefs.html')



  // var editorWindow = new BrowserWindow({
  //   width: 100,
  //   height: 1
  //   00,
  //   show: false,
  // })
  // prefsWindow.loadURL('file://' + __dirname + '/editor.html')


  // ipcMain.on('toggle-editor', function() {
  //   if (editorWindow.isVisible()){
  //     editorWindow.hide()
  //   } else {
  //     editorWindow.show()
  //   }
  // })



  // ipcMain.on('show-case', function() {
  //   caseWindow.show()
  // })

  // ipcMain.on('hide-case', function() {
  //   caseWindow.hide()
  // })

  // ipcMain.on('show-prefs', function() {
  //   prefsWindow.show()
  // })

  // ipcMain.on('hide-prefs', function() {
  //   prefsWindow.hide()
  // })

  // ipcMain.on('close-main', function() {
  //   mainWindow.close()
  // })
});
