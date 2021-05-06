import Navbar from "./Navbar"
import Hero from "./Hero"
import Footer from "./Footer"
export default function Layout({children}) {
    return (
      <div >
      <Navbar/> 
      <Hero/>
      {children}
      <Footer/>
      </div>
    )
  }