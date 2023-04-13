import React from 'react'
import { HomePage, Tutorial, Information } from '../pages'
import {
  Routes,
  Route
} from 'react-router-dom'

const MainContent = () => {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
      </Routes>
      <Routes>
        <Route path='/' element={<Tutorial></Tutorial>}></Route>
      </Routes>
      <Routes>
        <Route path='/' element={<Information></Information>}></Route>
      </Routes>
    </div>
  )
}

export default MainContent