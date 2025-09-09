const Users = () => {
  const users = [
    { id: 1, name: 'Jean Dupont', email: 'jean.dupont@example.com', role: 'Admin', status: 'Actif', avatar: '👨‍💼' },
    { id: 2, name: 'Marie Martin', email: 'marie.martin@example.com', role: 'Éditeur', status: 'Actif', avatar: '👩‍💻' },
    { id: 3, name: 'Pierre Durand', email: 'pierre.durand@example.com', role: 'Lecteur', status: 'Inactif', avatar: '👨‍🎓' },
    { id: 4, name: 'Sophie Bernard', email: 'sophie.bernard@example.com', role: 'Éditeur', status: 'Actif', avatar: '👩‍🔬' },
  ]

  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white flex items-center">
            <span className="text-5xl mr-4">👥</span>
            Utilisateurs
          </h1>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            + Nouvel utilisateur
          </button>
        </div>
        
        {/* Statistiques rapides */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">89</p>
              </div>
              <span className="text-3xl text-blue-500">👥</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Actifs</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">76</p>
              </div>
              <span className="text-3xl text-green-500">✅</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Admins</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">5</p>
              </div>
              <span className="text-3xl text-orange-500">👑</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Nouveaux</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">8</p>
              </div>
              <span className="text-3xl text-purple-500">🆕</span>
            </div>
          </div>
        </div>

        {/* Liste des utilisateurs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
              <input
                type="text"
                placeholder="Rechercher des utilisateurs..."
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-all"
              />
              <div className="flex space-x-2">
                <select className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                  <option>Tous les rôles</option>
                  <option>Admin</option>
                  <option>Éditeur</option>
                  <option>Lecteur</option>
                </select>
                <select className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white">
                  <option>Tous les statuts</option>
                  <option>Actif</option>
                  <option>Inactif</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Utilisateur
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Rôle
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-3xl mr-4">{user.avatar}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        user.role === 'Admin' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                        user.role === 'Éditeur' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        user.status === 'Actif' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                        Modifier
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 font-medium">
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users

