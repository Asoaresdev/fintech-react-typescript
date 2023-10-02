import Header from "./Components/Header"
import Sidenav from "./Components/Sidenav"
import Resume from "./Pages/Resume"
import "./Style.css"

function App() {
  return (

    <div>
      <Sidenav />
      <main>
        <Header />
        <Resume />
      </main>
    </div>

  )
}

export default App
