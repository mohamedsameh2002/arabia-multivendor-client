import './App.css'
import './Manual.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'

function App() {

  return (
    <>
    <Routes>
          {/* <Route element={<AuthLayout></AuthLayout>}>
            <Route path='/sign-in' element={<SigninForm></SigninForm>}></Route>
            <Route path='/sign-up' element={<SignupForm></SignupForm>}></Route>
          </Route> */}

          <Route element={<RootLayout></RootLayout>}>
            <Route index element={<Home></Home>}></Route>
          </Route>
        </Routes>
    </>
  )
}

export default App
