import './App.css'
import { Header } from './Layout/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { AboutMe } from './pages/AboutMe'
import { Experience } from './pages/Experience'
import { Projects } from './pages/Projects'
import { Education } from './pages/Education'
import { Skills } from './pages/Skills'
import { Footer } from './Layout/Footer'

library.add(fab)

function App() {

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main className='max-w-5xl mx-auto p-5'>
          <AboutMe/>
          <Skills/>
          <Education/>
          <Experience/>
          <Projects/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
