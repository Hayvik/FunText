import React from "react";
import Bootsrap from './components/Navbar.js'
import Footer from "./components/Footer.js";
let name='Text Converter'
let home='Homepage'
export default function App(){
  return(
  <>
    {/* <h1>Hello {name}</h1>
    
    <p>This is vikas</p> */}
    <Bootsrap name={name} home={home}/>
    <Footer/>
    
    
  </>
  )
}
