import React from 'react'
import { 
  HomePage, 
  ListProfile,
  Login,
  SignUp,
  ListPlant,
  Steps
  
} from '../pages'
import {
  Routes,
  Route
} from 'react-router-dom'

const MainContent = () => {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path="/users" element={<ListProfile></ListProfile>}></Route>
        <Route path="/users">
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<SignUp></SignUp>}></Route>
        </Route>
        <Route path="/plants" element={<ListPlant></ListPlant>}></Route>
        <Route path="/steps" element={<Steps></Steps>}></Route>
      </Routes>
    </div>
  )
}

export default MainContent