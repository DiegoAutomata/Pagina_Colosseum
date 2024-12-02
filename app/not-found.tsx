import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#486271] via-[#2d3e48] to-[#1a242a]">
      <div className="text-center text-white p-8">
        <h2 className="text-2xl font-bold mb-4">Página no encontrada</h2>
        <p className="mb-4">No pudimos encontrar la página que buscas</p>
        <Link
          href="/"
          className="px-4 py-2 bg-white text-[#486271] rounded-lg hover:bg-opacity-90 transition-opacity inline-block"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
