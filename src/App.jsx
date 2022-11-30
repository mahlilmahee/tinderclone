import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Component/Dashboard"
import Home from "./Component/Home"
import Onboarding from "./Component/Onboarding"


function App() {

  return (
    <div>
 
   
     <BrowserRouter>
     <Routes>
       <Route path="/" exact element={<Home></Home>}/> 
       <Route path="/home" element={<Home></Home>}/>
    
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/onboarding" element={<Onboarding/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
