import { createContext } from "react";

import { useState } from "react";

export const CartContext = createContext();



export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] =useState([]);

  const agregarAlCarrito = (producto, cantidad) => {
    const productoAgregado = {...producto, cantidad};

    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === productoAgregado.id);

    if (estaEnElCarrito) {
      estaEnElCarrito.cantidad += cantidad;
    }else{
      nuevoCarrito.push(productoAgregado);
    }
    setCarrito(nuevoCarrito);
  }

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0) 
  } 

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }

  return (
  <CartContext.Provider value={{
    carrito, 
    agregarAlCarrito, 
    cantidadEnCarrito, 
    precioTotal, 
    vaciarCarrito} }>
    {children}
  </CartContext.Provider>
  )
};