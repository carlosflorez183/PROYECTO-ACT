import React, { useState } from 'react';

const Invoice = ({ carrito }) => {
  const [mostrarFactura, setMostrarFactura] = useState(false);
  const [email, setEmail] = useState('');

  const calcularTotal = () => {
    return carrito
      .reduce((total, producto) => {
        const precioNumerico = parseFloat(producto.precio.replace('$', ''));
        return total + precioNumerico;
      }, 0)
      .toFixed(2);
  };

  const handleComprar = () => {
    if (!email) {
      alert('Por favor, ingresa tu correo electrónico.');
      return;
    }

    // Simulación de envío de factura
    setMostrarFactura(true);
    alert(`Factura enviada a ${email}`);
  };

  const handleCerrarFactura = () => {
    setMostrarFactura(false);
  };

  return (
    <section style={invoiceSectionStyle}>
      {!mostrarFactura ? (
        <>
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleComprar} style={buttonStyle}>
            Comprar
          </button>
        </>
      ) : (
        // Mostrar solo la factura después de "enviar"
        <div style={facturaContainerStyle}>
          <button onClick={handleCerrarFactura} style={closeButtonStyle}>
            ×
          </button>
          <h2>Factura</h2>
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - {producto.precio}
              </li>
            ))}
          </ul>
          <h3>Total: ${calcularTotal()}</h3>
          <p>Factura enviada a {email}</p>
        </div>
      )}
    </section>
  );
};

const invoiceSectionStyle = {
  padding: '2rem',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  border: '1px solid #ddd',
  marginTop: '2rem',
  position: 'relative',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#ff6600',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const facturaContainerStyle = {
  backgroundColor: '#f1f1f1',
  padding: '1rem',
  marginTop: '2rem',
  border: '1px solid #ddd',
  position: 'fixed',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, 0)',
  width: '80%',
  maxWidth: '600px',
  height: 'auto',
  zIndex: '1000', // Asegúrate de que el zIndex sea alto
  overflowY: 'auto',
  boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'transparent',
  border: 'none',
  fontSize: '1.5rem',
  color: '#ff6600',
  cursor: 'pointer',
};

const inputStyle = {
  padding: '0.5rem',
  marginBottom: '1rem',
  border: '1px solid #ddd',
  borderRadius: '5px',
  width: '80%',
};

export default Invoice;
