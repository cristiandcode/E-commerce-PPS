import Image from "next/image";
import ProductList from "../components/ProductList";
const HomePage = () =>{
  return(
    <div className="">
      <div className="relative aspect-3/1 mb-12">
      <Image src="/featured.png" alt="Producto destacado" fill/>
      </div>
      <ProductList/>
    </div>
  )
}

export default HomePage;

// Minuto 45 segundo 24