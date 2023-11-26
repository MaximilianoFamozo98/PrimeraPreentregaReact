import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCount from "./ItemCount";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { CartContext } from "../components/Context/CartContext";

export const ItemDetail = (producto) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const handelRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handelSumar = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <div className="pruebacardetaill">
      <Card className="pruebacardetaill">
        <CardMedia
          component="img"
          alt={producto.producto.nombre}
          image={producto.producto.imagen}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {producto.producto.nombre}
          </Typography>
          <Typography variant="p" color="text.secondary">
            {producto.producto.descripcion}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            ${producto.producto.precio}
          </Typography>
          <ItemCount
            producto={producto.producto}
            cantidad={cantidad}
            handelRestar={handelRestar}
            handelSumar={handelSumar}
            handleAgregar={() => {
              agregarAlCarrito(producto, cantidad);
            }}
          ></ItemCount>
        </CardContent>
      </Card>
    </div>
  );
};