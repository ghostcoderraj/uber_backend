import {useState} from "react"
import './App.css'
import {Routes,Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-login" element={<userLogin />} />
      <Route path="/user-register" element={<userRegister />} />
      <Route path="/captain-login" element={<captainLogin />} />
      <Route path="/captain-register" element={<captainRegister />} />
  
    
    </Routes>
  )
}

export default App