import Navbar from "./Navbar"
import Hero from "./Hero"
export default function Layout({children}) {
    return (
      <div >
      <Navbar/> 
      <Hero/>
      {children}
      </div>
    )
  }