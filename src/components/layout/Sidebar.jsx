import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({ open, onClose, onThemeToggle, isDark }) => {
  const location = useLocation()

  const menuItems = [
    { path: '/dashboard', name: 'Tableau de bord', icon: '📊' },
    { path: '/documents', name: 'Documents', icon: '📄' },
    { path: '/categories', name: 'Catégories', icon: '📁' },
    { path: '/users', name: 'Utilisateurs', icon: '👥' },
    { path: '/statistics', name: 'Statistiques', icon: '📈' },
    { path: '/settings', name: 'Paramètres', icon: '⚙️' },
  ]

  return (
    <>
      {/* Overlay mobile */}
      {open && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 w-64 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
        transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">ArchiveDocs</h2>
          <button 
            onClick={onClose}
            className="md:hidden p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={`
                flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                ${location.pathname === item.path
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }
              `}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={onThemeToggle}
            className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <span className="text-xl">
              {isDark ? '☀️' : '��'}
            </span>
            <span className="font-medium">
              {isDark ? 'Mode clair' : 'Mode sombre'}
            </span>
          </button>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
