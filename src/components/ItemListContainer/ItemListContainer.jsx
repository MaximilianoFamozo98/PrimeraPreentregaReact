import { useEffect, useState } from 'react';
import "./Item.css";
import { db } from '../../firebase/config';
import { collection, query, getDocs, where } from "firebase/firestore";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {categoriaId} = useParams();

  useEffect(() => {
    const getProductos = async () => {
      const q = query(collection(db, "productos"));  
      const collectionRef = categoriaId ? query(q,where("categoria", "==", categoriaId)) : q
      const docs = [];
      const querySnapshot = await getDocs(collectionRef);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());

        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs)
    };  
   getProductos();
  }, [categoriaId])

  return (
    <div>
        <ItemList productos={productos}/>
    </div>
  )
}
export default ItemListContainer;