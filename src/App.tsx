import './App.css'
import { Header } from './Layout/Header'
import { Outlet } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

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
