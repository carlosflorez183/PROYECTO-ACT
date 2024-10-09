import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsGrid from './components/ProductsGrid';
import Services from './components/Services';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartIcon from './components/CartIcon'; // Importa el componente CartIcon

function App() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`${producto.nombre} ha sido añadido al carrito`);
  };

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsGrid agregarAlCarrito={agregarAlCarrito} />
      <CartIcon carrito={carrito} onClick={toggleCarrito} />
      {mostrarCarrito && <Cart carrito={carrito} setCarrito={setCarrito} />}
      <Services />
      <Footer />
    </div>
  );
}

export default App;
