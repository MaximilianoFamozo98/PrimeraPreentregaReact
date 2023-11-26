import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useForm } from "react-hook-form";
import "./Checkout.css";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../../firebase/config";

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("")

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);
    
    const { register, handleSubmit } = useForm();
    
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        

        const pedidosRef = collection(db, "pedidos")

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }
    if(pedidoId) {
        return (
            <div>
                <h1>Muchas gracias por tu compra!</h1>
                <p>Tu numero de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (
    <div>
        <h2 className="formulario">Finalizar Compra</h2>
        <form className="formulario" onSubmit={handleSubmit(comprar)}> 
            <input type="text " placeholder="Ingresa tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresa tu telefono" {...register("telefono")} />
            <button className="btnASendAction" type="submit">Comprar</button>
        </form>
    </div>
  )
}

export default Checkout;
