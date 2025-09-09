const Dashboard = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 flex items-center">
            <span className="text-5xl mr-4">📊</span>
            Tableau de bord
          </h1>
          <p className="text-gray-600 dark:text-gray-400">Bienvenue dans votre espace de gestion documentaire</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Documents</p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">1,234</p>
                <p className="text-sm text-green-600 dark:text-green-400 flex items-center mt-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  +12% ce mois
                </p>
              </div>
              <div className="text-4xl text-blue-500">📄</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Catégories</p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">12</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 flex items-center mt-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Bien organisé
                </p>
              </div>
              <div className="text-4xl text-green-500">📁</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Utilisateurs</p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">45</p>
                <p className="text-sm text-green-600 dark:text-green-400 flex items-center mt-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  +8% ce mois
                </p>
              </div>
              <div className="text-4xl text-purple-500">👥</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Stockage</p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">2.4 GB</p>
                <p className="text-sm text-orange-600 dark:text-orange-400 flex items-center mt-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                  75% utilisé
                </p>
              </div>
              <div className="text-4xl text-orange-500">💾</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">📈</span>
              Activité récente
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <span className="text-2xl">📄</span>
                <div className="flex-1">
                  <p className="text-gray-800 dark:text-white font-medium">Document "Rapport Q1" ajouté</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Il y a 2 heures</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <span className="text-2xl">👤</span>
                <div className="flex-1">
                  <p className="text-gray-800 dark:text-white font-medium">Nouvel utilisateur inscrit</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Il y a 4 heures</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                <span className="text-2xl">📁</span>
                <div className="flex-1">
                  <p className="text-gray-800 dark:text-white font-medium">Nouvelle catégorie créée</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Il y a 6 heures</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">🚀</span>
              Actions rapides
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                <div className="text-2xl mb-2">📄</div>
                <div className="text-sm font-medium">Nouveau document</div>
              </button>
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                <div className="text-2xl mb-2">📁</div>
                <div className="text-sm font-medium">Nouvelle catégorie</div>
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                <div className="text-2xl mb-2">👥</div>
                <div className="text-sm font-medium">Inviter utilisateur</div>
              </button>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-sm font-medium">Voir statistiques</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
