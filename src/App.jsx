import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

import './App.css'
import Error404 from './components/Error404'
import Contacto from './components/Contacto'

function App() {

  return (

    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element= {<ItemListContainer/>} />
        <Route path='/categoria/:idCategoria' element= {<ItemListContainer/>} />
        <Route path='/detail/:idProducto' element= {<ItemDetailContainer/>} />
        <Route path='/contacto' element= {<Contacto/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
