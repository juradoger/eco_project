import { useState } from "react"
import { Home, Compass, Target, Camera, Lightbulb, Users, Menu, X, Leaf } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Inicio", icon: Home, href: "/" },
    { name: "Explora", icon: Compass, href: "/explora" },
    { name: "Misiones", icon: Target, href: "/misiones" },
    { name: "Galería", icon: Camera, href: "/galeria" },
    { name: "Eco Tips", icon: Lightbulb, href: "/ecotips" },
    { name: "Participa", icon: Users, href: "/participar" },
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blancoverdoso to-white backdrop-blur-md border-b border-verdeclaro/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-verdementa to-verdeesmeralda rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Leaf className="w-6 h-6 text-blanco" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-verdeclaro rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-azulprofundo to-verdeesmeralda bg-clip-text text-transparent font-lato">
                EcoProject
              </h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative px-4 py-2 rounded-full text-azulprofundo hover:text-white transition-all duration-300 font-medium font-inter hover:bg-gradient-to-r hover:from-verdementa hover:to-verdeesmeralda hover:shadow-lg hover:scale-105"
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                    <span className="text-sm font-semibold">{item.name}</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-verdementa to-verdeesmeralda opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </a>
              )
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-verdementa to-verdeesmeralda text-blanco px-6 py-2 rounded-full font-semibold font-inter shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-verdeesmeralda hover:to-verdementa flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Únete</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-azulprofundo hover:bg-verdeclaro/20 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center space-x-3 px-4 py-3 rounded-xl text-azulprofundo hover:bg-gradient-to-r hover:from-verdementa/10 hover:to-verdeesmeralda/10 transition-all duration-300 font-inter"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-verdeclaro/20 to-verdementa/20 flex items-center justify-center group-hover:from-verdementa/30 group-hover:to-verdeesmeralda/30 transition-all duration-300">
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="font-semibold group-hover:text-verdeesmeralda transition-colors duration-300">
                    {item.name}
                  </span>
                </a>
              )
            })}
            <div className="pt-4 px-4">
              <button className="w-full bg-gradient-to-r from-verdementa to-verdeesmeralda text-white py-3 rounded-xl font-semibold font-inter shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Únete al Proyecto</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
