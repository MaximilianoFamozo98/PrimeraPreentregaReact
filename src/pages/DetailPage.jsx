import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import "./DetailPage.css";
import { ItemDetail } from "./ItemDetail";

const DetailPage = () => {
  const [productodata, setProductodata] = useState([]);
  const {id} = useParams()
  
  useEffect(() => {
    const getProductos = async () => {
      const q = query(collection(db, "productos"), where(documentId(), "==", id));  
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data());
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductodata(docs)
    };  
   getProductos();
  }, [id])

  return (
    <div className="carddetail">
      {productodata.map((producto) => {
        return(
          <ItemDetail producto={producto} key={producto.id}/>
        )
      })}
      
    </div>
  )
}
export default DetailPage;