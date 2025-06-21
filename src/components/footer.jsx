import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-verdementa py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sección de marca */}
          <div className="text-center md:text-left">
            <h3 className="font-lato font-bold text-2xl text-azulprofundo mb-3">Eco Detectives</h3>
            <p className="font-inter text-azulprofundo text-sm leading-relaxed">
              Una aventura verde para cuidar nuestro planeta. Únete a nuestra misión de crear un mundo más sostenible.
            </p>
          </div>

          {/* Contacto rápido */}
          <div className="text-center md:text-left">
            <h4 className="font-lato font-semibold text-lg text-azulprofundo mb-4">Contacto Rápido</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="w-4 h-4 text-verdeesmeralda" />
                <span className="font-inter text-sm text-azulprofundo">info@ecodetectives.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="w-4 h-4 text-verdeesmeralda" />
                <span className="font-inter text-sm text-azulprofundo">+591 68688349</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="w-4 h-4 text-verdeesmeralda" />
                <span className="font-inter text-sm text-azulprofundo">Ciudad Verde, Planeta Tierra</span>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="text-center">
            <h4 className="font-lato font-semibold text-lg text-azulprofundo mb-4">Síguenos</h4>
            <div className="flex justify-center gap-4 mb-4">
              <a
                href="#"
                className="bg-blanco p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-verdeesmeralda group-hover:text-azulprofundo transition-colors" />
              </a>
              <a
                href="#"
                className="bg-blanco p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-verdeesmeralda group-hover:text-azulprofundo transition-colors" />
              </a>
              <a
                href="#"
                className="bg-blanco p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-verdeesmeralda group-hover:text-azulprofundo transition-colors" />
              </a>
            </div>
            <p className="font-inter text-xs text-azulprofundo">¡Comparte tu aventura verde!</p>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-verdeclaro/30 pt-6">
          {/* Copyright */}
          <div className="text-center">
            <p className="font-inter text-sm text-azulprofundo">
              © 2025 Eco Detectives - Una aventura verde para cuidar nuestro planeta
            </p>
            <div className="flex justify-center items-center gap-6 mt-3">
              <a href="#" className="font-inter text-xs text-azulprofundo hover:text-verdeesmeralda transition-colors">
                Política de Privacidad
              </a>
              <span className="text-verdeclaro">•</span>
              <a href="#" className="font-inter text-xs text-azulprofundo hover:text-verdeesmeralda transition-colors">
                Términos de Uso
              </a>
              <span className="text-verdeclaro">•</span>
              <a href="#" className="font-inter text-xs text-azulprofundo hover:text-verdeesmeralda transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
