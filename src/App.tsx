import { useState } from 'react'
import './App.css'
import Header from './Layout/Header'
import Main from './pages/Main'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
