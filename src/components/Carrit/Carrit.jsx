import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import "./carrit.css"; 

const Carrit = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  return (
    <div className="carrito-container">
      <h1 className="carrito-title">Carrito</h1>
      <br />

      {carrito.map((prod) => (
        <div className="product-item" key={prod.id}>
          <br />
          <h3 className="product-name">{prod.nombre}</h3>
          <div className="product-info">
            <p className="product-price">Precio Unidad: ${prod.precio}</p>
            <p className="product-quantity">Cantidad: {prod.cantidad}</p>
          </div>
          <p className="product-total">Precio Total: ${prod.precio * prod.cantidad}</p>
        </div>
      ))}

      <h2 className="carrito-total">Precio Total: ${precioTotal()} </h2>

      <div className="cart-actions">
        <button className="vaciar-carrito-btn" onClick={handleVaciar}>
          Vaciar Carrito
        </button>
        <Link to="/Checkout">
          <button className="finalizar-compra-btn">Finalizar Compra</button>
        </Link>
      </div>
    </div>
  );
};

export default Carrit;