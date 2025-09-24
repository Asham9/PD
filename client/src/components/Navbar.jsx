import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about-us' },
  { label: 'Contact', to: '/contact-us' },
];

const getNavClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
    isActive ? 'bg-orange-50 text-orange-600' : 'text-slate-900 hover:text-orange-600'
  }`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-semibold text-orange-600">
            PulseDynamics
          </Link>

          <div className="hidden items-center space-x-2 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={getNavClass} onClick={closeMenu}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            <NavLink to="/login" className={({ isActive }) =>
                `text-sm font-medium transition hover:text-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 ${
                  isActive ? 'text-orange-600' : 'text-slate-900'
                }`
            }>
              Log in
            </NavLink>
            <Link
              to="/register"
              className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              Get started
            </Link>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="flex items-center rounded-md p-2 text-2xl text-orange-600 transition hover:bg-orange-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="flex flex-col gap-3 pb-6 pt-2 md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-4 py-2 text-sm font-medium transition ${
                    isActive ? 'bg-orange-100 text-orange-600' : 'text-slate-900 hover:bg-orange-50'
                  }`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <hr className="border-orange-100" />
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-orange-100 text-orange-600' : 'text-slate-900 hover:bg-orange-50'
                }`
              }
              onClick={closeMenu}
            >
              Log in
            </NavLink>
            <Link
              to="/register"
              onClick={closeMenu}
              className="rounded-md bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Get started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
