import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Basket from './pages/Basket'
import Home from './pages/Home'
import Product from './pages/Product';
import Favourite from './pages/Favourite';
function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/favourite' element={<Favourite />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/:id' element={<Product />} />

            </Route>
        </Routes>
    )
}

export default App