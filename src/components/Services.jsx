import React from 'react';

const Services = () => {
  return (
    <section id="servicios" style={sectionStyle}>
      <h2>Nuestros Servicios</h2>
      <div style={servicesListStyle}>
        <div style={serviceCardStyle}>
          <h3>Asesoría Técnica</h3>
          <p>
            Contamos con expertos para ayudarte a elegir los mejores productos.
          </p>
        </div>
        <div style={serviceCardStyle}>
          <h3>Garantía de Calidad</h3>
          <p>Ofrecemos productos de la más alta calidad, garantizados.</p>
        </div>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '2rem',
  textAlign: 'center',
  backgroundColor: '#f4f4f4',
};

const servicesListStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
  marginTop: '2rem',
};

const serviceCardStyle = {
  border: '1px solid #ddd',
  borderRadius: '5px',
  padding: '1rem',
  width: '250px',
  margin: '1rem 0',
  textAlign: 'center',
};

export default Services;
