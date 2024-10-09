import React from 'react';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <h1>WICHITROCO</h1>
      </div>
      <ul style={navListStyle}>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#productos">Productos</a>
        </li>
        <li>
          <a href="#servicios">Servicios</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#ff0000',
  color: '#fff',
};

const logoStyle = {
  fontSize: '1.5rem',
};

const navListStyle = {
  listStyle: 'none',
  display: 'flex',
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  marginLeft: '1.5rem',
};

export default Navbar;
