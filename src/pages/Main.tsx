import "../App.css"
import Header from '../Layout/Header'
import AboutMe from './AboutMe'

function Main() {

  return (
    <>

      <div className="min-h-screen">
        <Header />
        <main className="p-4">
          <AboutMe/>
        </main>
      </div>

    </>
  )
}

export default Main
