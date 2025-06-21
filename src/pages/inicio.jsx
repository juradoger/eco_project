import { useState, useEffect } from "react"
import { ArrowRight, Target, Recycle } from "lucide-react"

// Imagenes para las cards (puedes cambiar las URLs)
const cardImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506744364301-61506b40fd6e?auto=format&fit=crop&w=800&q=80'
]

export default function Inicio() {
  const [scrollY, setScrollY] = useState(0)
  const [currentGame, setCurrentGame] = useState(0)

  // Efecto parallax sutil
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Datos para los juegos
  const games = [
    {
      icon: "🗂️",
      title: "Clasificador Ecológico",
      description:
        "Arrastra cada residuo al contenedor correcto. ¡Conviértete en un experto del reciclaje mientras juegas!",
      buttonText: "¡Jugar ahora!",
    },
    {
      icon: "🔍",
      title: "Detective Ambiental",
      description: "Encuentra todos los elementos contaminantes en la imagen. ¡Pon a prueba tu ojo ecológico!",
      buttonText: "¡Investigar!",
    },
  ]

  return (
    <div className="min-h-screen bg-blancoverdoso overflow-hidden relative">
      {/* Burbujas animadas de fondo */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 60 + 60;
          return (
            <div
              key={i}
              className="absolute animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 60% 40%, #5cdb95 60%, #b2f2d7 100%)',
                boxShadow: '0 0 12px 2px #5cdb95',
                filter: 'blur(1.5px)',
                opacity: 0.35,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 28 + 22}s`,
              }}
            />
          )
        })}
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div
          className="absolute inset-0 bg-gradient-to-br from-verdementa/20 to-verdeclaro/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Planeta Tierra */}
          <div className="mb-8">
            <div className="w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem] mx-auto bg-gradient-to-br from-verdementa to-verdeclaro rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <div className="text-[10rem] md:text-[14rem]">🌍</div>
            </div>
          </div>

          {/* Mensaje de bienvenida */}
          <h1 className="font-lato text-4xl md:text-6xl font-bold text-azulprofundo mb-6 leading-tight">
            ¡Bienvenido/a a Eco Detectives!
          </h1>

          <p className="font-inter text-xl md:text-2xl text-azulprofundo/80 mb-8 max-w-2xl mx-auto">
            Donde aprender es una aventura verde
          </p>

          {/* Botón destacado */}
          <button className="bg-gradient-to-r from-verdementa via-verdeesmeralda to-azulprofundo hover:from-azulprofundo hover:via-verdeesmeralda hover:to-verdementa text-white font-lato font-bold py-5 px-12 rounded-full shadow-2xl hover:shadow-[0_8px_32px_8px_rgba(44,180,120,0.35)] transition-all duration-300 transform hover:scale-110 flex items-center gap-4 mx-auto text-xl group ring-4 ring-verdeesmeralda/30 hover:ring-8 hover:ring-verdeesmeralda/40">
            <span className="drop-shadow-lg">¡Comienza tu misión!</span>
            <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform duration-300 drop-shadow-lg" />
          </button>
        </div>
      </section>

      {/* Carrusel de texto superior FUERA del carrusel de imágenes */}
      <div className="w-full h-6 flex items-center animate-scroll-right z-20 pointer-events-none select-none mb-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex-shrink-0 mx-2">
            <span className="font-lato font-semibold text-sm md:text-base text-azulprofundo whitespace-nowrap">La diferencia está en ti</span>
          </div>
        ))}
      </div>

      {/* Carrusel en movimiento */}
      <section className="relative h-72 md:h-96 overflow-hidden bg-gradient-to-r from-azulprofundo/10 to-verdeesmeralda/10">
        {/* Primera fila - movimiento hacia la derecha */}
        <div className="absolute top-6 left-0 w-full h-32 md:h-48 flex animate-scroll-right gap-x-2">
          {Array.from({length: 2}).flatMap((_, j) => (
            [...Array(10)].map((_, i) => (
              <div
                key={j*10 + i}
                className="flex-shrink-0 w-72 md:w-[28rem] h-32 md:h-48 bg-gradient-to-r from-verdementa to-verdeclaro rounded-2xl flex items-center justify-center shadow-lg"
              >
                <div className="text-2xl md:text-4xl">{i % 2 === 0 ? "🌳🦋" : "🏭💨"}</div>
              </div>
            ))
          ))}
        </div>

        {/* Segunda fila - movimiento hacia la izquierda */}
        <div className="absolute bottom-6 left-0 w-full h-32 md:h-48 flex animate-scroll-left gap-x-2">
          {Array.from({length: 2}).flatMap((_, j) => (
            [...Array(10)].map((_, i) => (
              <div
                key={j*10 + i}
                className="flex-shrink-0 w-72 md:w-[28rem] h-32 md:h-48 bg-gradient-to-r from-azulprofundo/20 to-verdeesmeralda/20 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <div className="text-2xl md:text-4xl">{i % 2 === 0 ? "🌊🐟" : "🌸🌿"}</div>
              </div>
            ))
          ))}
        </div>
      </section>

      {/* Carrusel de texto inferior FUERA del carrusel de imágenes */}
      <div className="w-full h-6 flex items-center animate-scroll-left z-20 pointer-events-none select-none mt-2 mb-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex-shrink-0 mx-2">
            <span className="font-lato font-semibold text-sm md:text-base text-verdeesmeralda whitespace-nowrap">La diferencia está en ti</span>
          </div>
        ))}
      </div>

      {/* Sección de juegos */}
      <section className="py-12 px-2 md:px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-lato text-2xl md:text-4xl font-bold text-azulprofundo mb-2">🎮 Juegos Ecológicos</h2>
            <p className="font-inter text-base md:text-lg text-azulprofundo/80">
              Aprende jugando con nuestras aventuras interactivas
            </p>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="relative w-full max-w-2xl min-h-[22rem] md:min-h-[26rem] bg-blanco rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 mb-10 border border-verdementa/20 group cursor-pointer overflow-hidden">
              {/* Imagen decorativa que cubre toda la card al hacer hover */}
              <div className={`absolute inset-0 bg-[url('${cardImages[currentGame]}')] bg-cover bg-center opacity-0 group-hover:opacity-90 transition-all duration-700 z-20`}></div>

              {/* Overlay para oscurecer la imagen y ocultar el contenido */}
              <div className="absolute inset-0 bg-azulprofundo/70 opacity-0 group-hover:opacity-80 transition-all duration-700 z-30"></div>

              {/* Ícono grande con efecto */}
              <div className="flex justify-center mb-4 relative z-40 pt-10">
                <div className="bg-gradient-to-br from-verdeesmeralda to-verdeclaro rounded-full p-6 md:p-8 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:rotate-12 transition-transform">
                  <div className="text-4xl md:text-6xl transition-transform duration-300 group-hover:scale-110">{games[currentGame].icon}</div>
                </div>
              </div>

              {/* Contenido */}
              <div className="text-center space-y-4 relative z-40 px-6 md:px-12">
                <h3 className="font-lato font-bold text-2xl md:text-4xl text-azulprofundo group-hover:text-blanco transition-colors duration-300">
                  {games[currentGame].title}
                </h3>

                <p className="font-inter text-azulprofundo/80 group-hover:text-blanco leading-relaxed text-base md:text-lg">{games[currentGame].description}</p>

                {/* Botón cool */}
                <div className="pt-4">
                  <button className="bg-gradient-to-r from-azulprofundo to-verdeesmeralda hover:from-verdeesmeralda hover:to-azulprofundo text-blanco font-lato font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center gap-3 mx-auto group/button text-base md:text-lg">
                    <span>{games[currentGame].buttonText}</span>
                    {currentGame === 0 ? (
                      <Recycle className="w-6 h-6 group-hover/button:rotate-180 transition-transform duration-500" />
                    ) : (
                      <Target className="w-6 h-6 group-hover/button:scale-125 transition-transform duration-300" />
                    )}
                  </button>
                </div>
              </div>

              {/* Decoración de esquina */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <div className="w-2 h-2 bg-verdementa rounded-full animate-ping"></div>
              </div>

              {/* Navegación entre tarjetas */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-verdeesmeralda/20 hover:bg-verdeesmeralda/40 text-black rounded-full shadow-2xl p-4 z-50 transition-all duration-300 hover:scale-110"
                onClick={() => setCurrentGame((prev) => (prev - 1 + games.length) % games.length)}
                aria-label="Anterior"
                style={{outline: 'none', backdropFilter: 'blur(2px)'}}
              >
                <svg width="32" height="32" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 28 10 16 20 4"></polyline></svg>
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-verdeesmeralda/20 hover:bg-verdeesmeralda/40 text-black rounded-full shadow-2xl p-4 z-50 transition-all duration-300 hover:scale-110"
                onClick={() => setCurrentGame((prev) => (prev + 1) % games.length)}
                aria-label="Siguiente"
                style={{outline: 'none', backdropFilter: 'blur(2px)'}}
              >
                <svg width="32" height="32" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="12 28 22 16 12 4"></polyline></svg>
              </button>

              {/* Sombra tipo humo verde debajo de la card */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-32px] w-2/3 h-12 rounded-full bg-gradient-to-r from-verdementa/30 via-verdeesmeralda/20 to-azulprofundo/10 blur-2xl opacity-70 z-0 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS personalizado para las animaciones */}
      <style jsx>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-18px) scale(1.04);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 12s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 14s linear infinite;
        }

        .animate-bubble {
          animation: bubble 16s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
