import { useState } from "react"
import { Play, Star, Trophy, Zap, Sparkles, ArrowRight, Clock, Users, Award, CheckCircle } from "lucide-react"

export default function Misiones() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [completedMissions, setCompletedMissions] = useState([])

  // Datos de las misiones
  const missions = [
    {
      id: 1,
      title: "Clasificador Maestro",
      subtitle: "Separar residuos",
      description: "Arrastra cada objeto al contenedor correcto y conviértete en un experto del reciclaje",
      icon: "♻️",
      difficulty: "Fácil",
      time: "5 min",
      points: 100,
      players: "1.2k",
      type: "game",
      color: "from-verdementa to-verdeclaro",
      bgPattern: "🗂️📦🔄",
      category: "Juego Digital",
    },
    {
      id: 2,
      title: "Detective Verde",
      subtitle: "Detectar contaminación",
      description: "Encuentra todos los elementos que dañan el medio ambiente en esta imagen misteriosa",
      icon: "🔍",
      difficulty: "Medio",
      time: "8 min",
      points: 150,
      players: "856",
      type: "game",
      color: "from-verdeesmeralda to-azulprofundo",
      bgPattern: "🕵️‍♀️🌍🔎",
      category: "Juego Digital",
    },
    {
      id: 3,
      title: "Jardinero Heroico",
      subtitle: "Plantar semillas",
      description: "Planta una semilla real y documenta su crecimiento día a día",
      icon: "🌱",
      difficulty: "Fácil",
      time: "30 días",
      points: 200,
      players: "2.1k",
      type: "real",
      color: "from-verdeclaro to-verdementa",
      bgPattern: "🌱🌿🌳",
      category: "Actividad Real",
    },
    {
      id: 4,
      title: "Limpieza Épica",
      subtitle: "Limpiar espacios",
      description: "Organiza una limpieza en tu barrio, parque o playa y comparte tu experiencia",
      icon: "🧹",
      difficulty: "Medio",
      time: "2 horas",
      points: 250,
      players: "634",
      type: "real",
      color: "from-azulprofundo to-verdeesmeralda",
      bgPattern: "🧹✨🏞️",
      category: "Actividad Real",
    },
    {
      id: 5,
      title: "Creador Genial",
      subtitle: "Reutilizar objetos",
      description: "Transforma objetos usados en algo nuevo y útil con tu creatividad",
      icon: "🎨",
      difficulty: "Difícil",
      time: "1 hora",
      points: 300,
      players: "423",
      type: "real",
      color: "from-verdementa to-azulprofundo",
      bgPattern: "🎨♻️✂️",
      category: "Actividad Real",
    },
    {
      id: 6,
      title: "Guardián del Agua",
      subtitle: "Ahorrar agua",
      description: "Implementa técnicas de ahorro de agua en casa y mide tu impacto",
      icon: "💧",
      difficulty: "Fácil",
      time: "1 semana",
      points: 180,
      players: "1.5k",
      type: "real",
      color: "from-verdeclaro to-verdeesmeralda",
      bgPattern: "💧🚿🌊",
      category: "Actividad Real",
    },
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Fácil":
        return "bg-green-100 text-green-700"
      case "Medio":
        return "bg-yellow-100 text-yellow-700"
      case "Difícil":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const handleMissionClick = (mission) => {
    console.log(`Iniciando misión: ${mission.title}`)
    // Aquí se integrará la navegación a los juegos
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blancoverdoso via-verdeclaro/10 to-verdementa/10 relative overflow-hidden">
      {/* Partículas flotantes de fondo mejoradas */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 4 + 6}s`,
              transform: `scale(${Math.random() * 0.5 + 1})`,
            }}
          >
            <div className="text-3xl md:text-4xl filter drop-shadow-lg">
              {["🌟", "✨", "🍃", "🌸", "🦋", "🌈", "⭐", "🌺", "🦜", "🌊"][Math.floor(Math.random() * 10)]}
            </div>
          </div>
        ))}
      </div>

      {/* Header Hero mejorado */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-verdementa to-verdeclaro text-blanco px-8 py-4 rounded-full font-lato font-bold text-xl mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Trophy className="w-7 h-7 animate-pulse" />
            <span>Centro de Misiones</span>
            <Sparkles className="w-7 h-7 animate-pulse" />
          </div>

          <h1 className="font-lato text-6xl md:text-8xl font-bold mb-8 leading-tight relative">
            <span className="bg-gradient-to-r from-verdementa via-verdeesmeralda to-azulprofundo bg-clip-text text-transparent animate-pulse">
              🚀 ¡Misiones Ecológicas!
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse opacity-50 blur-sm"></div>
          </h1>

          <p className="font-inter text-2xl md:text-3xl text-azulprofundo/90 mb-10 max-w-3xl mx-auto font-semibold leading-relaxed">
            Completa desafíos divertidos, gana puntos y conviértete en un verdadero héroe del planeta
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="bg-gradient-to-r from-blanco to-verdeclaro/10 rounded-full px-8 py-4 shadow-2xl border-2 border-verdementa/30 transform hover:scale-110 transition-all duration-300">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-yellow-500 animate-spin" style={{ animationDuration: '3s' }} />
                <span className="font-lato font-bold text-azulprofundo text-lg">6 Misiones Disponibles</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blanco to-verdeclaro/10 rounded-full px-8 py-4 shadow-2xl border-2 border-verdementa/30 transform hover:scale-110 transition-all duration-300">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-verdeesmeralda animate-bounce" />
                <span className="font-lato font-bold text-azulprofundo text-lg">+5k Eco-Detectives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Misiones mejorado */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {missions.map((mission, index) => (
              <div
                key={mission.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(mission.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Tarjeta principal mejorada */}
                <div
                  className={`relative bg-blanco rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden border-2 border-transparent hover:border-verdementa/50 transform ${
                    hoveredCard === mission.id ? "scale-105 -rotate-2 translate-y-[-10px]" : "hover:scale-102 hover:-rotate-1"
                  }`}
                >
                  {/* Patrón de fondo mejorado */}
                  <div className="absolute top-0 right-0 text-7xl opacity-10 p-6 pointer-events-none animate-pulse">
                    {mission.bgPattern}
                  </div>

                  {/* Badge de categoría mejorado */}
                  <div className="absolute top-5 left-5 z-10">
                    <div className="bg-gradient-to-r from-azulprofundo/95 to-verdeesmeralda/95 text-blanco px-4 py-2 rounded-full text-sm font-lato font-bold backdrop-blur-sm shadow-lg transform hover:scale-110 transition-all duration-300">
                      {mission.category}
                    </div>
                  </div>

                  {/* Badge de dificultad mejorado */}
                  <div className="absolute top-5 right-5 z-10">
                    <div
                      className={`px-4 py-2 rounded-full text-sm font-lato font-bold shadow-lg transform hover:scale-110 transition-all duration-300 ${getDifficultyColor(mission.difficulty)}`}
                    >
                      {mission.difficulty}
                    </div>
                  </div>

                  {/* Header con gradiente mejorado */}
                  <div className={`bg-gradient-to-r ${mission.color} p-10 text-center relative overflow-hidden`}>
                    <div className="text-7xl mb-6 animate-bounce filter drop-shadow-lg">{mission.icon}</div>
                    <h3 className="font-lato text-3xl font-bold text-blanco mb-3 drop-shadow-lg">{mission.title}</h3>
                    <p className="font-inter text-blanco/95 text-lg font-semibold">{mission.subtitle}</p>

                    {/* Efectos de brillo mejorados */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blanco/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blanco/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  </div>

                  {/* Contenido mejorado */}
                  <div className="p-8">
                    <p className="font-inter text-azulprofundo/85 mb-8 leading-relaxed text-lg">{mission.description}</p>

                    {/* Stats mejorados */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center transform hover:scale-110 transition-all duration-300">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Clock className="w-5 h-5 text-verdeesmeralda animate-pulse" />
                        </div>
                        <div className="font-lato text-sm font-bold text-azulprofundo">{mission.time}</div>
                      </div>
                      <div className="text-center transform hover:scale-110 transition-all duration-300">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Zap className="w-5 h-5 text-yellow-500 animate-pulse" />
                        </div>
                        <div className="font-lato text-sm font-bold text-azulprofundo">{mission.points} pts</div>
                      </div>
                      <div className="text-center transform hover:scale-110 transition-all duration-300">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Users className="w-5 h-5 text-verdementa animate-pulse" />
                        </div>
                        <div className="font-lato text-sm font-bold text-azulprofundo">{mission.players}</div>
                      </div>
                    </div>

                    {/* Botón de acción mejorado con más efectos dinámicos */}
                    <button
                      onClick={() => handleMissionClick(mission)}
                      className={`w-full bg-gradient-to-r ${mission.color} hover:shadow-2xl text-blanco font-lato font-bold py-5 px-8 rounded-2xl transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-4 group/button relative overflow-hidden border-2 border-transparent hover:border-blanco/30`}
                    >
                      {/* Efectos de ondas mejorados */}
                      <div className="absolute inset-0 bg-blanco/25 rounded-2xl scale-0 group-hover/button:scale-100 transition-transform duration-500"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blanco/15 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></div>

                      <Play className="w-6 h-6 group-hover/button:scale-125 group-hover/button:rotate-12 transition-all duration-300 relative z-10" />
                      <span className="relative z-10 text-lg">
                        {mission.type === "game" ? "¡Jugar Ahora!" : "¡Comenzar Misión!"}
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover/button:translate-x-2 group-hover/button:scale-110 transition-all duration-300 relative z-10" />
                    </button>
                  </div>

                  {/* Indicador de completado mejorado */}
                  {completedMissions.includes(mission.id) && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-blanco rounded-full p-5 shadow-2xl animate-pulse">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Sombra dinámica mejorada */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${mission.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-700 -z-10 scale-90 group-hover:scale-110`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer motivacional mejorado */}
      <section className="py-20 px-4 bg-gradient-to-r from-verdementa/30 to-verdeclaro/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blanco to-verdeclaro/10 rounded-3xl p-10 shadow-2xl border-2 border-verdementa/30 transform hover:scale-105 transition-all duration-500">
            <div className="flex justify-center gap-6 mb-8">
              <div className="text-5xl animate-bounce filter drop-shadow-lg">🌟</div>
              <div className="text-5xl animate-bounce filter drop-shadow-lg" style={{ animationDelay: "0.3s" }}>
                🏆
              </div>
              <div className="text-5xl animate-bounce filter drop-shadow-lg" style={{ animationDelay: "0.6s" }}>
                🌍
              </div>
            </div>
            <h2 className="font-lato text-4xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-verdementa via-verdeesmeralda to-azulprofundo bg-clip-text text-transparent animate-pulse">
                ¡Cada misión cuenta para salvar el planeta!
              </span>
            </h2>
            <p className="font-inter text-azulprofundo/90 text-xl mb-8 leading-relaxed font-semibold">
              Completa misiones, gana puntos y únete a miles de Eco-Detectives que están haciendo la diferencia
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-gradient-to-r from-verdementa to-verdeclaro text-blanco px-8 py-4 rounded-full font-lato font-bold flex items-center gap-3 shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-blanco/20">
                <Award className="w-6 h-6 animate-pulse" />
                <span className="text-lg">Próximamente: Más misiones</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
