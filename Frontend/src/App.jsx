import React from 'react'
import {Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import Captianlogin from './pages/Captianlogin'
import CaptianSignup  from './pages/CaptianSignup'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Userlogin/>} />
      <Route path='/signup' element={<UserSignup/>} />
      <Route path='/captian-login' element={<Captianlogin/>} />
      <Route path='/captian-signup' element={<CaptianSignup/>} />
    </Routes>
    </>
  )
}

export default App