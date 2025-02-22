// eslint-disable-next-line no-unused-vars
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/myState';


function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<NoPage/>}/>
        </Routes>
      </Router>
    </MyState>

  )
}

export default App