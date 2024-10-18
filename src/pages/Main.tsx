import { useState } from 'react'

import "../App.css"
import Header from '../Layout/Header'

function Main() {

  return (
    <>

      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="p-4">
          <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold">Contenido Principal</h2>
            <p className="mt-2">
              Este es el cuerpo de la página. Aquí puedes agregar más contenido, como texto, imágenes, o componentes.
            </p>
            <p className="mt-2">
              Tailwind CSS permite una gran flexibilidad para diseñar y estilizar tus componentes.
            </p>
          </div>
        </main>
      </div>

    </>
  )
}

export default Main
