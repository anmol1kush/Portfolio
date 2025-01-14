import { BrowserRouter } from "react-router-dom"
import { About, Contact, Hero, Navbar, StarsCanvas, Tech, Works } from "./components"
import Footer from "./components/Footer"

const App = () => {


  return (
    <BrowserRouter>


      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-current">
          <Navbar />
          <Hero />

        </div>
        <About />
        <Tech />


        <Works />

        <div className=" relative z-0">
          <Contact />
          <StarsCanvas />


        </div>
        <div>
          <Footer/>
        </div>




      </div>
    </BrowserRouter>
  )
}

export default App
