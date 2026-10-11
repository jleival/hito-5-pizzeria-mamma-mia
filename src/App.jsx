import { BrowserRouter, Routes, Route } from 'react-router-dom'; // <-- 1. IMPORTANTE: Agregamos esto
import Navbar from './components/Navbar'; // Hito 1
import Home from './components/Home'; // Hito 1
import Footer from './components/Footer'; // Hito 1
import Register from './pages/Register'; // Hito 2
import Login from './pages/Login'; // Hito 2
import Cart from './pages/Cart'; // Hito 3
import Pizza from './pages/Pizza'; // Hito 4
import Profile from './pages/Profile'; // Hito 5
import NotFound from './pages/NotFound'; // Hito 5

function App() {
  return (
    <BrowserRouter> {/* <-- 2. Envolvemos toda la app con BrowserRouter */}
      <div className='min-vh-100 d-flex flex-column'>
        <Navbar />
        <div className='flex-grow-1'>
          <Routes> {/* <-- 3. Agregamos Routes para agrupar las rutas */}
            <Route path="/" element={<Home />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes> {/* <-- 4. Cerramos Routes */}
        </div>
        <Footer />
      </div>
    </BrowserRouter> // <-- 5. Cerramos BrowserRouter
  );
}

export default App;