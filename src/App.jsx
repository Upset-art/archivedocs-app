import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './components/pages/Dashboard'
import Documents from './components/pages/Documents'
import Categories from './components/pages/Categories'
import Users from './components/pages/Users'
import Statistics from './components/pages/Statistics'
import Settings from './components/pages/Settings'
import { useTheme } from './hooks/useTheme'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  return (
    <Router>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        {/* Mobile Header */}
        <header className="md:hidden bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-800 dark:to-gray-900 text-white p-4 flex items-center justify-between shadow-lg">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-lg font-bold">📁 ArchiveDocs</h1>
          <button onClick={toggleTheme} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
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
        </header>

        <Sidebar 
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          onThemeToggle={toggleTheme}
          isDark={isDark}
        />

        <main className="md:ml-64 min-h-screen pt-16 md:pt-0">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/users" element={<Users />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App