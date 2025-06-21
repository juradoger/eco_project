import { useState, useRef } from "react"
import {
  User,
  Upload,
  MessageCircle,
  Send,
  Trophy,
  Medal,
  Crown,
  Star,
  Camera,
  Video,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Heart,
  Zap,
  Sparkles,
  Users,
  Award,
  Target,
  Clock,
  Edit,
  X,
  Plus,
  Save,
} from "lucide-react"

export default function Participa() {
  const [formData, setFormData] = useState({
    nombre: "",
    archivo: null,
    comentario: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const fileInputRef = useRef(null)

  // Estado del perfil del usuario
  const [userProfile, setUserProfile] = useState({
    name: "",
    nickname: "",
    avatar: "🦸‍♀️",
    level: "Novato",
    estimatedTime: "2 min",
    isProfileComplete: false
  })

  // Datos del ranking actualizado con tiempo estimado
  const ranking = [
    {
      id: 1,
      nombre: "EcoHéroe María",
      puntos: 2850,
      avatar: "👧",
      nivel: "Guardián Verde",
      estimatedTime: "1 min 30 s",
      posicion: 1,
    },
    {
      id: 2,
      nombre: "Detective Carlos",
      puntos: 2640,
      avatar: "👦",
      nivel: "Protector Planeta",
      estimatedTime: "2 min 15 s",
      posicion: 2,
    },
    {
      id: 3,
      nombre: "Capitana Ana",
      puntos: 2420,
      avatar: "👩",
      nivel: "Salvadora Tierra",
      estimatedTime: "1 min 45 s",
      posicion: 3,
    },
    {
      id: 4,
      nombre: "Ranger Luis",
      puntos: 2180,
      avatar: "🧒",
      nivel: "Defensor Verde",
      estimatedTime: "3 min 20 s",
      posicion: 4,
    },
    {
      id: 5,
      nombre: "Scout Sofia",
      puntos: 1950,
      avatar: "👧",
      nivel: "Eco Aventurera",
      estimatedTime: "2 min 50 s",
      posicion: 5,
    },
    {
      id: 6,
      nombre: "Ninja Diego",
      puntos: 1720,
      avatar: "👦",
      nivel: "Guerrero Eco",
      estimatedTime: "4 min 10 s",
      posicion: 6,
    },
    {
      id: 7,
      nombre: "Maga Emma",
      puntos: 1580,
      avatar: "👩",
      nivel: "Hechicera Verde",
      estimatedTime: "2 min 30 s",
      posicion: 7,
    },
    {
      id: 8,
      nombre: "Explorador Pablo",
      puntos: 1340,
      avatar: "🧒",
      nivel: "Buscador Eco",
      estimatedTime: "3 min 45 s",
      posicion: 8,
    },
  ]

  // Avatares disponibles
  const availableAvatars = [
    "🦸‍♀️", "🦸‍♂️", "👧", "👦", "👩", "👨", "🧒", "🧑", 
    "🐱", "🐶", "🦋", "🦜", "🐸", "🦊", "🐼", "🦁"
  ]

  // Niveles disponibles
  const availableLevels = [
    "Novato", "Aprendiz", "Detective", "Protector", 
    "Guardián", "Héroe", "Maestro", "Leyenda"
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData((prev) => ({
        ...prev,
        archivo: file,
      }))
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData((prev) => ({
        ...prev,
        archivo: e.dataTransfer.files[0],
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!userProfile.isProfileComplete) {
      setShowProfileModal(true)
      return
    }

    setIsSubmitting(true)

    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccessModal(true)
      setFormData({ nombre: "", archivo: null, comentario: "" })

      // Limpiar estado después de 3 segundos
      setTimeout(() => {
        setShowSuccessModal(false)
      }, 3000)
    }, 2000)
  }

  const handleProfileSave = () => {
    if (userProfile.name && userProfile.nickname) {
      setUserProfile(prev => ({ ...prev, isProfileComplete: true }))
      setShowProfileModal(false)
    }
  }

  const getRankIcon = (posicion) => {
    switch (posicion) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Award className="w-6 h-6 text-orange-500" />
      default:
        return <Trophy className="w-5 h-5 text-verdeesmeralda" />
    }
  }

  const getRankColor = (posicion) => {
    switch (posicion) {
      case 1:
        return "from-yellow-400 to-orange-400"
      case 2:
        return "from-gray-300 to-gray-400"
      case 3:
        return "from-orange-400 to-red-400"
      default:
        return "from-verdementa to-verdeclaro"
    }
  }

  const getTimeColor = (time) => {
    const minutes = parseInt(time.split(' ')[0])
    if (minutes <= 2) return "bg-green-100 text-green-700"
    if (minutes <= 3) return "bg-yellow-100 text-yellow-700"
    return "bg-red-100 text-red-700"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blancoverdoso via-verdeclaro/10 to-verdementa/10 relative overflow-hidden">
      {/* Partículas animadas de fondo mejoradas */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
              {["🌟", "✨", "🎉", "🏆", "🌈", "🦋", "🌸", "⭐", "💫", "🎊", "🎈", "🎪"][Math.floor(Math.random() * 12)]}
            </div>
          </div>
        ))}
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-verdementa/20 to-verdeclaro/20 py-16 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-verdeesmeralda to-azulprofundo rounded-full shadow-xl animate-pulse">
              <Users className="w-10 h-10 text-blanco" />
            </div>
          </div>

          <h1 className="font-lato text-4xl md:text-6xl font-bold text-azulprofundo mb-4">¡Únete a la Aventura!</h1>
          <p className="font-inter text-xl text-azulprofundo/80 max-w-3xl mx-auto mb-8">
            Comparte tus logros ecológicos, sube al ranking de detectives y conecta con otros héroes del planeta
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blanco rounded-full px-6 py-3 shadow-lg border border-verdementa/20 animate-bounce">
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-verdeesmeralda" />
                <span className="font-lato font-semibold text-azulprofundo">+500 Participantes</span>
              </div>
            </div>
            <div
              className="bg-blanco rounded-full px-6 py-3 shadow-lg border border-verdementa/20 animate-bounce"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span className="font-lato font-semibold text-azulprofundo">Gana Puntos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Participación */}
          <div className="space-y-8">
            {/* Perfil del usuario */}
            <div className="bg-blanco rounded-3xl shadow-2xl overflow-hidden border border-verdementa/20">
              <div className="bg-gradient-to-r from-verdementa to-verdeclaro p-6 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blanco/10 to-transparent animate-pulse"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blanco/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <User className="w-8 h-8 text-blanco" />
                  </div>
                  <h2 className="font-lato text-2xl font-bold text-blanco mb-2">Tu Perfil de Detective</h2>
                  <p className="font-inter text-blanco/90">Personaliza tu identidad ecológica</p>
                </div>
              </div>

              <div className="p-6">
                {userProfile.isProfileComplete ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl animate-bounce">{userProfile.avatar}</div>
                      <div>
                        <h3 className="font-lato font-bold text-azulprofundo text-lg">{userProfile.name}</h3>
                        <p className="font-inter text-azulprofundo/70">@{userProfile.nickname}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="bg-gradient-to-r from-verdementa to-verdeclaro text-blanco px-3 py-1 rounded-full text-xs font-lato font-semibold">
                            {userProfile.level}
                          </span>
                          <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-lato font-semibold">
                            <Clock className="w-3 h-3" />
                            {userProfile.estimatedTime}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowProfileModal(true)}
                      className="p-3 bg-verdeclaro/20 hover:bg-verdeclaro/40 rounded-full transition-all duration-300 transform hover:scale-110"
                    >
                      <Edit className="w-5 h-5 text-azulprofundo" />
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">🦸‍♀️</div>
                    <h3 className="font-lato font-bold text-azulprofundo text-lg mb-2">¡Crea tu perfil!</h3>
                    <p className="font-inter text-azulprofundo/70 mb-4">Personaliza tu identidad de detective ecológico</p>
                    <button
                      onClick={() => setShowProfileModal(true)}
                      className="bg-gradient-to-r from-verdementa to-verdeclaro text-blanco font-lato font-bold py-3 px-6 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
                    >
                      <Plus className="w-5 h-5" />
                      Crear Perfil
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blanco rounded-3xl shadow-2xl overflow-hidden border border-verdementa/20">
              <div className="bg-gradient-to-r from-verdeesmeralda to-azulprofundo p-6 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blanco/10 to-transparent animate-pulse"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blanco/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Send className="w-8 h-8 text-blanco" />
                  </div>
                  <h2 className="font-lato text-2xl font-bold text-blanco mb-2">Comparte tu Aventura</h2>
                  <p className="font-inter text-blanco/90">Sube tu foto, video o cuéntanos tu experiencia</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Campo Nombre */}
                <div className="group">
                  <label className="flex items-center gap-2 font-lato font-semibold text-azulprofundo mb-3">
                    <User className="w-5 h-5 text-verdeesmeralda" />
                    Tu nombre o apodo de detective
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    placeholder="Ej: EcoHéroe Sofía"
                    className="w-full px-4 py-3 bg-gradient-to-r from-verdeclaro/10 to-verdementa/10 border-2 border-verdeclaro/30 rounded-2xl focus:border-verdeesmeralda focus:outline-none font-inter transition-all duration-500 group-hover:shadow-lg transform group-hover:scale-[1.02]"
                    required
                  />
                </div>

                {/* Campo Archivo */}
                <div className="group">
                  <label className="flex items-center gap-2 font-lato font-semibold text-azulprofundo mb-3">
                    <Upload className="w-5 h-5 text-verdeesmeralda" />
                    Sube tu foto o video
                  </label>
                  <div
                    className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-500 cursor-pointer group-hover:shadow-lg transform group-hover:scale-[1.02] ${
                      dragActive
                        ? "border-verdeesmeralda bg-verdementa/10"
                        : "border-verdeclaro/50 bg-gradient-to-br from-verdeclaro/5 to-verdementa/5 hover:border-verdementa/70"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {formData.archivo ? (
                      <div className="space-y-3">
                        <div className="w-16 h-16 bg-gradient-to-r from-verdementa to-verdeclaro rounded-full flex items-center justify-center mx-auto animate-bounce">
                          <CheckCircle className="w-8 h-8 text-blanco" />
                        </div>
                        <p className="font-lato font-semibold text-verdeesmeralda">{formData.archivo.name}</p>
                        <p className="font-inter text-sm text-azulprofundo/70">
                          {(formData.archivo.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex justify-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-verdementa/20 to-verdeclaro/20 rounded-full flex items-center justify-center animate-pulse">
                            <Camera className="w-6 h-6 text-verdeesmeralda" />
                          </div>
                          <div
                            className="w-12 h-12 bg-gradient-to-r from-azulprofundo/20 to-verdeesmeralda/20 rounded-full flex items-center justify-center animate-pulse"
                            style={{ animationDelay: "0.2s" }}
                          >
                            <Video className="w-6 h-6 text-azulprofundo" />
                          </div>
                        </div>
                        <p className="font-lato font-semibold text-azulprofundo">
                          Arrastra tu archivo aquí o haz clic para seleccionar
                        </p>
                        <p className="font-inter text-sm text-azulprofundo/70">
                          Formatos: JPG, PNG, MP4, MOV (máx. 10MB)
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Campo Comentario */}
                <div className="group">
                  <label className="flex items-center gap-2 font-lato font-semibold text-azulprofundo mb-3">
                    <MessageCircle className="w-5 h-5 text-verdeesmeralda" />
                    Cuéntanos tu experiencia
                  </label>
                  <textarea
                    name="comentario"
                    value={formData.comentario}
                    onChange={handleInputChange}
                    placeholder="Describe tu aventura ecológica, qué aprendiste, cómo te sentiste..."
                    rows={4}
                    className="w-full px-4 py-3 bg-gradient-to-r from-verdeclaro/10 to-verdementa/10 border-2 border-verdeclaro/30 rounded-2xl focus:border-verdeesmeralda focus:outline-none font-inter resize-none transition-all duration-500 group-hover:shadow-lg transform group-hover:scale-[1.02]"
                    required
                  />
                </div>

                {/* Botón Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-2xl font-lato font-bold text-lg transition-all duration-500 transform relative overflow-hidden ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-verdeesmeralda to-azulprofundo hover:from-azulprofundo hover:to-verdeesmeralda hover:scale-105 hover:shadow-xl"
                  } text-blanco`}
                >
                  {/* Efecto de ondas */}
                  <div className="absolute inset-0 bg-blanco/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500"></div>

                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-blanco/30 border-t-blanco rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>¡Compartir mi Aventura!</span>
                        <Sparkles className="w-6 h-6" />
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Ranking de Detectives */}
          <div className="space-y-8">
            <div className="bg-blanco rounded-3xl shadow-2xl overflow-hidden border border-verdementa/20">
              <div className="bg-gradient-to-r from-azulprofundo to-verdeesmeralda p-6 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blanco/10 to-transparent animate-pulse"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blanco/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Trophy className="w-8 h-8 text-blanco" />
                  </div>
                  <h2 className="font-lato text-2xl font-bold text-blanco mb-2">Ranking de Detectives</h2>
                  <p className="font-inter text-blanco/90">Los héroes ecológicos más activos</p>
                </div>
              </div>

              <div className="p-6 max-h-96 overflow-y-auto">
                <div className="space-y-3">
                  {ranking.map((detective, index) => (
                    <div
                      key={detective.id}
                      className={`group relative bg-gradient-to-r ${getRankColor(detective.posicion)}/10 hover:${getRankColor(detective.posicion)}/20 rounded-2xl p-4 transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer border border-transparent hover:border-white/50`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-4">
                        {/* Posición y avatar */}
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${getRankColor(detective.posicion)} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}
                          >
                            {getRankIcon(detective.posicion)}
                          </div>
                          <div className="text-3xl group-hover:scale-110 transition-transform duration-500">
                            {detective.avatar}
                          </div>
                        </div>

                        {/* Información */}
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-lato font-bold text-azulprofundo group-hover:text-verdeesmeralda transition-colors duration-300">
                              {detective.nombre}
                            </h3>
                            <div className="flex items-center gap-1">
                              <Zap className="w-4 h-4 text-yellow-500" />
                              <span className="font-lato font-bold text-azulprofundo">
                                {detective.puntos.toLocaleString()}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-inter text-sm text-azulprofundo/70">{detective.nivel}</span>
                            <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-lato font-semibold ${getTimeColor(detective.estimatedTime)}`}>
                              <Clock className="w-3 h-3" />
                              <span>{detective.estimatedTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Efecto de brillo */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blanco/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Contacto */}
        <div className="mt-16">
          <div className="bg-blanco rounded-3xl shadow-2xl overflow-hidden border border-verdementa/20">
            <div className="bg-gradient-to-r from-verdementa to-verdeclaro p-8 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blanco/10 to-transparent animate-pulse"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-blanco/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                  <Mail className="w-10 h-10 text-blanco" />
                </div>
                <h2 className="font-lato text-3xl font-bold text-blanco mb-4">¿Tienes Preguntas?</h2>
                <p className="font-inter text-blanco/90 text-lg max-w-2xl mx-auto">
                  Estamos aquí para ayudarte en tu aventura ecológica. ¡Contáctanos o síguenos en redes sociales!
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Información de contacto */}
                <div className="space-y-6">
                  <h3 className="font-lato text-2xl font-bold text-azulprofundo mb-6">Información de Contacto</h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-verdementa/10 to-verdeclaro/10 rounded-2xl hover:shadow-lg transition-all duration-500 group cursor-pointer transform hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-verdementa to-verdeclaro rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Mail className="w-6 h-6 text-blanco" />
                      </div>
                      <div>
                        <p className="font-lato font-semibold text-azulprofundo">Email</p>
                        <p className="font-inter text-azulprofundo/70">info@ecodetectives.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-azulprofundo/10 to-verdeesmeralda/10 rounded-2xl hover:shadow-lg transition-all duration-500 group cursor-pointer transform hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-azulprofundo to-verdeesmeralda rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Phone className="w-6 h-6 text-blanco" />
                      </div>
                      <div>
                        <p className="font-lato font-semibold text-azulprofundo">Teléfono</p>
                        <p className="font-inter text-azulprofundo/70">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-verdeclaro/10 to-verdementa/10 rounded-2xl hover:shadow-lg transition-all duration-500 group cursor-pointer transform hover:scale-105">
                      <div className="w-12 h-12 bg-gradient-to-r from-verdeclaro to-verdementa rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <MapPin className="w-6 h-6 text-blanco" />
                      </div>
                      <div>
                        <p className="font-lato font-semibold text-azulprofundo">Ubicación</p>
                        <p className="font-inter text-azulprofundo/70">Ciudad Verde, Planeta Tierra</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Redes sociales */}
                <div className="space-y-6">
                  <h3 className="font-lato text-2xl font-bold text-azulprofundo mb-6">Síguenos en Redes</h3>

                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="group bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-lg border border-pink-200/50"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                        <Instagram className="w-6 h-6 text-blanco" />
                      </div>
                      <p className="font-lato font-semibold text-azulprofundo">Instagram</p>
                      <p className="font-inter text-sm text-azulprofundo/70">@ecodetectives</p>
                    </a>

                    <a
                      href="#"
                      className="group bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-lg border border-blue-200/50"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                        <Facebook className="w-6 h-6 text-blanco" />
                      </div>
                      <p className="font-lato font-semibold text-azulprofundo">Facebook</p>
                      <p className="font-inter text-sm text-azulprofundo/70">EcoDetectives</p>
                    </a>

                    <a
                      href="#"
                      className="group bg-gradient-to-r from-red-100 to-pink-100 hover:from-red-200 hover:to-pink-200 rounded-2xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-lg border border-red-200/50"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                        <Youtube className="w-6 h-6 text-blanco" />
                      </div>
                      <p className="font-lato font-semibold text-azulprofundo">YouTube</p>
                      <p className="font-inter text-sm text-azulprofundo/70">EcoDetectives TV</p>
                    </a>
                  </div>

                  <div className="bg-gradient-to-r from-verdementa/10 to-verdeclaro/10 rounded-2xl p-6 text-center">
                    <Heart className="w-8 h-8 text-red-500 mx-auto mb-3 animate-pulse" />
                    <p className="font-lato font-semibold text-azulprofundo mb-2">¡Únete a nuestra comunidad!</p>
                    <p className="font-inter text-sm text-azulprofundo/70">
                      Más de 10,000 eco-detectives ya forman parte de nuestra familia verde
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Perfil */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-negro/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-blanco rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-3xl border-2 border-verdementa/20">
            <div className="flex items-center justify-between p-6 border-b border-verdeclaro/20">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-verdementa to-verdeclaro text-blanco p-3 rounded-full">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-lato text-2xl font-bold text-azulprofundo">Tu Perfil de Detective</h2>
                  <p className="font-inter text-azulprofundo/70">Personaliza tu identidad</p>
                </div>
              </div>
              <button
                onClick={() => setShowProfileModal(false)}
                className="p-3 bg-verdeclaro/20 hover:bg-verdeclaro/40 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <X className="w-6 h-6 text-azulprofundo" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Selección de Avatar */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Elige tu Avatar</label>
                <div className="grid grid-cols-8 gap-3">
                  {availableAvatars.map((avatar) => (
                    <button
                      key={avatar}
                      onClick={() => setUserProfile(prev => ({ ...prev, avatar }))}
                      className={`w-12 h-12 text-2xl rounded-full transition-all duration-300 transform hover:scale-110 ${
                        userProfile.avatar === avatar
                          ? "bg-gradient-to-r from-verdementa to-verdeclaro shadow-lg scale-110"
                          : "bg-verdeclaro/20 hover:bg-verdeclaro/40"
                      }`}
                    >
                      {avatar}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nombre */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Tu Nombre</label>
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ej: María García"
                  className="w-full p-4 bg-blanco border-2 border-verdeclaro/30 rounded-2xl focus:border-verdementa focus:outline-none font-inter text-lg"
                />
              </div>

              {/* Apodo */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Apodo de Detective</label>
                <input
                  type="text"
                  value={userProfile.nickname}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, nickname: e.target.value }))}
                  placeholder="Ej: EcoHéroe"
                  className="w-full p-4 bg-blanco border-2 border-verdeclaro/30 rounded-2xl focus:border-verdementa focus:outline-none font-inter text-lg"
                />
              </div>

              {/* Nivel */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Tu Nivel</label>
                <select
                  value={userProfile.level}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, level: e.target.value }))}
                  className="w-full p-4 bg-blanco border-2 border-verdeclaro/30 rounded-2xl focus:border-verdementa focus:outline-none font-inter text-lg"
                >
                  {availableLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              {/* Tiempo estimado */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Tiempo Estimado de Participación</label>
                <select
                  value={userProfile.estimatedTime}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, estimatedTime: e.target.value }))}
                  className="w-full p-4 bg-blanco border-2 border-verdeclaro/30 rounded-2xl focus:border-verdementa focus:outline-none font-inter text-lg"
                >
                  <option value="1 min">1 minuto</option>
                  <option value="2 min">2 minutos</option>
                  <option value="3 min">3 minutos</option>
                  <option value="5 min">5 minutos</option>
                  <option value="10 min">10 minutos</option>
                </select>
              </div>

              {/* Botones */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="flex-1 bg-verdeclaro/20 hover:bg-verdeclaro/40 text-azulprofundo font-lato font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleProfileSave}
                  disabled={!userProfile.name || !userProfile.nickname}
                  className="flex-1 bg-gradient-to-r from-verdementa to-verdeclaro text-blanco font-lato font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                >
                  <Save className="w-5 h-5" />
                  <span>Guardar Perfil</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Éxito */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-negro/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-blanco rounded-3xl max-w-md w-full shadow-3xl border-2 border-verdementa/20 animate-slide-up">
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle className="w-10 h-10 text-blanco" />
              </div>
              <h3 className="font-lato text-2xl font-bold text-azulprofundo mb-4">¡Aventura Enviada!</h3>
              <p className="font-inter text-azulprofundo/70 mb-6">
                Tu experiencia ecológica ha sido compartida exitosamente. ¡Gracias por ser parte de nuestra comunidad!
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-gradient-to-r from-verdementa to-verdeclaro text-blanco font-lato font-bold py-3 px-6 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                ¡Genial!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
