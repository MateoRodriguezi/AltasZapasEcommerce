import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/Item/ItemListContainer'
import ItemDetailContainer from './components/Item/ItemDetailContainer'

import './App.css'
import Error404 from './components/Error404/Error404'
import Contacto from './components/Contacto/Contacto'

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
