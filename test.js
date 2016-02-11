document.write('test text!')

const remote = require('electron').remote
const ipcRenderer = require('electron').ipcRenderer
var Menu = remote.Menu

var menu = Menu.buildFromTemplate([
	{
		label: 'Test',
		submenu: [
			{
				label: 'New...',
				click: function() {
					ipcRenderer.send('show-case')
				}
			}, {
				label: 'Edit',
				click: function() {
					ipcRenderer.send('toggle-editor')
				}
			}, {
				label: 'Prefs',
				click: function() {
					ipcRenderer.send('show-prefs')
				}
			},{
				label: 'Close',
				click: function() {
					ipcRenderer.send('close-main')
				},
		        accelerator: 'CmdOrCtrl+W',
		        role: 'close',
			}
		]
	}
])

Menu.setApplicationMenu(menu) 