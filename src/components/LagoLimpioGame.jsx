import { useState } from 'react'
import { X, RotateCcw, Search, AlertCircle, ExternalLink } from 'lucide-react'

export default function LagoLimpioGame({ onClose, onComplete }) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const handleIframeLoad = () => {
    setIsLoading(false)
    console.log('Juego cargado correctamente')
  }

  const handleIframeError = () => {
    setError('Error cargando el juego. Verifica tu conexión a internet.')
    setIsLoading(false)
  }

  const handleRestart = () => {
    setIsLoading(true)
    setError(null)
    // Recargar el iframe
    const iframe = document.getElementById('game-iframe-lago')
    if (iframe) {
      iframe.src = iframe.src
    }
  }

  const handleRetry = () => {
    setError(null)
    setIsLoading(true)
    handleRestart()
  }

  const handleOpenInNewTab = () => {
    window.open('/prueba/test.html', '_blank')
  }

  return (
    <div className="fixed inset-0 bg-negro/95 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-blanco rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-3xl border-2 border-verdementa/20 relative">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-verdeclaro/20 bg-gradient-to-r from-verdeesmeralda to-azulprofundo text-blanco">
          <div>
            <h2 className="font-lato text-2xl font-bold">Lago Limpio</h2>
            <p className="font-inter text-blanco/90">Encuentra y elimina los contaminantes</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleOpenInNewTab}
              className="p-3 bg-blanco/20 hover:bg-blanco/30 rounded-full transition-all duration-300 transform hover:scale-110"
              title="Abrir en nueva pestaña"
            >
              <ExternalLink className="w-6 h-6" />
            </button>
            <button
              onClick={handleRestart}
              className="p-3 bg-blanco/20 hover:bg-blanco/30 rounded-full transition-all duration-300 transform hover:scale-110"
              disabled={isLoading}
            >
              <RotateCcw className="w-6 h-6" />
            </button>
            <button
              onClick={onClose}
              className="p-3 bg-blanco/20 hover:bg-blanco/30 rounded-full transition-all duration-300 transform hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Contenedor del juego */}
        <div className="relative w-full h-[600px] bg-gradient-to-br from-azulprofundo/20 to-verdeesmeralda/20 flex items-center justify-center overflow-hidden">
          {/* Iframe del juego */}
          <iframe
            id="game-iframe-lago"
            src="/prueba/lago_limpio.html"
            className="w-full h-full border-0 rounded-b-3xl"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            title="Juego Lago Limpio"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
          
          {/* Overlay de carga */}
          {isLoading && !error && (
            <div className="absolute inset-0 bg-blanco/95 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-verdeesmeralda border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="font-lato text-azulprofundo font-bold text-lg">Cargando juego...</p>
                <p className="font-inter text-azulprofundo/70 text-sm mt-2">Esto puede tomar unos segundos</p>
                <div className="mt-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-azulprofundo/60">
                    <div className="w-2 h-2 bg-verdeesmeralda rounded-full animate-pulse"></div>
                    <span>Cargando archivos del juego</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-azulprofundo/60 mt-1">
                    <div className="w-2 h-2 bg-verdeesmeralda rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span>Inicializando Adobe Animate</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-azulprofundo/60 mt-1">
                    <div className="w-2 h-2 bg-verdeesmeralda rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <span>Preparando el juego</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Overlay de error */}
          {error && (
            <div className="absolute inset-0 bg-blanco/95 flex items-center justify-center">
              <div className="text-center max-w-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="font-lato text-xl font-bold text-azulprofundo mb-2">Error al cargar el juego</h3>
                <p className="font-inter text-azulprofundo/70 mb-6">{error}</p>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handleRetry}
                    className="bg-verdeesmeralda hover:bg-azulprofundo text-blanco font-lato font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Intentar de nuevo
                  </button>
                  <button
                    onClick={handleOpenInNewTab}
                    className="bg-azulprofundo hover:bg-verdeesmeralda text-blanco font-lato font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Abrir en nueva pestaña
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-azulprofundo/20 hover:bg-azulprofundo/40 text-azulprofundo font-lato font-bold py-3 px-6 rounded-full transition-all duration-300"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Indicador de juego cargado */}
          {!isLoading && !error && (
            <div className="absolute top-4 right-4 bg-green-500 text-blanco px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              ¡Juego listo!
            </div>
          )}
        </div>

        {/* Instrucciones */}
        <div className="p-6 bg-azulprofundo/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-azulprofundo/80">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-verdeesmeralda" />
                <span>Busca objetos contaminantes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span>Contaminantes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Naturaleza</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>Agua limpia</span>
              </div>
            </div>
            <div className="text-xs text-azulprofundo/60">
              💡 Si el juego no carga, intenta abrirlo en una nueva pestaña
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 