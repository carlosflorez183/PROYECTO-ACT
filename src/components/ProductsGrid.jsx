import React from 'react';

const ProductsGrid = ({ agregarAlCarrito }) => {
  const productos = [
    {
      id: 1,
      nombre: 'Taladro',
      precio: '$50',
      img: 'https://belltec.com.co/16352-large_default/taladro-percutor-450w-38-bosch-gsb-450re.jpg',
    },
    {
      id: 2,
      nombre: 'Martillo',
      precio: '$10',
      img: 'https://cdn-icons-png.flaticon.com/512/8415/8415599.png',
    },
    {
      id: 3,
      nombre: 'Destornillador',
      precio: '$8',
      img: 'https://www.ferreteriasuprema.com/cdn/shop/products/Destornilladorplanocontopetraseroparagolpear_1200x1200.jpg?v=1609951438',
    },
    {
      id: 4,
      nombre: 'Sierra',
      precio: '$30',
      img: 'https://static.vecteezy.com/system/resources/previews/021/456/520/original/hand-saw-tool-3d-png.png',
    },
  ];

  return (
    <section id="productos" style={sectionStyle}>
      <h2>Nuestros Productos</h2>
      <div style={gridStyle}>
        {productos.map((producto) => (
          <div key={producto.id} style={cardStyle}>
            <img src={producto.img} alt={producto.nombre} style={imgStyle} />
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <button
              style={buttonStyle}
              onClick={() => agregarAlCarrito(producto)}
            >
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '2rem',
  textAlign: 'center',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem',
  marginTop: '2rem',
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '1rem',
  textAlign: 'center',
};

const imgStyle = {
  width: '100%',
  height: '150px',
  objectFit: 'cover',
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

export default ProductsGrid;
