import React from 'react'
import {Route ,Routes} from 'react-router-dom'
import Start from './pages/Start'
import Userlogin from './pages/Userlogin'
import UserSignup from './pages/UserSignup'
import Captianlogin from './pages/Captianlogin'
import CaptianSignup  from './pages/CaptianSignup'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptianHome from './pages/CaptianHome'
import CaptianProtectedWrapper from './pages/CaptianProtectedWrapper'
import CaptianLogout from './pages/CaptianLogout';
import Riding from './pages/Riding'
function App() {
  return (
    <>
    <Routes>
      {/* user-routes */}
      <Route path='/' element={<Start/>} />
      <Route path='/login' element={<Userlogin/>} />
      <Route path='/signup' element={<UserSignup/>} />
      <Route path='/riding' element={<UserProtectedWrapper><Riding/></UserProtectedWrapper>} />
      <Route path="/home" element={<UserProtectedWrapper><Home/></UserProtectedWrapper>}/>
      <Route path='/user/logout' element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>} />
      {/* captian-routes */}
      <Route path='/captian/login' element={<Captianlogin/>} />
      <Route path='/captian/signup' element={<CaptianSignup/>} />
      <Route path = "/captian/home" element={<CaptianProtectedWrapper><CaptianHome/></CaptianProtectedWrapper>}/>
      <Route path='/captian/logout' element={<CaptianProtectedWrapper><CaptianLogout/></CaptianProtectedWrapper>} />
    </Routes>
    </>
  )
}

export default App