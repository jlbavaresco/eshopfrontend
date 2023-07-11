import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Menu from './componentes/Menu'
import Home from './componentes/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import Categoria from './componentes/telas/categoria/Categoria'
import Produto from './componentes/telas/produto/Produto'

function App() {

  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Menu/>}  >
          <Route index   element={<Home />} />
          <Route exact="true" path="categorias" element={<Categoria />} />
          <Route exact="true" path="produtos" element={<Produto />} />
        </Route>        
      </Routes>
    </Router>
  );
}

export default App;