import React from 'react'
import Home from './components/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Create from './components/Create'
import Users from './components/Users'
import Edit from './components/Edit'

const App = () => {
  return (
    <div>

      <BrowserRouter>

        <Home></Home>

        <Routes>

          <Route element={<Create></Create>} path='/'></Route>

          <Route element={<Users />} path='users'></Route>
          
          <Route element={<Edit/>} path='/edit/:abc'></Route>


        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
