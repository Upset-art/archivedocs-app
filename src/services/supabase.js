import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Variables d\'environnement Supabase manquantes')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Fonctions utilitaires pour les documents
export const documentService = {
  // Récupérer tous les documents
  async getDocuments() {
    const { data, error } = await supabase
      .from('documents')
      .select(`
        *,
        categories(name, color),
        profiles(full_name)
      `)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data
  },

  // Créer un nouveau document
  async createDocument(documentData) {
    const { data, error } = await supabase
      .from('documents')
      .insert([{
        ...documentData,
        created_by: (await supabase.auth.getUser()).data.user?.id
      }])
      .select()
    
    if (error) throw error
    return data[0]
  },

  // Mettre à jour un document
  async updateDocument(id, updates) {
    const { data, error } = await supabase
      .from('documents')
      .update(updates)
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data[0]
  }
}

// Fonctions pour les catégories
export const categoryService = {
  async getCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name')
    
    if (error) throw error
    return data
  },

  async createCategory(categoryData) {
    const { data, error } = await supabase
      .from('categories')
      .insert([{
        ...categoryData,
        created_by: (await supabase.auth.getUser()).data.user?.id
      }])
      .select()
    
    if (error) throw error
    return data[0]
  }
}