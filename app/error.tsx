'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#486271] via-[#2d3e48] to-[#1a242a]">
      <div className="text-center text-white p-8">
        <h2 className="text-2xl font-bold mb-4">Algo salió mal</h2>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-white text-[#486271] rounded-lg hover:bg-opacity-90 transition-opacity"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  )
}
