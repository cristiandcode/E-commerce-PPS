import Image from "next/image";
const HomePage = () =>{
  return(
    <div className="">
      <div className="relative aspect-3/1 mb-12">
      <Image src="/featured.png" alt="Producto destacado" fill/>
      </div>
    </div>
  )
}

export default HomePage;