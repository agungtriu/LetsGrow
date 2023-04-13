import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BarMenu,
  MainContent,
} from './components'

function App() {
  return (
    <>
        <div className='main-page container-fluid'>
          <BarMenu></BarMenu>
          <MainContent></MainContent>
        </div>
    </>
  );
}

export default App;
