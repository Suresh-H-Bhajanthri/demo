import React from 'react'
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Formvalidation from './Components/Formvalidation.jsx';
import Admin from './Components/Admin.jsx'
import Events from './Components/Events.jsx';



function App() {

  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Formvalidation />} />
   <Route path='/admin' element={<Admin />} /> 
   <Route path='/event' element={<Events />} /> 
   </Routes>
   </BrowserRouter>
  )
}

export default App
