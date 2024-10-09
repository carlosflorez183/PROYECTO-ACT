import React from 'react';

const CartIcon = ({ carrito, onClick }) => {
  const totalItems = carrito.length;

  return (
    <div style={cartIconStyle} onClick={onClick}>
      <span style={cartIconImageStyle}>🛒</span>
      {totalItems > 0 && (
        <div style={badgeStyle}>
          {totalItems}
        </div>
      )}
    </div>
  );
};

const cartIconStyle = {
  position: 'fixed',
  top: '1rem',
  right: '1rem',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  zIndex: 1000,
};

const cartIconImageStyle = {
  fontSize: '2rem',
};

const badgeStyle = {
  backgroundColor: '#ff6600',
  color: '#fff',
  borderRadius: '50%',
  width: '1.5rem',
  height: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '-0.5rem',
  right: '-0.5rem',
  fontSize: '0.75rem',
};

export default CartIcon;
