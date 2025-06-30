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
import bosqueImg from "../assets/bosque.png"
import parqueImg from "../assets/parque.png"
import jardinImg from "../assets/jardin.png"
import rioImg from "../assets/rio.png"
import hojaImg from "../assets/hoja.png"
import arboliconImg from "../assets/arbolicon.png"
import bosque1Img from "../assets/bosque_1.png"
import pezImg from "../assets/pez.png"
import peziconImg from "../assets/pezicon.png"
import parque1Img from "../assets/parque_1.png"
import jardin1Img from "../assets/jardin_1.png"
import videoOLAF from "../assets/videoOLAF.mp4"

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
      icon: bosque1Img,
      name: "Bosques",
      description: "Pulmones verdes que purifican el aire",
      image: bosqueImg,
    },
    {
      icon: peziconImg,
      name: "Ríos y Lagos",
      description: "Fuentes de vida y agua dulce",
      image: rioImg,
    },
    {
      icon: parque1Img,
      name: "Parques Urbanos",
      description: "Espacios verdes en la ciudad",
      image: parqueImg,
    },
    {
      icon: jardin1Img,
      name: "Jardines",
      description: "Pequeños oasis de biodiversidad",
      image: jardinImg,
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
                <img src={hojaImg} alt="Hoja icon" className="w-10 h-10 md:w-16 md:h-16 object-contain filter brightness-0 invert" />
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
              Conoce ecotips
            </h2>
            <p className="font-inter text-lg text-azulprofundo/80">Descubre consejos para cuidar el medio ambiente</p>
          </div>

          <div className="bg-blanco rounded-3xl p-8 shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-verdementa to-verdeclaro rounded-2xl flex items-center justify-center relative overflow-hidden">
              <video 
                controls 
                className="w-full h-full object-cover rounded-2xl"
                poster="/ruta/a/tu/thumbnail.jpg"
              >
                <source src={videoOLAF} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosistemas que protegemos */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="italic text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-azulprofundo via-verdeesmeralda to-verdementa bg-clip-text text-transparent animate-gradient-move drop-shadow-[0_4px_24px_rgba(44,180,120,0.18)] tracking-wider flex items-center justify-center gap-3" style={{ fontFamily: 'var(--font-pacifico)' }}>
              <span className="inline-flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-verdementa to-verdeesmeralda shadow-lg">
                <img src={arboliconImg} alt="Ecosistemas que Protegemos" className="w-16 h-16 md:w-24 md:h-24 object-contain filter brightness-0 invert" />
              </span>
              Ecosistemas que Protegemos
            </h2>
            <p className="font-inter text-lg text-azulprofundo/80">
              Cada espacio natural es un tesoro que debemos cuidar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystems.map((ecosystem, index) => {
              return (
                <div
                  key={index}
                  className="bg-blanco rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border border-verdeclaro/20 animate-fade-in group"
                >
                  {/* Imagen del ecosistema */}
                  <div className="h-40 bg-gradient-to-br from-verdeclaro to-verdementa flex items-center justify-center animate-float group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <img 
                      src={ecosystem.image} 
                      alt={ecosystem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-verdementa to-verdeesmeralda rounded-full flex items-center justify-center animate-float group-hover:scale-110 transition-transform duration-300 border-4 border-white shadow-lg">
                        <img src={ecosystem.icon} alt={ecosystem.name + ' icon'} className="w-8 h-8 md:w-14 md:h-14 object-contain filter brightness-0 invert" />
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
              Amenazas que Debemos Vigilar
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
