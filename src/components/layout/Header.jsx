import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Catálogo', path: '/catalog' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Contacto', path: '/contact' }
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.jpeg" 
                alt="Uniformes Los Morros" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links - Center */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium font-body transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-primary-green border-b-2 border-primary-green'
                    : 'text-text-main hover:text-primary-green'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Authentication Buttons - Right */}
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium font-body text-primary-green border border-primary-green rounded-md hover:bg-primary-green hover:text-white transition-colors duration-200"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm font-medium font-body text-white bg-primary-green rounded-md hover:bg-green-600 transition-colors duration-200"
            >
              Registrarse
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-text-main hover:text-primary-green focus:outline-none focus:text-primary-green"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Hidden by default, would need state management for toggle */}
      <div className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-3 py-2 text-base font-medium font-body ${
                isActive(item.path)
                  ? 'text-primary-green bg-green-50'
                  : 'text-text-main hover:text-primary-green hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-3 space-x-3">
              <Link
                to="/login"
                className="flex-1 text-center px-4 py-2 text-sm font-medium font-body text-primary-green border border-primary-green rounded-md"
              >
                Iniciar Sesión
              </Link>
              <Link
                to="/register"
                className="flex-1 text-center px-4 py-2 text-sm font-medium font-body text-white bg-primary-green rounded-md"
              >
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
