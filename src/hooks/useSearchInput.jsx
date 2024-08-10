'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

function useSearchInput(key) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const inputRef = useRef(null)

  const currentSearchQuery = searchParams.get(key) || ''

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = currentSearchQuery
    }
  }, [currentSearchQuery])

  const updateSearchQuery = (query) => {
    const params = new URLSearchParams(searchParams.toString())
    if (query) {
      params.set(key, query)
    } else {
      params.delete(key)
    }
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  const handleInputChange = () => {
    if (inputRef.current) {
      updateSearchQuery(inputRef.current.value)
    }
  }

  return {
   inputRef,
   handleInputChange,
  }
}

export default useSearchInput
