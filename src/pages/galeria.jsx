import { useState, useEffect } from "react"
import {
  Camera,
  Video,
  Scissors,
  Palette,
  Heart,
  Eye,
  Download,
  Share2,
  X,
  Grid3X3,
  List,
  Search,
  Upload,
  Play,
  MessageCircle,
  Bookmark,
  ExternalLink,
  Plus,
  FileText,
  Image,
  Film,
} from "lucide-react"

export default function Galeria() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [selectedItem, setSelectedItem] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [likedItems, setLikedItems] = useState({})
  const [downloadCounts, setDownloadCounts] = useState({})
  const [shareCounts, setShareCounts] = useState({})
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploadForm, setUploadForm] = useState({
    title: "",
    description: "",
    category: "naturaleza",
    type: "image",
    author: "",
    file: null,
    thumbnail: "🌲"
  })
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  // Datos de la galería
  const galleryItems = [
    {
      id: 1,
      type: "image",
      category: "naturaleza",
      title: "Bosque Encantado",
      description: "Un hermoso bosque lleno de vida y color",
      author: "María, 8 años",
      likes: 24,
      views: 156,
      thumbnail: "🌲",
      date: "2024-01-15",
      imageUrl: "/images/bosque-encantado.jpg",
      downloadUrl: "/downloads/bosque-encantado.jpg",
    },
    {
      id: 2,
      type: "video",
      category: "reciclaje",
      title: "Cómo hacer una maceta con botellas",
      description: "Tutorial paso a paso para reciclar botellas de plástico",
      author: "Carlos, 10 años",
      likes: 45,
      views: 289,
      thumbnail: "🌱",
      duration: "3:24",
      date: "2024-01-14",
      videoUrl: "/videos/maceta-botellas.mp4",
      downloadUrl: "/downloads/maceta-botellas.mp4",
    },
    {
      id: 3,
      type: "craft",
      category: "manualidades",
      title: "Comedero para pájaros",
      description: "Manualidad ecológica con materiales reciclados",
      author: "Ana, 9 años",
      likes: 38,
      views: 201,
      thumbnail: "🐦",
      steps: 5,
      date: "2024-01-13",
      imageUrl: "/images/comedero-pajaros.jpg",
      downloadUrl: "/downloads/comedero-pajaros.pdf",
    },
    {
      id: 4,
      type: "drawing",
      category: "dibujos",
      title: "La Tierra Sonriente",
      description: "Dibujo de nuestro planeta feliz y verde",
      author: "Luis, 7 años",
      likes: 52,
      views: 178,
      thumbnail: "🌍",
      date: "2024-01-12",
      imageUrl: "/images/tierra-sonriente.jpg",
      downloadUrl: "/downloads/tierra-sonriente.jpg",
    },
    {
      id: 5,
      type: "image",
      category: "naturaleza",
      title: "Jardín de Mariposas",
      description: "Fotografía de mariposas en el jardín escolar",
      author: "Sofia, 11 años",
      likes: 31,
      views: 143,
      thumbnail: "🦋",
      date: "2024-01-11",
      imageUrl: "/images/jardin-mariposas.jpg",
      downloadUrl: "/downloads/jardin-mariposas.jpg",
    },
    {
      id: 6,
      type: "video",
      category: "reciclaje",
      title: "Separando residuos en casa",
      description: "Video educativo sobre clasificación de basura",
      author: "Diego, 9 años",
      likes: 67,
      views: 324,
      thumbnail: "♻️",
      duration: "2:15",
      date: "2024-01-10",
      videoUrl: "/videos/separando-residuos.mp4",
      downloadUrl: "/downloads/separando-residuos.mp4",
    },
    {
      id: 7,
      type: "craft",
      category: "manualidades",
      title: "Porta lápices ecológico",
      description: "Hecho con latas recicladas y decorado con hojas",
      author: "Emma, 8 años",
      likes: 29,
      views: 167,
      thumbnail: "✏️",
      steps: 4,
      date: "2024-01-09",
      imageUrl: "/images/porta-lapices.jpg",
      downloadUrl: "/downloads/porta-lapices.pdf",
    },
    {
      id: 8,
      type: "drawing",
      category: "dibujos",
      title: "Familia de Árboles",
      description: "Dibujo colorido de una familia de árboles felices",
      author: "Pablo, 6 años",
      likes: 41,
      views: 192,
      thumbnail: "🌳",
      date: "2024-01-08",
      imageUrl: "/images/familia-arboles.jpg",
      downloadUrl: "/downloads/familia-arboles.jpg",
    },
  ]

  const categories = [
    { id: "all", name: "Todo", icon: Grid3X3, count: galleryItems.length },
    {
      id: "naturaleza",
      name: "Naturaleza",
      icon: Camera,
      count: galleryItems.filter((item) => item.category === "naturaleza").length,
    },
    {
      id: "reciclaje",
      name: "Reciclaje",
      icon: Video,
      count: galleryItems.filter((item) => item.category === "reciclaje").length,
    },
    {
      id: "manualidades",
      name: "Manualidades",
      icon: Scissors,
      count: galleryItems.filter((item) => item.category === "manualidades").length,
    },
    {
      id: "dibujos",
      name: "Dibujos",
      icon: Palette,
      count: galleryItems.filter((item) => item.category === "dibujos").length,
    },
  ]

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getTypeIcon = (type) => {
    switch (type) {
      case "image":
        return Camera
      case "video":
        return Video
      case "craft":
        return Scissors
      case "drawing":
        return Palette
      default:
        return Camera
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case "image":
        return "from-verdementa to-verdeclaro"
      case "video":
        return "from-verdeesmeralda to-azulprofundo"
      case "craft":
        return "from-verdeclaro to-verdementa"
      case "drawing":
        return "from-azulprofundo to-verdeesmeralda"
      default:
        return "from-verdementa to-verdeclaro"
    }
  }

  // Funciones para interactuar con Firebase
  const handleLike = async (itemId) => {
    try {
      const newLikedState = !likedItems[itemId]
      setLikedItems(prev => ({ ...prev, [itemId]: newLikedState }))
      
      // Aquí iría la llamada a Firebase
      // await updateDoc(doc(db, "gallery", itemId.toString()), {
      //   likes: increment(newLikedState ? 1 : -1)
      // })
      
      console.log(`${newLikedState ? 'Liked' : 'Unliked'} item ${itemId}`)
    } catch (error) {
      console.error("Error updating like:", error)
    }
  }

  const handleDownload = async (item) => {
    try {
      setDownloadCounts(prev => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }))
      
      // Crear un enlace temporal para descargar
      const link = document.createElement('a')
      link.href = item.downloadUrl
      link.download = `${item.title}.${item.type === 'video' ? 'mp4' : item.type === 'craft' ? 'pdf' : 'jpg'}`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // Aquí iría la llamada a Firebase
      // await updateDoc(doc(db, "gallery", item.id.toString()), {
      //   downloads: increment(1)
      // })
      
      console.log(`Downloaded item ${item.id}`)
    } catch (error) {
      console.error("Error downloading:", error)
    }
  }

  const handleShare = async (item) => {
    try {
      setShareCounts(prev => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }))
      
      const shareData = {
        title: item.title,
        text: item.description,
        url: window.location.href + `?item=${item.id}`,
      }
      
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback: copiar al portapapeles
        await navigator.clipboard.writeText(`${item.title}\n${item.description}\n${shareData.url}`)
        alert('¡Enlace copiado al portapapeles!')
      }
      
      // Aquí iría la llamada a Firebase
      // await updateDoc(doc(db, "gallery", item.id.toString()), {
      //   shares: increment(1)
      // })
      
      console.log(`Shared item ${item.id}`)
    } catch (error) {
      console.error("Error sharing:", error)
    }
  }

  // Funciones para el modal de subida
  const handleUploadClick = () => {
    setShowUploadModal(true)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setUploadForm(prev => ({
        ...prev,
        file: file,
        thumbnail: getThumbnailForFile(file)
      }))
    }
  }

  const getThumbnailForFile = (file) => {
    const type = file.type
    if (type.startsWith('image/')) return "🖼️"
    if (type.startsWith('video/')) return "🎬"
    if (type.includes('pdf')) return "📄"
    return "📎"
  }

  const handleTypeChange = (type) => {
    setUploadForm(prev => ({
      ...prev,
      type: type,
      thumbnail: type === "image" ? "🖼️" : type === "video" ? "🎬" : type === "craft" ? "✂️" : "🎨"
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!uploadForm.file || !uploadForm.title || !uploadForm.description || !uploadForm.author) {
      alert("Por favor completa todos los campos")
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

      // Aquí iría la subida real a Firebase Storage
      // const storageRef = ref(storage, `gallery/${Date.now()}_${uploadForm.file.name}`)
      // const uploadTask = uploadBytesResumable(storageRef, uploadForm.file)
      
      // Simular tiempo de subida
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setUploadProgress(100)
      
      // Aquí iría la guardada en Firestore
      // await addDoc(collection(db, "gallery"), {
      //   ...uploadForm,
      //   likes: 0,
      //   views: 0,
      //   date: new Date().toISOString().split('T')[0],
      //   createdAt: serverTimestamp()
      // })

      // Resetear formulario
      setUploadForm({
        title: "",
        description: "",
        category: "naturaleza",
        type: "image",
        author: "",
        file: null,
        thumbnail: "🌲"
      })
      
      setShowUploadModal(false)
      setIsUploading(false)
      setUploadProgress(0)
      
      alert("¡Tu creación se subió exitosamente!")
      
    } catch (error) {
      console.error("Error uploading:", error)
      alert("Error al subir el archivo. Intenta de nuevo.")
      setIsUploading(false)
      setUploadProgress(0)
    }
  }

  const resetForm = () => {
    setUploadForm({
      title: "",
      description: "",
      category: "naturaleza",
      type: "image",
      author: "",
      file: null,
      thumbnail: "🌲"
    })
    setUploadProgress(0)
    setIsUploading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blancoverdoso to-verdeclaro/10">
      {/* Header mejorado */}
      <section className="bg-gradient-to-r from-verdementa/30 to-verdeclaro/30 py-20 px-4 relative overflow-hidden">
        {/* Partículas de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 4}s`,
              }}
            >
              <div className="text-2xl md:text-3xl">
                {["📸", "🎨", "🌱", "♻️", "🦋", "🌳", "✨", "🌟"][Math.floor(Math.random() * 8)]}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-verdementa to-verdeclaro text-blanco px-8 py-4 rounded-full font-lato font-bold text-xl mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Camera className="w-7 h-7 animate-pulse" />
            <span className="italic">Galería Eco</span>
            <Heart className="w-7 h-7 animate-pulse" />
          </div>

          <h1 className="font-lato text-5xl md:text-7xl font-bold mb-6 leading-tight relative italic">
            <span className="bg-gradient-to-r from-verdementa via-verdeesmeralda to-azulprofundo bg-clip-text text-transparent animate-pulse">
              📸 Nuestra Galería Verde
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse opacity-50 blur-sm"></div>
          </h1>
          
          <p className="font-inter text-2xl md:text-3xl text-azulprofundo/90 max-w-4xl mx-auto mb-10 font-semibold leading-relaxed">
            Descubre las increíbles creaciones de nuestros Eco-Detectives: fotos, videos, manualidades y dibujos que
            inspiran a cuidar el planeta
          </p>

          {/* Botón de subir contenido funcional */}
          <button 
            onClick={handleUploadClick}
            className="bg-gradient-to-r from-azulprofundo to-verdeesmeralda hover:from-verdeesmeralda hover:to-azulprofundo text-blanco font-lato font-bold py-5 px-10 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 flex items-center gap-4 mx-auto border-2 border-transparent hover:border-blanco/30 group relative overflow-hidden"
          >
            {/* Efectos de ondas */}
            <div className="absolute inset-0 bg-blanco/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blanco/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            <Upload className="w-7 h-7 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10" />
            <span className="relative z-10 text-lg">Subir mi creación</span>
          </button>
        </div>
      </section>

      {/* Filtros y búsqueda mejorados */}
      <section className="py-10 px-4 bg-blanco/60 backdrop-blur-md sticky top-0 z-40 border-b border-verdeclaro/30 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Categorías mejoradas */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-lato font-bold transition-all duration-500 transform hover:scale-110 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-verdementa to-verdeclaro text-blanco shadow-2xl scale-105"
                        : "bg-blanco text-azulprofundo hover:bg-verdeclaro/30 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-verdementa/30"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="text-lg">{category.name}</span>
                    <span className="bg-blanco/20 text-sm px-3 py-1 rounded-full font-bold">{category.count}</span>
                  </button>
                )
              })}
            </div>

            {/* Búsqueda y vista mejorados */}
            <div className="flex items-center gap-6">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-azulprofundo/50 group-focus-within:text-verdementa transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Buscar creaciones..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-6 py-3 bg-blanco rounded-full border-2 border-verdeclaro/30 focus:border-verdementa focus:outline-none font-inter text-lg shadow-lg hover:shadow-xl transition-all duration-300 w-80"
                />
              </div>

              <div className="flex bg-blanco rounded-full p-2 shadow-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    viewMode === "grid" ? "bg-gradient-to-r from-verdementa to-verdeclaro text-blanco shadow-lg" : "text-azulprofundo hover:bg-verdeclaro/20"
                  }`}
                >
                  <Grid3X3 className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    viewMode === "list" ? "bg-gradient-to-r from-verdementa to-verdeclaro text-blanco shadow-lg" : "text-azulprofundo hover:bg-verdeclaro/20"
                  }`}
                >
                  <List className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería mejorada */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div
            className={
              viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" : "space-y-6"
            }
          >
            {filteredItems.map((item, index) => {
              const TypeIcon = getTypeIcon(item.type)
              const isLiked = likedItems[item.id]
              const downloadCount = downloadCounts[item.id] || 0
              const shareCount = shareCounts[item.id] || 0
              
              return (
                <div
                  key={item.id}
                  className={`group bg-blanco rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-700 overflow-hidden border-2 border-transparent hover:border-verdementa/40 cursor-pointer transform hover:scale-105 hover:-rotate-2 hover:translate-y-[-5px] ${
                    viewMode === "list" ? "flex gap-6 p-6" : ""
                  }`}
                  onClick={() => setSelectedItem(item)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Thumbnail mejorado */}
                  <div
                    className={`relative ${viewMode === "list" ? "w-32 h-32 flex-shrink-0" : "aspect-square"} overflow-hidden ${viewMode === "grid" ? "rounded-t-3xl" : "rounded-2xl"}`}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${getTypeColor(item.type)} flex items-center justify-center relative group-hover:scale-110 transition-transform duration-700`}
                    >
                      <div className="text-5xl md:text-7xl filter drop-shadow-lg">{item.thumbnail}</div>

                      {/* Overlay con tipo mejorado */}
                      <div className="absolute top-3 left-3">
                        <div className="bg-blanco/95 backdrop-blur-sm rounded-full p-3 shadow-xl transform hover:scale-110 transition-all duration-300">
                          <TypeIcon className="w-5 h-5 text-azulprofundo" />
                        </div>
                      </div>

                      {/* Duración para videos mejorado */}
                      {item.type === "video" && (
                        <div className="absolute bottom-3 right-3">
                          <div className="bg-negro/80 text-blanco px-3 py-2 rounded-full text-sm font-lato font-bold backdrop-blur-sm">
                            {item.duration}
                          </div>
                        </div>
                      )}

                      {/* Pasos para manualidades mejorado */}
                      {item.type === "craft" && (
                        <div className="absolute bottom-3 right-3">
                          <div className="bg-verdeesmeralda text-blanco px-3 py-2 rounded-full text-sm font-lato font-bold shadow-lg">
                            {item.steps} pasos
                          </div>
                        </div>
                      )}

                      {/* Overlay de hover mejorado */}
                      <div className="absolute inset-0 bg-negro/0 group-hover:bg-negro/30 transition-all duration-500 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                          {item.type === "video" ? (
                            <Play className="w-16 h-16 text-blanco drop-shadow-lg" />
                          ) : (
                            <Eye className="w-16 h-16 text-blanco drop-shadow-lg" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contenido mejorado */}
                  <div className={`${viewMode === "grid" ? "p-6" : "flex-1"}`}>
                    <h3 className="font-lato text-xl font-bold text-azulprofundo mb-3 group-hover:text-verdeesmeralda transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-inter text-base text-azulprofundo/75 mb-4 line-clamp-2 leading-relaxed">{item.description}</p>

                    <div className="flex items-center justify-between text-sm text-azulprofundo/60 mb-4">
                      <span className="font-inter font-semibold">Por {item.author}</span>
                      <span className="font-inter">{item.date}</span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-6">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            handleLike(item.id)
                          }}
                          className={`flex items-center gap-2 p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
                            isLiked 
                              ? "bg-red-100 text-red-500" 
                              : "bg-verdeclaro/20 text-azulprofundo hover:bg-red-100 hover:text-red-500"
                          }`}
                        >
                          <Heart className={`w-5 h-5 ${isLiked ? 'fill-current animate-pulse' : ''}`} />
                          <span className="font-lato font-bold text-sm">{item.likes + (isLiked ? 1 : 0)}</span>
                        </button>
                        <div className="flex items-center gap-2 text-azulprofundo/70">
                          <Eye className="w-5 h-5" />
                          <span className="font-lato font-bold text-sm">{item.views}</span>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            handleShare(item)
                          }}
                          className="p-3 bg-verdeclaro/20 hover:bg-verdeclaro/40 rounded-full transition-all duration-300 transform hover:scale-110 group/btn"
                        >
                          <Share2 className="w-5 h-5 text-verdeesmeralda group-hover/btn:rotate-12 transition-transform duration-300" />
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDownload(item)
                          }}
                          className="p-3 bg-verdementa/20 hover:bg-verdementa/40 rounded-full transition-all duration-300 transform hover:scale-110 group/btn"
                        >
                          <Download className="w-5 h-5 text-verdeesmeralda group-hover/btn:translate-y-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>

                    {/* Contadores de interacciones */}
                    {(downloadCount > 0 || shareCount > 0) && (
                      <div className="flex items-center gap-4 text-xs text-azulprofundo/50">
                        {downloadCount > 0 && (
                          <span className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {downloadCount} descarga{downloadCount !== 1 ? 's' : ''}
                          </span>
                        )}
                        {shareCount > 0 && (
                          <span className="flex items-center gap-1">
                            <Share2 className="w-3 h-3" />
                            {shareCount} compartido{shareCount !== 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mensaje si no hay resultados mejorado */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6 animate-bounce">🔍</div>
              <h3 className="font-lato text-3xl font-bold text-azulprofundo mb-4">No se encontraron resultados</h3>
              <p className="font-inter text-azulprofundo/70 text-xl">Intenta con otros términos de búsqueda o categorías</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal mejorado */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-negro/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-blanco rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-3xl border-2 border-verdementa/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal mejorado */}
            <div className="flex items-center justify-between p-8 border-b border-verdeclaro/20">
              <div>
                <h2 className="font-lato text-3xl font-bold text-azulprofundo mb-2">{selectedItem.title}</h2>
                <p className="font-inter text-azulprofundo/70 text-lg">Por {selectedItem.author}</p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-3 bg-verdeclaro/20 hover:bg-verdeclaro/40 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <X className="w-7 h-7 text-azulprofundo" />
              </button>
            </div>

            {/* Contenido del modal mejorado */}
            <div className="p-8">
              <div className="aspect-video bg-gradient-to-br from-verdeclaro to-verdementa rounded-3xl flex items-center justify-center mb-8 shadow-2xl overflow-hidden">
                <div className="text-9xl filter drop-shadow-2xl">{selectedItem.thumbnail}</div>
              </div>

              <div className="space-y-6">
                <p className="font-inter text-azulprofundo/80 leading-relaxed text-lg">{selectedItem.description}</p>

                <div className="flex items-center gap-8">
                  <button 
                    onClick={() => handleLike(selectedItem.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full font-lato font-bold transition-all duration-300 transform hover:scale-105 ${
                      likedItems[selectedItem.id]
                        ? "bg-red-500 text-blanco shadow-lg"
                        : "bg-verdeclaro/20 text-azulprofundo hover:bg-red-500 hover:text-blanco"
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${likedItems[selectedItem.id] ? 'fill-current animate-pulse' : ''}`} />
                    <span>{selectedItem.likes + (likedItems[selectedItem.id] ? 1 : 0)} me gusta</span>
                  </button>
                  <div className="flex items-center gap-3 text-azulprofundo/70">
                    <Eye className="w-6 h-6" />
                    <span className="font-lato font-bold">{selectedItem.views} vistas</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button 
                    onClick={() => handleShare(selectedItem)}
                    className="flex-1 bg-gradient-to-r from-verdementa to-verdeclaro text-blanco font-lato font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-blanco/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    <Share2 className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="relative z-10">Compartir</span>
                  </button>
                  <button 
                    onClick={() => handleDownload(selectedItem)}
                    className="flex-1 bg-azulprofundo hover:bg-verdeesmeralda text-blanco font-lato font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-blanco/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></div>
                    <Download className="w-6 h-6 relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
                    <span className="relative z-10">Descargar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de subida */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-negro/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-blanco rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-3xl border-2 border-verdementa/20">
            {/* Header del modal */}
            <div className="flex items-center justify-between p-6 border-b border-verdeclaro/20">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-verdementa to-verdeclaro text-blanco p-3 rounded-full">
                  <Plus className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-lato text-2xl font-bold text-azulprofundo">Subir mi creación</h2>
                  <p className="font-inter text-azulprofundo/70">Comparte tu arte ecológico</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowUploadModal(false)
                  resetForm()
                }}
                className="p-3 bg-verdeclaro/20 hover:bg-verdeclaro/40 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <X className="w-6 h-6 text-azulprofundo" />
              </button>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Tipo de contenido */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Tipo de contenido</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { type: "image", icon: Image, label: "Imagen", color: "from-verdementa to-verdeclaro" },
                    { type: "video", icon: Film, label: "Video", color: "from-verdeesmeralda to-azulprofundo" },
                    { type: "craft", icon: Scissors, label: "Manualidad", color: "from-verdeclaro to-verdementa" },
                    { type: "drawing", icon: Palette, label: "Dibujo", color: "from-azulprofundo to-verdeesmeralda" }
                  ].map(({ type, icon: Icon, label, color }) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handleTypeChange(type)}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                        uploadForm.type === type
                          ? `bg-gradient-to-r ${color} text-blanco border-transparent shadow-lg`
                          : "bg-blanco text-azulprofundo border-verdeclaro/30 hover:border-verdementa/50"
                      }`}
                    >
                      <Icon className="w-8 h-8 mx-auto mb-2" />
                      <span className="font-lato font-bold text-sm">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Categoría */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Categoría</label>
                <select
                  value={uploadForm.category}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, category: e.target.value }))}
                  className="w-full p-4 bg-blanco border-2 border-verdeclaro/30 rounded-2xl focus:border-verdementa focus:outline-none font-inter text-lg"
                >
                  <option value="naturaleza">Naturaleza</option>
                  <option value="reciclaje">Reciclaje</option>
                  <option value="manualidades">Manualidades</option>
                  <option value="dibujos">Dibujos</option>
                </select>
              </div>

              {/* Archivo */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Archivo</label>
                <div className="border-2 border-dashed border-verdeclaro/30 rounded-2xl p-8 text-center hover:border-verdementa/50 transition-colors duration-300">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*,video/*,.pdf"
                    className="hidden"
                    id="file-upload"
                    disabled={isUploading}
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="text-6xl mb-4">{uploadForm.thumbnail}</div>
                    <p className="font-inter text-azulprofundo/70 mb-2">
                      {uploadForm.file ? uploadForm.file.name : "Haz clic para seleccionar un archivo"}
                    </p>
                    <p className="font-inter text-sm text-azulprofundo/50">
                      JPG, PNG, MP4, PDF (máx. 10MB)
                    </p>
                  </label>
                </div>
              </div>

              {/* Título */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Título</label>
                <input
                  type="text"
                  value={uploadForm.title}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, title: e.target.value }))}
                  placeholder="Ej: Mi jardín de mariposas"
                  className="w-full p-4 bg-blanco border-2 border-verdeclaro/30 rounded-2xl focus:border-verdementa focus:outline-none font-inter text-lg"
                  disabled={isUploading}
                />
              </div>

              {/* Descripción */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Descripción</label>
                <textarea
                  value={uploadForm.description}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe tu creación..."
                  rows={4}
                  className="w-full p-4 bg-blanco border-2 border-verdeclaro/30 rounded-2xl focus:border-verdementa focus:outline-none font-inter text-lg resize-none"
                  disabled={isUploading}
                />
              </div>

              {/* Autor */}
              <div>
                <label className="block font-lato font-bold text-azulprofundo mb-3">Tu nombre y edad</label>
                <input
                  type="text"
                  value={uploadForm.author}
                  onChange={(e) => setUploadForm(prev => ({ ...prev, author: e.target.value }))}
                  placeholder="Ej: María, 8 años"
                  className="w-full p-4 bg-blanco border-2 border-verdeclaro/30 rounded-2xl focus:border-verdementa focus:outline-none font-inter text-lg"
                  disabled={isUploading}
                />
              </div>

              {/* Progreso de subida */}
              {isUploading && (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-lato font-bold text-azulprofundo">
                    <span>Subiendo archivo...</span>
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
                    setShowUploadModal(false)
                    resetForm()
                  }}
                  className="flex-1 bg-verdeclaro/20 hover:bg-verdeclaro/40 text-azulprofundo font-lato font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                  disabled={isUploading}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isUploading || !uploadForm.file || !uploadForm.title || !uploadForm.description || !uploadForm.author}
                  className="flex-1 bg-gradient-to-r from-verdementa to-verdeclaro text-blanco font-lato font-bold py-4 px-8 rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                >
                  {isUploading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-blanco/30 border-t-blanco rounded-full animate-spin"></div>
                      <span>Subiendo...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="w-5 h-5" />
                      <span>Subir creación</span>
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
