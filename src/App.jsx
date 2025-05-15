import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'
import DefaultLayouts from './layouts/DefaultLayouts'
import MovieAdd from './pages/MovieAdd'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayouts}>
            <Route path='/' element={<div>Home Page</div>} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/movie/:id' element={<MovieDetail />} />
            <Route path='/movie/new' Component={MovieAdd} />
          </Route>
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
