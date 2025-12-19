import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import Context from './Context'
import './App.css'
import C1 from "./Compoment1"
import C2 from "./Compoment2"

function App() {
const [Age , setAge] = useState(0);
  return (
    <>
    <Context.Provider value={{Age,setAge}}>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />} />  */}
          <Route path='/c1' element={<C1 />} />  
          <Route path='/c2' element={<C2 />} />  
        </Routes>
      </BrowserRouter>
    </Context.Provider>
    </>
  )
}

export default App
