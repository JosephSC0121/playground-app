import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 900,
    show: false, // La ventana no se muestra inmediatamente
    autoHideMenuBar: true, // Oculta la barra de menú
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'), // Cargar script preload
      sandbox: false, 
      webSecurity: false, // Deshabilita la seguridad del navegador
      allowRunningInsecureContent: true
    }
  })

  // Abrir DevTools en producción para depurar
  if (!is.dev) {
    mainWindow.webContents.openDevTools()
  }

  // Mostrar la ventana cuando esté lista
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  // Prevenir que se abran nuevas ventanas externas
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // Verificar si se cargan las rutas correctas en dev y producción
  console.log('Loading renderer from:', 
    is.dev && process.env['ELECTRON_RENDERER_URL']
      ? process.env['ELECTRON_RENDERER_URL']
      : join(__dirname, '../renderer/index.html')
  )

  // Cargar la URL en desarrollo o el archivo local en producción
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html')).catch((error) => {
      console.error('Error loading index.html:', error)
    })
  }

  // Capturar si hubo algún error en la carga
  mainWindow.webContents.on('did-fail-load', (errorDescription) => {
    console.error('Failed to load:', errorDescription)
  })

  // Capturar errores de crash en los webContents
  mainWindow.webContents.on('crashed', () => {
    console.error('The web contents have crashed')
  })
}

app.whenReady().then(() => {
  // Establecer el app model ID para Windows
  electronApp.setAppUserModelId('com.electron')

  // Habilitar o deshabilitar shortcuts de desarrollo según el entorno
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // Test de IPC para verificar que funciona correctamente
  ipcMain.on('ping', () => console.log('pong'))

  // Crear la ventana principal
  createWindow()

  // Crear nueva ventana si no hay ninguna en macOS al hacer click en el dock
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Cerrar la aplicación cuando todas las ventanas estén cerradas (excepto en macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// Capturar errores globales y loguearlos
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error)
})

// Este código puede incluir cualquier otro código de proceso principal adicional.
