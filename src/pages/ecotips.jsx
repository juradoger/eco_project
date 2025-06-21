import { useState } from "react"
import {
  Lightbulb,
  Droplets,
  Recycle,
  Car,
  ShoppingBag,
  Leaf,
  Zap,
  TreePine,
  Upload,
  Camera,
  Trophy,
  Calendar,
  Play,
  Heart,
  Share2,
  CheckCircle,
  X,
  Plus,
  Image,
  FileText,
} from "lucide-react"

export default function EcoTips() {
  const [likedTips, setLikedTips] = useState([])
  const [selectedTip, setSelectedTip] = useState(null)
  const [showChallengeModal, setShowChallengeModal] = useState(false)
  const [challengeForm, setChallengeForm] = useState({
    name: "",
    age: "",
    description: "",
    photos: [],
    step1: "",
    step2: "",
    step3: "",
    step4: "",
    step5: "",
    step6: "",
    step7: ""
  })
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  // Datos de los eco-consejos
  const ecoTips = [
    {
      id: 1,
      title: "Apaga la luz si no la usas",
      description: "Cada vez que sales de una habitación, apaga las luces. Ahorrarás energía y dinero.",
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-400",
      bgColor: "bg-yellow-50",
      impact: "Ahorra hasta 10% en electricidad",
      difficulty: "Súper fácil",
      time: "0 segundos",
      category: "Energía",
      videoUrl: "https://www.youtube.com/watch?v=example1"
    },
    {
      id: 2,
      title: "Cierra el grifo al cepillarte",
      description: "Mientras te cepillas los dientes, cierra el grifo. Cada gota cuenta para el planeta.",
      icon: Droplets,
      color: "from-blue-400 to-cyan-400",
      bgColor: "bg-blue-50",
      impact: "Ahorra 6 litros por minuto",
      difficulty: "Fácil",
      time: "2 minutos",
      category: "Agua",
      videoUrl: "https://www.youtube.com/watch?v=example2"
    },
    {
      id: 3,
      title: "Separa tu basura correctamente",
      description: "Clasifica tus residuos: orgánicos, reciclables y no reciclables. ¡Hazlo divertido!",
      icon: Recycle,
      color: "from-verdementa to-verdeclaro",
      bgColor: "bg-green-50",
      impact: "Reduce 70% de residuos",
      difficulty: "Fácil",
      time: "1 minuto",
      category: "Reciclaje",
    },
    {
      id: 4,
      title: "Camina o usa bicicleta",
      description: "Para distancias cortas, elige caminar o andar en bici. Es saludable y no contamina.",
      icon: Car,
      color: "from-verdeesmeralda to-azulprofundo",
      bgColor: "bg-emerald-50",
      impact: "Cero emisiones de CO2",
      difficulty: "Medio",
      time: "Variable",
      category: "Transporte",
    },
    {
      id: 5,
      title: "Usa bolsas reutilizables",
      description: "Lleva tu propia bolsa al supermercado. Las bolsas de tela son geniales y duraderas.",
      icon: ShoppingBag,
      color: "from-purple-400 to-pink-400",
      bgColor: "bg-purple-50",
      impact: "Evita 100+ bolsas plásticas",
      difficulty: "Súper fácil",
      time: "0 segundos",
      category: "Consumo",
    },
    {
      id: 6,
      title: "Planta una semilla",
      description: "Siembra una planta en casa o en el jardín. Observa cómo crece y cuida de ella.",
      icon: TreePine,
      color: "from-verdeclaro to-verdementa",
      bgColor: "bg-green-50",
      impact: "Produce oxígeno limpio",
      difficulty: "Fácil",
      time: "5 minutos",
      category: "Naturaleza",
    },
    {
      id: 7,
      title: "Desconecta aparatos sin usar",
      description: "Los aparatos en standby siguen consumiendo energía. Desconéctalos completamente.",
      icon: Zap,
      color: "from-red-400 to-orange-400",
      bgColor: "bg-red-50",
      impact: "Ahorra 5-10% de energía",
      difficulty: "Fácil",
      time: "30 segundos",
      category: "Energía",
    },
    {
      id: 8,
      title: "Reutiliza antes de tirar",
      description: "Antes de botar algo, piensa: ¿puedo usarlo para otra cosa? ¡Sé creativo!",
      icon: Leaf,
      color: "from-teal-400 to-green-400",
      bgColor: "bg-teal-50",
      impact: "Reduce residuos 50%",
      difficulty: "Medio",
      time: "5 minutos",
      category: "Reutilización",
    },
  ]

  const handleLike = (tipId) => {
    if (likedTips.includes(tipId)) {
      setLikedTips(likedTips.filter((id) => id !== tipId))
    } else {
      setLikedTips([...likedTips, tipId])
    }
  }

  const handleShare = async (tip) => {
    const shareData = {
      title: tip.title,
      text: tip.description,
      url: window.location.href + `?tip=${tip.id}`,
    }
    if (navigator.share) {
      await navigator.share(shareData)
    } else {
      await navigator.clipboard.writeText(`${tip.title}\n${tip.description}\n${shareData.url}`)
      alert('¡Enlace copiado al portapapeles!')
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Súper fácil":
        return "bg-green-100 text-green-700"
      case "Fácil":
        return "bg-blue-100 text-blue-700"
      case "Medio":
        return "bg-yellow-100 text-yellow-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  // Funciones para el modal del reto
  const handleChallengeClick = () => {
    setShowChallengeModal(true)
  }

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files)
    if (files.length > 0) {
      setChallengeForm(prev => ({
        ...prev,
        photos: [...prev.photos, ...files]
      }))
    }
  }

  const removePhoto = (index) => {
    setChallengeForm(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }))
  }

  const handleChallengeSubmit = async (e) => {
    e.preventDefault()
    if (!challengeForm.name || !challengeForm.age || challengeForm.photos.length === 0) {
      alert("Por favor completa tu nombre, edad y sube al menos una foto")
      return
    }

    setIsUploading(true)
    setUploadProgress(0)

    try {
      // Simular progreso de subida
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)

      // Aquí iría la subida real a Firebase Storage y Firestore
      // const uploadPromises = challengeForm.photos.map(async (photo, index) => {
      //   const storageRef = ref(storage, `challenge/${Date.now()}_${index}_${photo.name}`)
      //   const uploadTask = uploadBytesResumable(storageRef, photo)
      //   return uploadTask
      // })
      
      // await Promise.all(uploadPromises)
      
      // await addDoc(collection(db, "challenges"), {
      //   ...challengeForm,
      //   createdAt: serverTimestamp(),
      //   challengeType: "planting",
      //   status: "submitted"
      // })

      // Simular tiempo de subida
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setUploadProgress(100)
      
      // Resetear formulario
      setChallengeForm({
        name: "",
        age: "",
        description: "",
        photos: [],
        step1: "",
        step2: "",
        step3: "",
        step4: "",
        step5: "",
        step6: "",
        step7: ""
      })
      
      setShowChallengeModal(false)
      setIsUploading(false)
      setUploadProgress(0)
      
      alert("¡Tu reto se subió exitosamente! ¡Gracias por participar!")
      
    } catch (error) {
      console.error("Error uploading challenge:", error)
      alert("Error al subir el reto. Intenta de nuevo.")
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  const resetChallengeForm = () => {
    setChallengeForm({
      name: "",
      age: "",
      description: "",
      photos: [],
      step1: "",
      step2: "",
      step3: "",
      step4: "",
      step5: "",
      step6: "",
      step7: ""
    })
    setUploadProgress(0)
    setIsUploading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blancoverdoso to-verdeclaro/10">
      {/* Header */}
      <section className="bg-gradient-to-r from-verdementa/20 to-verdeclaro/20 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Ícono separado del título */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-verdementa to-verdeclaro rounded-full shadow-xl animate-bounce">
              <Lightbulb className="w-10 h-10 text-blanco" />
            </div>
          </div>

          <h1 className="font-lato text-4xl md:text-6xl font-bold text-azulprofundo mb-4">Eco-Tips Geniales</h1>
          <p className="font-inter text-xl text-azulprofundo/80 max-w-3xl mx-auto mb-8">
            Descubre consejos súper fáciles para cuidar el planeta. Cada pequeña acción cuenta y juntos podemos hacer la
            diferencia.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blanco rounded-full px-6 py-3 shadow-lg border border-verdementa/20">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-verdeesmeralda" />
                <span className="font-lato font-semibold text-azulprofundo">8 Tips Prácticos</span>
              </div>
            </div>
            <div className="bg-blanco rounded-full px-6 py-3 shadow-lg border border-verdementa/20">
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5 text-azulprofundo" />
                <span className="font-lato font-semibold text-azulprofundo">Videos Explicativos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Eco-Tips */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ecoTips.map((tip, index) => {
              const IconComponent = tip.icon
              return (
                <div
                  key={tip.id}
                  className={`group ${tip.bgColor} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-white/50 cursor-pointer transform hover:scale-105 hover:-rotate-1`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedTip(tip)}
                >
                  {/* Header con ícono animado */}
                  <div className={`bg-gradient-to-r ${tip.color} p-6 text-center relative overflow-hidden`}>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-blanco/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-blanco group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      <div className="text-xs font-lato font-semibold text-blanco/80 bg-blanco/20 rounded-full px-3 py-1 inline-block">
                        {tip.category}
                      </div>
                    </div>

                    {/* Efecto de ondas */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blanco/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="font-lato text-lg font-bold text-azulprofundo mb-3 group-hover:text-verdeesmeralda transition-colors duration-300">
                      {tip.title}
                    </h3>

                    <p className="font-inter text-sm text-azulprofundo/80 mb-4 leading-relaxed">{tip.description}</p>

                    {/* Stats */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-inter text-azulprofundo/60">Impacto:</span>
                        <span className="font-lato font-semibold text-verdeesmeralda">{tip.impact}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-inter text-azulprofundo/60">Tiempo:</span>
                        <span className="font-lato font-semibold text-azulprofundo">{tip.time}</span>
                      </div>
                    </div>

                    {/* Badge de dificultad */}
                    <div className="mb-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-lato font-semibold ${getDifficultyColor(tip.difficulty)}`}
                      >
                        {tip.difficulty}
                      </span>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => setSelectedTip(tip)}
                        className={`flex-1 bg-gradient-to-r ${tip.color} text-blanco font-lato font-semibold py-2 px-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}
                      >
                        <Play className="w-4 h-4" />
                        <span className="text-sm">Ver Video</span>
                      </button>

                      <button
                        onClick={() => handleLike(tip.id)}
                        className={`p-2 rounded-xl transition-all duration-300 transform hover:scale-110 ${
                          likedTips.includes(tip.id)
                            ? "bg-red-100 text-red-500"
                            : "bg-gray-100 text-gray-500 hover:bg-red-100 hover:text-red-500"
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${likedTips.includes(tip.id) ? "fill-current" : ""}`} />
                      </button>

                      <button className="p-2 bg-gray-100 hover:bg-blue-100 text-gray-500 hover:text-blue-500 rounded-xl transition-all duration-300 transform hover:scale-110">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reto de la semana */}
      <section className="py-16 px-4 bg-gradient-to-r from-azulprofundo/10 to-verdeesmeralda/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blanco rounded-3xl shadow-2xl overflow-hidden border border-verdementa/20">
            {/* Header del reto */}
            <div className="bg-gradient-to-r from-azulprofundo to-verdeesmeralda p-8 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blanco/10 to-transparent animate-pulse"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 bg-blanco/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <Trophy className="w-10 h-10 text-blanco" />
                </div>
                <h2 className="font-lato text-3xl md:text-4xl font-bold text-blanco mb-2">Reto de la Semana</h2>
                <p className="font-inter text-blanco/90 text-lg">¡Acepta el desafío y comparte tu experiencia!</p>
              </div>
            </div>

            {/* Contenido del reto */}
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-verdementa/20 to-verdeclaro/20 rounded-full px-6 py-3 mb-6">
                  <Calendar className="w-5 h-5 text-verdeesmeralda" />
                  <span className="font-lato font-semibold text-azulprofundo">Semana del 20-26 Enero</span>
                </div>

                <h3 className="font-lato text-2xl font-bold text-azulprofundo mb-4">
                  🌱 "Planta y Documenta tu Crecimiento Verde"
                </h3>

                <p className="font-inter text-azulprofundo/80 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                  Planta una semilla (puede ser de frijol, lentejas, o cualquier planta) y documenta su crecimiento
                  durante toda la semana. Toma fotos diarias y comparte tu experiencia.
                </p>

                {/* Pasos del reto */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-verdementa/10 rounded-2xl p-4">
                    <div className="text-3xl mb-2">🌱</div>
                    <h4 className="font-lato font-bold text-azulprofundo mb-2">Paso 1: Planta</h4>
                    <p className="font-inter text-sm text-azulprofundo/70">Elige tu semilla y plántala con amor</p>
                  </div>
                  <div className="bg-verdeclaro/10 rounded-2xl p-4">
                    <div className="text-3xl mb-2">📸</div>
                    <h4 className="font-lato font-bold text-azulprofundo mb-2">Paso 2: Documenta</h4>
                    <p className="font-inter text-sm text-azulprofundo/70">Toma fotos diarias del progreso</p>
                  </div>
                  <div className="bg-verdeesmeralda/10 rounded-2xl p-4">
                    <div className="text-3xl mb-2">🏆</div>
                    <h4 className="font-lato font-bold text-azulprofundo mb-2">Paso 3: Comparte</h4>
                    <p className="font-inter text-sm text-azulprofundo/70">Sube tu evidencia y gana puntos</p>
                  </div>
                </div>

                {/* Stats del reto */}
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <div className="text-center">
                    <div className="font-lato text-2xl font-bold text-verdeesmeralda">156</div>
                    <div className="font-inter text-sm text-azulprofundo/70">Participantes</div>
                  </div>
                  <div className="text-center">
                    <div className="font-lato text-2xl font-bold text-azulprofundo">7</div>
                    <div className="font-inter text-sm text-azulprofundo/70">Días restantes</div>
                  </div>
                  <div className="text-center">
                    <div className="font-lato text-2xl font-bold text-yellow-500">500</div>
                    <div className="font-inter text-sm text-azulprofundo/70">Puntos premio</div>
                  </div>
                </div>

                {/* Botón de participar funcional */}
                <button 
                  onClick={handleChallengeClick}
                  className="bg-gradient-to-r from-verdeesmeralda to-azulprofundo hover:from-azulprofundo hover:to-verdeesmeralda text-blanco font-lato font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto text-lg group"
                >
                  <Upload className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Subir mi Evidencia</span>
                  <Camera className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                </button>

                <p className="font-inter text-xs text-azulprofundo/60 mt-4">
                  * Puedes subir fotos, videos o un collage de tu experiencia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal detallado */}
      {selectedTip && (
        <div className="fixed inset-0 bg-negro/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedTip(null)}>
          <div className="bg-blanco rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-verdementa/30 animate-slide-up" onClick={e => e.stopPropagation()}>
            {/* Header del modal */}
            <div className={`bg-gradient-to-r ${selectedTip.color} p-8 text-center relative`}>
              <div className="flex items-center justify-between mb-4">
                <div></div>
                <button
                  onClick={() => setSelectedTip(null)}
                  className="p-2 bg-blanco/20 hover:bg-blanco/30 rounded-full transition-colors duration-300"
                >
                  <span className="text-blanco text-xl">×</span>
                </button>
              </div>
              <div className="w-20 h-20 bg-blanco/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <selectedTip.icon className="w-12 h-12 text-blanco" />
              </div>
              <h2 className="font-lato text-3xl font-bold text-blanco mb-2">{selectedTip.title}</h2>
              <div className="text-xs font-lato font-semibold text-blanco/80 bg-blanco/20 rounded-full px-3 py-1 inline-block mb-2">
                {selectedTip.category}
              </div>
            </div>
            {/* Contenido del modal */}
            <div className="p-8">
              <p className="font-inter text-azulprofundo/80 leading-relaxed mb-4 text-lg">{selectedTip.description}</p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="inline-block px-4 py-2 rounded-full text-sm font-lato font-semibold bg-gradient-to-r from-verdementa to-verdeclaro text-blanco">
                  {selectedTip.impact}
                </span>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-lato font-semibold ${getDifficultyColor(selectedTip.difficulty)}`}>{selectedTip.difficulty}</span>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-lato font-semibold bg-blanco/40 text-azulprofundo">{selectedTip.time}</span>
              </div>
              {/* Botones animados */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => handleLike(selectedTip.id)}
                  className={`flex-1 py-3 rounded-full font-lato font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md ${likedTips.includes(selectedTip.id) ? 'bg-red-500 text-blanco' : 'bg-verdeclaro/20 text-azulprofundo hover:bg-red-500 hover:text-blanco'}`}
                >
                  <Heart className={`w-6 h-6 ${likedTips.includes(selectedTip.id) ? 'fill-current animate-pulse' : ''}`} />
                  Me gusta
                </button>
                <button
                  onClick={() => handleShare(selectedTip)}
                  className="flex-1 py-3 rounded-full font-lato font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md bg-gradient-to-r from-verdementa to-verdeclaro text-blanco"
                >
                  <Share2 className="w-6 h-6" />
                  Compartir
                </button>
                {selectedTip.videoUrl && (
                  <a
                    href={selectedTip.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-full font-lato font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-md bg-gradient-to-r from-azulprofundo to-verdeesmeralda text-blanco"
                  >
                    <Play className="w-6 h-6" />
                    Ver Video
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal del reto funcional */}
      {showChallengeModal && (
        <div className="fixed inset-0 bg-negro/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-blanco rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-3xl border-2 border-verdementa/20">
            {/* Header del modal */}
            <div className="flex items-center justify-between p-6 border-b border-verdeclaro/20">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-verdementa to-verdeclaro text-blanco p-3 rounded-full">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-lato text-2xl font-bold text-azulprofundo">Reto: Planta y Documenta</h2>
                  <p className="font-inter text-azulprofundo/70">Comparte tu experiencia de crecimiento</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowChallengeModal(false)
                  resetChallengeForm()
                }}
                className="p-3 bg-verdeclaro/20 hover:bg-verdeclaro/40 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <X className="w-6 h-6 text-azulprofundo" />
              </button>
            </div>

            {/* Formulario del reto */}
            <form onSubmit={handleChallengeSubmit} className="p-6 space-y-6">
              {/* Información personal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-lato font-bold text-azulprofundo mb-3">Tu nombre</label>
                  <input
                    type="text"
                    value={challengeForm.name}
                    onChange={(e) => setChallengeForm(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Ej: María"
                    className="w-full p-4 bg-blanco border-2 border-verdeclaro/30 rounded-2xl focus:border-verdementa focus:outline-none font-inter text-lg"
                    disabled={isUploading}
                  />
                </div>
                <div>
                  <label className="block font-lato font-bold text-azulprofundo mb-3">Tu edad</label>
                  <input
                    type="number"
                    value={challengeForm.age}
                    onChange={(e) => setChallengeForm(prev => ({ ...prev, age: e.target.value }))}
                    placeholder="Ej: 8"
                    className="w-full p-4 bg-blanco border-2 border-verdeclaro/30 rounded-2xl focus:border-verdementa focus:outline-none font-inter text-lg"
                    disabled={isUploading}
                  />
                </div>
              </div>

              {/* Descripción */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Cuéntanos tu experiencia</label>
                <textarea
                  value={challengeForm.description}
                  onChange={(e) => setChallengeForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe cómo fue tu experiencia plantando y cuidando tu semilla..."
                  rows={4}
                  className="w-full p-4 bg-blanco border-2 border-verdeclaro/30 rounded-2xl focus:border-verdementa focus:outline-none font-inter text-lg resize-none"
                  disabled={isUploading}
                />
              </div>

              {/* Subida de fotos */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Fotos de tu progreso (máximo 7)</label>
                <div className="border-2 border-dashed border-verdeclaro/30 rounded-2xl p-6 hover:border-verdementa/50 transition-colors duration-300">
                  <input
                    type="file"
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    multiple
                    className="hidden"
                    id="challenge-photos"
                    disabled={isUploading || challengeForm.photos.length >= 7}
                  />
                  <label htmlFor="challenge-photos" className="cursor-pointer">
                    <div className="text-center">
                      <div className="text-4xl mb-4">📸</div>
                      <p className="font-inter text-azulprofundo/70 mb-2">
                        {challengeForm.photos.length === 0 
                          ? "Haz clic para seleccionar fotos" 
                          : `${challengeForm.photos.length} foto(s) seleccionada(s)`
                        }
                      </p>
                      <p className="font-inter text-sm text-azulprofundo/50">
                        JPG, PNG (máx. 5MB cada una)
                      </p>
                    </div>
                  </label>
                </div>

                {/* Preview de fotos */}
                {challengeForm.photos.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {challengeForm.photos.map((photo, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={URL.createObjectURL(photo)}
                          alt={`Foto ${index + 1}`}
                          className="w-full h-24 object-cover rounded-xl"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute top-1 right-1 bg-red-500 text-blanco rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-1 left-1 bg-negro/70 text-blanco text-xs px-2 py-1 rounded">
                          Día {index + 1}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Progreso de subida */}
              {isUploading && (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-lato font-bold text-azulprofundo">
                    <span>Subiendo evidencia...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-verdeclaro/20 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-verdementa to-verdeclaro h-3 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Botones */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowChallengeModal(false)
                    resetChallengeForm()
                  }}
                  className="flex-1 bg-verdeclaro/20 hover:bg-verdeclaro/40 text-azulprofundo font-lato font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                  disabled={isUploading}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isUploading || !challengeForm.name || !challengeForm.age || challengeForm.photos.length === 0}
                  className="flex-1 bg-gradient-to-r from-verdementa to-verdeclaro text-blanco font-lato font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                >
                  {isUploading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-blanco/30 border-t-blanco rounded-full animate-spin"></div>
                      <span>Subiendo...</span>
                    </>
                  ) : (
                    <>
                      <Trophy className="w-5 h-5" />
                      <span>Enviar Reto</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
