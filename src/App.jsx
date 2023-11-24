import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Basket from './pages/Basket'
import Home from './pages/Home'
import './index.scss'
import Product from './pages/Product';

function App() {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/:id' element={<Product />} />
            </Route>
        </Routes>
    )
}

export default App