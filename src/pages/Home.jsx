import "./Home.css"
import img1 from "../components/imagenes/quilmespack.jpg"
import img2 from "../components/imagenes/patagoniapack.jpg"
import img3 from "../components/imagenes/andesrojapack.jpg"
import img4 from "../components/imagenes/coronapack.jpg"


import ItemListContainer from "../components/ItemListContainer/ItemListContainer"

const Home = () => {
  return (
    <div>
      
      <section>
        <img src={img1} alt="" width="25%" />
        <img src={img2} alt="" width="25%" />
        <img src={img3} alt="" width="25%" />
        <img src={img4} alt="" width="25%" />
  
      </section>
      <ItemListContainer/>
    </div>
  );
};

export default Home;
