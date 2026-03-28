import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Adarsh.png';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Sample', href: '/sample' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav
      aria-label="Main"
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="Adarsh home"
          className="flex items-center gap-3 text-white"
        >
          <img
            src={logo}
            alt="Adarsh Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-sm font-semibold uppercase tracking-[0.25em]">
            Adarsh
          </span>
        </Link>

        <ul className="flex flex-wrap items-center justify-end gap-2 text-sm text-white/85">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-full px-4 py-2 transition-colors ${
                    isActive
                      ? 'bg-white text-black'
                      : 'hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
