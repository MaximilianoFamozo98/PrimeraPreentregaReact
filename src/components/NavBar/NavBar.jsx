import "./NavBar.css"
import img from "./logo bebidas el pajaro.jpeg";

import { Link } from "react-router-dom";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  
  return (
    <nav>
        <ul>
          <Link to="/">
        <img className="logo" src={img} alt="logo-bebidas" />
          </Link>
            <Link className="ulcolor" to="/">Home</Link>
            <Link className="ulcolor" to="/Productos">Productos</Link>
            <Link className="ulcolor" to={`/categoria/${"Vodka"}`}>Vodka</Link>
            <Link className="ulcolor" to={`/categoria/${"Cerveza"}`}>Cerveza</Link>
            <Link className="ulcolor" to="/Contacto">Contacto</Link>
            <li><CartWidget/></li>
        </ul>
    </nav>
  )
}

export default NavBar
