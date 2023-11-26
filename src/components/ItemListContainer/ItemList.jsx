import Item from './Item';
import "./Item.css";

const ItemList = (productos) => {

  return (
    <div className='prueba'>
      {productos.productos.map((producto) => {
        return(
          <div key={producto.id} className='prueb2'>
               <Item producto={producto}/>
          </div> 
        )
      })}
    </div>
  );
}
export default ItemList;
