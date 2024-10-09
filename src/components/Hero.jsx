import React from 'react';

const Hero = () => {
  return (
    <section style={heroStyle}>
      <h1>Bienvenido a Ferrei Industry</h1>
      <p>
        Todo lo que necesitas para tus proyectos de construcción y ferretería.
      </p>
      <a href="#productos">
        <button style={buttonStyle}>Ver Productos</button>
      </a>
    </section>
  );
};

const heroStyle = {
  height: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage:
    'url("https://pinturasdoal.com/wp-content/uploads/Featured-Inversion-para-montar-una-ferreteria.jpg")',
  backgroundSize: 'cover',
  color: '#f5fffa',
  textAlign: 'center',
};

const buttonStyle = {
  marginTop: '1rem',
  padding: '0.75rem 2rem',
  backgroundColor: '#ff6600',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Hero;
