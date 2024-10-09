import React, { useState } from 'react';
import Invoice from './Invoice'; 
const Cart = ({ carrito, setCarrito }) => {
  const [mostrarFactura, setMostrarFactura] = useState(false);

  const manejarCompra = () => {
    setMostrarFactura(true);
  };

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
  };

  return (
    <section style={cartStyle}>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - {producto.precio}
                <button
                  style={eliminarButtonStyle}
                  onClick={() => eliminarDelCarrito(index)}
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <button style={buttonStyle} onClick={manejarCompra}>
            Comprar
          </button>
        </div>
      )}
      {mostrarFactura && <Invoice carrito={carrito} />}
    </section>
  );
};

const cartStyle = {
  padding: '1rem',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  borderTop: '1px solid #ddd',
};

const buttonStyle = {
  marginTop: '1rem',
  padding: '0.5rem 1rem',
  backgroundColor: '#ff6600',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const eliminarButtonStyle = {
  marginLeft: '1rem',
  marginTop: '1rem',
  padding: '0.2rem 0.5rem',
  backgroundColor: '#ff3333',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Cart;
