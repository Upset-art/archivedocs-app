import { useState, useEffect } from 'react'
import { documentService } from '../services/supabase'

export function useDocuments() {
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchDocuments = async () => {
    try {
      setLoading(true)
      const data = await documentService.getDocuments()
      setDocuments(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchDocuments()
  }, [])

  return {
    documents,
    loading,
    error,
    refetch: fetchDocuments
  }
}