const Statistics = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
          <span className="text-5xl mr-4">📈</span>
          Statistiques
        </h1>
        
        {/* Métriques principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Documents totaux</p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">1,234</p>
                <p className="text-sm text-green-600 dark:text-green-400">+12% ce mois</p>
              </div>
              <div className="text-4xl text-blue-500">📄</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Téléchargements</p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">5,678</p>
                <p className="text-sm text-green-600 dark:text-green-400">+8% ce mois</p>
              </div>
              <div className="text-4xl text-green-500">⬇️</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Utilisateurs actifs</p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">89</p>
                <p className="text-sm text-green-600 dark:text-green-400">+15% ce mois</p>
              </div>
              <div className="text-4xl text-purple-500">👥</div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Stockage utilisé</p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">2.4 GB</p>
                <p className="text-sm text-orange-600 dark:text-orange-400">75% de 3.2 GB</p>
              </div>
              <div className="text-4xl text-orange-500">💾</div>
            </div>
          </div>
        </div>

        {/* Graphiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Activité mensuelle</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[65, 45, 78, 52, 89, 67, 94, 73, 85, 91, 76, 88].map((height, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="bg-gradient-to-t from-blue-500 to-blue-300 rounded-t w-8 transition-all duration-500 hover:from-blue-600 hover:to-blue-400"
                    style={{ height: `${height}%` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Répartition par catégorie</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">📊 Rapports</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-sm text-gray-500">65%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">📋 Contrats</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                  <span className="text-sm text-gray-500">25%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600 dark:text-gray-300">📝 Factures</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <span className="text-sm text-gray-500">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistics

