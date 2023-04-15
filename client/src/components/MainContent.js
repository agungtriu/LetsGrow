import React from 'react'
import {
  HomePage,
  ListProfile,
  Login,
  SignUp,
  ListPlant,
  Steps,
  AddPlant,
  EditPlant,
  AddStep,
  EditStep,
  EditComment,
  ListTutorial,
  UpdateProfile,
  UpdatePassword,
  UpdateAvatar

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
          <Route path='edit'>
            <Route path='profile' element={<UpdateProfile></UpdateProfile>}></Route>
            <Route path='password' element={<UpdatePassword></UpdatePassword>}></Route>
            <Route path="avatar" element={<UpdateAvatar></UpdateAvatar>}></Route>
          </Route>
        </Route>
        <Route path="/plants" element={<ListPlant></ListPlant>}></Route>
        <Route path="/plants">
          <Route path='add' element={<AddPlant></AddPlant>}></Route>
          <Route path='edit'>
            <Route path=':plantId' element={<EditPlant></EditPlant>}></Route>
          </Route>
        </Route>
        <Route path='/tutorials' element={<ListTutorial></ListTutorial>}></Route>
        <Route path="/steps/:stepId" element={<Steps></Steps>}></Route>
        <Route path="/steps">
          <Route path="add" element={<AddStep></AddStep>}></Route>
          <Route path='edit'>
            <Route path=":stepId" element={<EditStep></EditStep>}></Route>
          </Route>
        </Route>
        <Route path='/comments'>
          <Route path='edit'>
            <Route path=':commentId' element={<EditComment></EditComment>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default MainContent