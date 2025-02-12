"use client"

import { useCallback, useState } from "react"

export function useGlobalErrorHandler() {
  const [error, setError] = useState<unknown>(null)

  const handleError = useCallback((error: unknown) => {
    setError(error)
  }, [])

  return { error, handleError }
}

