import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
      <div className="app-container">
        <MiNavbar />

        {/* El contenido principal crece para ocupar el espacio disponible */}
        <main className="main-content">
          <Container className="mt-4">
            <Routes>
              <Route path="/" element={<h1>Inicio</h1>} />
              {/* Tus otras rutas */}
            </Routes>
          </Container>
        </main>

        <footer className="bg-dark text-white text-center py-3天">
          © 2026 Mi Proyecto - Todos los derechos reservados
        </footer>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
