import { ArrowRight } from "lucide-react"

export default function Card({
  icon,
  title = "Título de la misión",
  description = "Descripción breve de la misión ecológica que ayudará al planeta.",
  buttonText = "¡Haz la misión!",
  onButtonClick = () => {},
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blancoverdoso py-8 px-4">
      <div className="w-full max-w-md bg-blanco rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 border border-blancoverdoso group cursor-pointer relative overflow-hidden">
        {/* Ícono grande */}
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-br from-verdementa to-verdeclaro rounded-full p-4 shadow-md group-hover:shadow-lg transition-all duration-300">
            <div className="text-4xl md:text-5xl">{icon}</div>
          </div>
        </div>

        {/* Contenido */}
        <div className="text-center space-y-3">
          {/* Título con fuente de carta */}
          <h3 className="font-carta text-2xl md:text-3xl text-azulprofundo group-hover:text-verdeesmeralda transition-colors duration-300 leading-tight">
            {title}
          </h3>

          {/* Descripción */}
          <p className="font-inter text-sm md:text-base text-azulprofundo/80 leading-relaxed px-2">{description}</p>

          {/* Botón */}
          <div className="pt-4">
            <button
              onClick={onButtonClick}
              className="bg-gradient-to-r from-verdeesmeralda to-verdeclaro hover:from-verdeclaro hover:to-verdeesmeralda text-blanco font-lato font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto group/button"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Decoración sutil con fuente de carta */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-carta text-verdementa text-sm">¡Genial!</span>
        </div>

        {/* Punto decorativo */}
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-verdementa rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
