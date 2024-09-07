import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { CorpoSite } from "./styled"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <CorpoSite>
      <Nav/>
      <Outlet/>
      <Footer/>
    </CorpoSite>
  )
}

export default App
