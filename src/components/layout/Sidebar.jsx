import { NavLink } from 'react-router-dom'
import {
  HomeIcon,
  DocumentIcon,
  UsersIcon,
  ChartBarIcon,
  TagIcon,
  CogIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Documents', href: '/documents', icon: DocumentIcon },
  { name: 'Catégories', href: '/categories', icon: TagIcon },
  { name: 'Utilisateurs', href: '/users', icon: UsersIcon },
  { name: 'Statistiques', href: '/statistics', icon: ChartBarIcon },
  { name: 'Paramètres', href: '/settings', icon: CogIcon },
]

export default function Sidebar({ open, onClose, onThemeToggle, isDark }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-50 w-64 
        bg-blue-900 dark:bg-gray-900 text-white 
        transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <DocumentIcon className="w-8 h-8 text-blue-300 dark:text-gray-300" />
              <h1 className="text-xl font-bold">ArchiveDocs</h1>
            </div>
            <button 
              onClick={onThemeToggle}
              className="p-2 rounded-lg hover:bg-blue-800 dark:hover:bg-gray-800 transition-colors hidden md:block"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
          
          <nav className="space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-800 text-white'
                      : 'hover:bg-blue-800 dark:hover:bg-gray-800'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  )
}