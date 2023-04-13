import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login,ListProfile,ListPlant,SignUp,Steps,ListComment } from '../pages'

const Account = () => {
  return (
    <>
    <Routes>
        <Route path='/users/login' element={<Login></Login>}></Route>
    </Routes>
    <Routes>
        <Route path='/users/register' element={<SignUp></SignUp>}></Route>
    </Routes>
    <Routes>
        <Route path='/plants' element={<ListPlant></ListPlant>}></Route>
    </Routes>
    <Routes>
        <Route path='/users' element={<ListProfile></ListProfile>}></Route>
    </Routes>
    <Routes>
        <Route path='/steps' element={<Steps></Steps>}>
        </Route>
    </Routes>
    </>
  )
}

export default Account