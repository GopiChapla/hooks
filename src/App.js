import './App.css';
import React from 'react';
import Demouseeffect from './Demouseeffect';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Demousememo from './Demousememo';
import Demouseref from './Demouseref';
import Custom1 from './Custom1';
import Custom2 from './Custom2';

function App() {

  return (
    <>
      <Router>
        <div className='App'>
          <a href='/'>Home</a><br/>
          <a href='/demouseeffect'>UseEffect</a><br/>
          <a href='/demousememo'>UseMemo</a><br/>
          <a href='/demouseref'>UseRef</a><br/>
          <a href='/custom1'>CustomHook1</a><br/>
          <a href='/custom2'>CustomHook2</a><br/>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/demouseeffect' element={<Demouseeffect />} />
            <Route path='/demousememo' element={<Demousememo />} />
            <Route path='/demouseref' element={<Demouseref />} />
            <Route path='/custom1' element={<Custom1 />} />
            <Route path='/custom2' element={<Custom2 />} />

          </Routes>
        </div>
      </Router>
    </>

  )
}

export default App;
