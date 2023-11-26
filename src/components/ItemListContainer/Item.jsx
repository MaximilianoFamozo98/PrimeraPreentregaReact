import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Item.css";
import { NavLink } from 'react-router-dom';


const Item = (producto) => {

  return (
    <div className='prueba1'>
        <Card>
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
        <Typography variant="h6" color="text.secondary">
          ${producto.producto.precio}
        </Typography>
        <NavLink to={`/Detail/${producto.producto.id}`} key={producto.id} className="link-style">
         <button className='botoncard'>VER DETALLE</button> 
        </NavLink>
      </CardContent>
    </Card>
    </div>
  )
}
export default Item;

