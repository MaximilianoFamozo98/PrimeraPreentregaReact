import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {

  const {cantidadEnCarrito} = useContext(CartContext);
  
  return (
    <div>
      <Link className="ulcolor" to="/carrito">
      <ShoppingCartIcon/>
        <span>{cantidadEnCarrito()}</span>
      </Link>
    </div>
  );
}

export default CartWidget;
