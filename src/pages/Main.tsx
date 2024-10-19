import { useState } from 'react'

import "../App.css"
import Header from '../Layout/Header'
import AboutMe from './AboutMe'

function Main() {

  return (
    <>

      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="p-4">
          <AboutMe/>
        </main>
      </div>

    </>
  )
}

export default Main
