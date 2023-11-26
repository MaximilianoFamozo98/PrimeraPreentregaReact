import { useState } from "react";
import { CartContext } from "../components/Context/CartContext";
import Button from "@mui/material/Button";
import { useContext } from "react";
import "./ItemCount.css";

const ItemCount = ({ producto, cantidad, handelRestar, handelSumar }) => {
  const [terminarCompra, setTerminarCompra] = useState(false);
  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <>
      <div>
        {terminarCompra ? (
          <>
            <Button
              variant="dark"
              className="w-100 m-2"
              onClick={() => {
                setTerminarCompra(false);
                agregarAlCarrito(producto, cantidad);
              }}
            >
              Terminar compra
            </Button>
          </>
        ) : (
          <>
            <div className="d-flex justify-content-center align-items-center botones">
              <Button variant="dark" onClick={handelRestar}>
                -
              </Button>
              <p className="m-0 mx-2">{cantidad}</p>
              <Button variant="dark" onClick={handelSumar}>
                +
              </Button>
            </div>
            <Button
              variant="dark"
              className="w-100 m-2 botones"
              onClick={() => setTerminarCompra(true)}
            >
              Agregar al carrito
            </Button>
          </>
        )}
      </div>
    </>
  );
};
export default ItemCount;