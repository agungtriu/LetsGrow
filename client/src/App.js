import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BarMenu,
  MainContent,
  Banner,
  Account
} from './components'

function App() {
  return (
    <>
      <div className='background-color'>
        <div className='main-page container-fluid'>
          <BarMenu></BarMenu>
          <Account></Account>
          <MainContent></MainContent>
        </div>
      </div>
    </>
  );
}

export default App;
