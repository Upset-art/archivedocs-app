const Categories = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Catégories
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          + Nouvelle catégorie
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">📊</span>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Rapports</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Documents de reporting et analyses
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">24 documents</span>
            <button className="text-blue-600 hover:text-blue-800">Gérer</button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">📋</span>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Contrats</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Contrats et accords légaux
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">12 documents</span>
            <button className="text-blue-600 hover:text-blue-800">Gérer</button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">📝</span>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Factures</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Factures et documents comptables
          </p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">89 documents</span>
            <button className="text-blue-600 hover:text-blue-800">Gérer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories

