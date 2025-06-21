import { useState } from "react"
import {
  Heart,
  Droplets,
  Wind,
  TreePine,
  Fish,
  Bird,
  Flower2,
  Trash2,
  Flame,
  Volume2,
  Play,
  Search,
  CheckCircle,
  XCircle,
  ExternalLink,
  Leaf,
} from "lucide-react"

export default function Explora() {
  const [gameScore, setGameScore] = useState(0)
  const [foundProblems, setFoundProblems] = useState([])

  // Datos para la sección de salud ambiental
  const healthTopics = [
    {
      icon: Wind,
      title: "Aire Puro",
      description: "Respirar aire limpio es fundamental para nuestra salud y la de todos los seres vivos.",
      color: "from-verdeclaro to-verdementa",
    },
    {
      icon: Droplets,
      title: "Agua Limpia",
      description: "El agua potable y limpia es esencial para la vida y el bienestar de los ecosistemas.",
      color: "from-verdementa to-verdeesmeralda",
    },
    {
      icon: Heart,
      title: "Vida Saludable",
      description: "Un ambiente sano nos permite vivir mejor y más felices junto a la naturaleza.",
      color: "from-verdeesmeralda to-azulprofundo",
    },
  ]

  // Datos para ecosistemas
  const ecosystems = [
    {
      icon: TreePine,
      name: "Bosques",
      description: "Pulmones verdes que purifican el aire",
      image: "🌲",
    },
    {
      icon: Fish,
      name: "Ríos y Lagos",
      description: "Fuentes de vida y agua dulce",
      image: "🏞️",
    },
    {
      icon: Bird,
      name: "Parques Urbanos",
      description: "Espacios verdes en la ciudad",
      image: "🌳",
    },
    {
      icon: Flower2,
      name: "Jardines",
      description: "Pequeños oasis de biodiversidad",
      image: "🌺",
    },
  ]

  // Datos para amenazas
  const threats = [
    {
      icon: Trash2,
      name: "Basura",
      description: "Residuos que contaminan nuestro entorno",
      color: "text-red-500",
    },
    {
      icon: Flame,
      name: "Quema de Plásticos",
      description: "Gases tóxicos que dañan el aire",
      color: "text-orange-500",
    },
    {
      icon: Volume2,
      name: "Contaminación Sonora",
      description: "Ruidos que alteran la paz natural",
      color: "text-yellow-500",
    },
    {
      icon: Droplets,
      name: "Agua Contaminada",
      description: "Líquidos sucios que enferman la vida",
      color: "text-blue-500",
    },
  ]

  // Problemas para encontrar en el juego
  const gameProblems = [
    { id: 1, name: "Botella de plástico", x: 25, y: 40 },
    { id: 2, name: "Humo de fábrica", x: 70, y: 20 },
    { id: 3, name: "Basura en el río", x: 45, y: 75 },
    { id: 4, name: "Auto contaminante", x: 80, y: 60 },
  ]

  const handleProblemClick = (problemId, problemName) => {
    if (!foundProblems.includes(problemId)) {
      setFoundProblems([...foundProblems, problemId])
      setGameScore(gameScore + 25)
    }
  }

  return (
    <div className="min-h-screen bg-blancoverdoso">
      {/* Header */}
      <section className="relative py-16 px-4">
        {/* Fondo de imagen estilizada */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="Fondo medio ambiente" className="w-full h-full object-cover object-center opacity-60" draggable="false" />
          <div className="absolute inset-0 bg-gradient-to-r from-verdementa/70 via-blancoverdoso/60 to-azulprofundo/70 mix-blend-multiply"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="italic text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-azulprofundo via-verdeesmeralda to-verdementa bg-clip-text text-transparent animate-gradient-move drop-shadow-[0_6px_32px_rgba(44,180,120,0.25)] tracking-wide transition-transform duration-300 hover:scale-110 cursor-pointer" style={{ fontFamily: 'var(--font-pacifico)' }}>
            <span className="inline-block animate-bounce-slow align-middle mr-3">
              <span className="inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-verdementa to-verdeesmeralda shadow-lg">
                <Leaf className="w-10 h-10 md:w-16 md:h-16 text-white" />
              </span>
            </span>
            Explora y Aprende
          </h1>
          <p className="font-inter text-xl text-azulprofundo/80 max-w-3xl mx-auto">
            Descubre todo sobre la salud ambiental, los ecosistemas que protegemos y las amenazas que debemos vigilar
          </p>
        </div>
      </section>

      {/* ¿Qué es la salud ambiental? */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="italic text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-azulprofundo via-verdeesmeralda to-verdementa bg-clip-text text-transparent animate-gradient-move drop-shadow-[0_4px_24px_rgba(44,180,120,0.18)] tracking-wider" style={{ fontFamily: 'var(--font-pacifico)' }}>
              ¿Qué es la Salud Ambiental?
            </h2>
            <p className="font-inter text-lg text-azulprofundo/80 max-w-2xl mx-auto">
              Es el equilibrio perfecto entre nosotros y la naturaleza que nos rodea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthTopics.map((topic, index) => {
              const IconComponent = topic.icon
              return (
                <div
                  key={index}
                  className="bg-blanco rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-verdeclaro/20 group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${topic.color} rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg animate-float group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white filter grayscale group-hover:grayscale-0 group-hover:text-blanco transition-all duration-300 animate-pop" />
                  </div>
                  <h3 className="font-lato text-2xl font-bold text-azulprofundo mb-4 text-center animate-fade-in">
                    {topic.title}
                  </h3>
                  <p className="font-inter text-azulprofundo/80 text-center leading-relaxed animate-fade-in delay-100">
                    {topic.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Video explicativo */}
      <section className="py-16 px-4 bg-gradient-to-r from-verdeclaro/10 to-verdementa/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="italic text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-azulprofundo via-verdeesmeralda to-verdementa bg-clip-text text-transparent animate-gradient-move drop-shadow-[0_4px_24px_rgba(44,180,120,0.18)] tracking-wider" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Respira Verde
            </h2>
            <p className="font-inter text-lg text-azulprofundo/80">Cuidando nuestro aire, agua y tierra</p>
          </div>

          <div className="bg-blanco rounded-3xl p-8 shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-verdementa to-verdeclaro rounded-2xl flex items-center justify-center relative overflow-hidden">
              {/* 
              CÓMO CAMBIAR ESTE VIDEO:
              Reemplaza este div con:
              <video 
                controls 
                className="w-full h-full object-cover rounded-2xl"
                poster="/ruta/a/tu/thumbnail.jpg"
              >
                <source src="/ruta/a/tu/video-respira-verde.mp4" type="video/mp4" />
              </video>
              */}
              <div className="text-center text-blanco">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <p className="font-lato text-xl font-semibold">Video: Respira Verde</p>
                <p className="font-inter text-sm opacity-90">Cuidando nuestro aire, agua y tierra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosistemas que protegemos */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="italic text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-azulprofundo via-verdeesmeralda to-verdementa bg-clip-text text-transparent animate-gradient-move drop-shadow-[0_4px_24px_rgba(44,180,120,0.18)] tracking-wider" style={{ fontFamily: 'var(--font-pacifico)' }}>
              🌿 Ecosistemas que Protegemos
            </h2>
            <p className="font-inter text-lg text-azulprofundo/80">
              Cada espacio natural es un tesoro que debemos cuidar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystems.map((ecosystem, index) => {
              const IconComponent = ecosystem.icon
              return (
                <div
                  key={index}
                  className="bg-blanco rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-verdeclaro/20 animate-fade-in group"
                >
                  {/* Imagen del ecosistema */}
                  <div className="h-40 bg-gradient-to-br from-verdeclaro to-verdementa flex items-center justify-center animate-float group-hover:scale-110 transition-transform duration-300">
                    {/* 
                    CÓMO CAMBIAR ESTAS IMÁGENES:
                    Reemplaza este div con:
                    <img 
                      src="/ruta/a/tu/foto-${ecosystem.name.toLowerCase()}.jpg" 
                      alt={ecosystem.name}
                      className="w-full h-40 object-cover"
                    />
                    */}
                    <div className="text-6xl animate-pop-slow">{ecosystem.image}</div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-verdeesmeralda to-verdeclaro rounded-full flex items-center justify-center animate-float group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-5 h-5 text-white filter grayscale group-hover:grayscale-0 group-hover:text-blanco transition-all duration-300 animate-pop" />
                      </div>
                      <h3 className="font-lato text-lg font-bold text-azulprofundo animate-fade-in">
                        {ecosystem.name}
                      </h3>
                    </div>
                    <p className="font-inter text-sm text-azulprofundo/80 animate-fade-in delay-100">{ecosystem.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Amenazas que debemos vigilar */}
      <section className="py-16 px-4 bg-gradient-to-r from-azulprofundo/5 to-verdeesmeralda/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="italic text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-azulprofundo via-verdeesmeralda to-verdementa bg-clip-text text-transparent animate-gradient-move drop-shadow-[0_4px_24px_rgba(44,180,120,0.18)] tracking-wider" style={{ fontFamily: 'var(--font-pacifico)' }}>
              ⚠️ Amenazas que Debemos Vigilar
            </h2>
            <p className="font-inter text-lg text-azulprofundo/80">
              Conocer los problemas es el primer paso para solucionarlos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {threats.map((threat, index) => {
              const IconComponent = threat.icon
              return (
                <div
                  key={index}
                  className="bg-blanco rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-red-100 animate-fade-in group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 mx-auto animate-float group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-6 h-6 ${threat.color} filter grayscale group-hover:grayscale-0 group-hover:text-red-500 transition-all duration-300 animate-pop`} />
                    </div>
                    <h3 className="font-lato text-lg font-bold text-azulprofundo mb-2 animate-fade-in">
                      {threat.name}
                    </h3>
                    <p className="font-inter text-sm text-azulprofundo/80 animate-fade-in delay-100">{threat.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Juego visual: Encuentra el problema */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="italic text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-azulprofundo via-verdeesmeralda to-verdementa bg-clip-text text-transparent animate-gradient-move drop-shadow-[0_4px_24px_rgba(44,180,120,0.18)] tracking-wider" style={{ fontFamily: 'var(--font-pacifico)' }}>
              🎯 Encuentra el Problema en la Imagen
            </h2>
            <p className="font-inter text-lg text-azulprofundo/80 mb-4">
              Haz clic en los elementos que están dañando el medio ambiente
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="bg-verdementa text-blanco px-4 py-2 rounded-full font-lato font-semibold">
                Puntuación: {gameScore}
              </div>
              <div className="bg-azulprofundo text-blanco px-4 py-2 rounded-full font-lato font-semibold">
                Encontrados: {foundProblems.length}/4
              </div>
            </div>
          </div>

          <div className="bg-blanco rounded-3xl p-8 shadow-xl">
            <div className="relative aspect-video bg-gradient-to-br from-verdeclaro/20 to-verdementa/20 rounded-2xl overflow-hidden cursor-crosshair">
              {/* 
              CÓMO CAMBIAR ESTA IMAGEN:
              Reemplaza este div con:
              <img 
                src="/ruta/a/tu/imagen-juego-problemas.jpg" 
                alt="Encuentra los problemas ambientales"
                className="w-full h-full object-cover"
              />
              */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-verdeclaro/30 to-verdementa/30">
                <div className="text-center text-azulprofundo">
                  <Search className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-lato text-xl font-semibold">Imagen Interactiva</p>
                  <p className="font-inter text-sm">Haz clic para encontrar problemas</p>
                </div>
              </div>

              {/* Puntos clicables */}
              {gameProblems.map((problem) => (
                <button
                  key={problem.id}
                  onClick={() => handleProblemClick(problem.id, problem.name)}
                  className={`absolute w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                    foundProblems.includes(problem.id)
                      ? "bg-green-500 border-green-600 scale-125"
                      : "bg-red-500 border-red-600 hover:scale-110 animate-pulse"
                  }`}
                  style={{ left: `${problem.x}%`, top: `${problem.y}%` }}
                  title={problem.name}
                >
                  {foundProblems.includes(problem.id) ? (
                    <CheckCircle className="w-4 h-4 text-white" />
                  ) : (
                    <XCircle className="w-4 h-4 text-white" />
                  )}
                </button>
              ))}
            </div>

            {/* Resultados del juego */}
            {foundProblems.length === gameProblems.length && (
              <div className="mt-6 text-center">
                <div className="bg-gradient-to-r from-verdementa to-verdeclaro text-blanco p-6 rounded-2xl">
                  <h3 className="font-lato text-2xl font-bold mb-2">¡Felicitaciones! 🎉</h3>
                  <p className="font-inter">Has encontrado todos los problemas ambientales</p>
                  <button
                    onClick={() => {
                      setFoundProblems([])
                      setGameScore(0)
                    }}
                    className="mt-4 bg-blanco text-verdeesmeralda px-6 py-2 rounded-full font-lato font-semibold hover:scale-105 transition-transform"
                  >
                    Jugar de nuevo
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
         .animate-gradient-move {
           background-size: 200% 200%;
           animation: gradient-move 4s ease-in-out infinite;
         }
         @keyframes gradient-move {
           0% { background-position: 0% 50%; }
           50% { background-position: 100% 50%; }
           100% { background-position: 0% 50%; }
         }
         .animate-float {
           animation: float 3.5s ease-in-out infinite;
         }
         @keyframes float {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-12px); }
         }
         .animate-pop {
           transition: transform 0.2s;
         }
         .animate-pop:hover, .group:hover .animate-pop {
           transform: scale(1.18) rotate(-8deg);
         }
         .animate-pop-slow {
           transition: transform 0.4s;
         }
         .animate-pop-slow:hover, .group:hover .animate-pop-slow {
           transform: scale(1.12) rotate(8deg);
         }
         .animate-fade-in {
           opacity: 0;
           animation: fadeIn 1.2s forwards;
         }
         .animate-fade-in.delay-100 {
           animation-delay: 0.2s;
         }
         @keyframes fadeIn {
           to { opacity: 1; }
         }
         .group:hover .filter.grayscale {
           filter: grayscale(0) !important;
         }
      `}</style>
    </div>
  )
}
