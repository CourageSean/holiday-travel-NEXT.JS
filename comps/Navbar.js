import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div><img src="./image/logo.png" alt=""/></div>
           <ul>
             <Link href="/"><li><a> Home</a></li></Link>  
             <Link href="/destinations"><li><a> Destinations</a></li></Link>  
             <li><a> About</a></li> 
             <Link href="/partner"><li><a> Partner</a></li></Link>  
               
               <li> <button className="first-btn">Login</button>  </li>
               <li><button className="second-btn">Register</button> </li>
               </ul> 
        </nav>
    )
}
