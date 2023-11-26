import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contacto from "./pages/Contacto"
import Home from "./pages/Home"
import Productos from "./pages/Productos"
import DetailPage from './pages/DetailPage';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carrit from "./components/Carrit/Carrit"
import { CartProvider } from './components/Context/CartContext';
import Checkout from './components/Checkout/Checkout';


const App = () => {
 
  return (
    <div>
    <CartProvider>
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Detail/:id" element={<DetailPage />} />
        <Route path='/ItemListContainer' element={<ItemListContainer/>} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrit/>} />
        <Route path="/Checkout" element={<Checkout/>} />
      </Routes>
      </Router>
    </CartProvider>
    
    </div>
  );
}

export default App;
 
