//TEMPORAL

import  Link  from "next/link";
import { ProductsType } from "../types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";

const products:ProductsType = [
  {
    id: 1,
    name: "Adidas CoreFit T-Short",
    shortDescription: "Camiseta deportiva de alto rendimiento",
    description:
      "Camiseta deportiva de alto rendimiento fabricada con materiales transpirables que mantienen la frescura durante el ejercicio. Diseño ergonómico para un ajuste cómodo y libertad de movimiento.",
    price: 25000,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },

  {
    id: 2,
    name: "Puma Ultra Warm Zip",
    shortDescription: "Chaqueta térmica con cremallera completa",
    description:
      "Chaqueta térmica con cremallera completa diseñada para mantener el calor en climas fríos. Confeccionada con materiales aislantes y resistentes al viento, perfecta para actividades al aire libre.",
    price: 45000,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "green"],
    images: {gray: "/products/2g.png", green: "/products/2gr.png"},
  },
  {
    id: 3,
    name: "Nike Air Essentials Pullover",
    shortDescription: "Sudadera deportiva con capucha",
    description:
      "Sudadera deportiva con capucha confeccionada con tejido suave y cómodo. Ideal para entrenamientos al aire libre o para un estilo casual, ofrece calidez y libertad de movimiento.",
    price: 60000,
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    images: {green: "/products/3gr.png", blue: "/products/3b.png", black:"/products/3bl.png"},
  },
  {
    id: 4,
    name: "Nike Dri Flex Shirt",
    shortDescription: "Camiseta de entrenamiento con tecnología Dri-FIT",
    description:
      "Camiseta de entrenamiento con tecnología Dri-FIT que absorbe el sudor y mantiene la piel seca durante el ejercicio intenso. Diseño ligero y transpirable para un rendimiento óptimo.",
    price: 30000,
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    images: {white: "/products/4w.png", pink: "/products/4p.png"},
  },
  {
    id: 5,
    name: "Under Armour StormFleece",
    shortDescription: "Sudadera con capucha resistente al agua",
    description:
      "Sudadera con capucha resistente al agua que ofrece protección contra la lluvia ligera. Fabricada con tejido StormFleece que combina calidez y transpirabilidad para mayor comodidad durante el entrenamiento.",
    price: 80000,
    sizes: ["s", "m", "l"],
    colors:["red", "orange", "black"],
    images: {red: "/products/5r.png", orange: "/products/5o.png", black: "/products/5bl.png"},
  },
  {
    id: 6,
    name: "Nike Air Max 270",
    shortDescription: "Zapatillas deportivas con amortiguación avanzada",
    description:
      "Zapatillas deportivas con amortiguación avanzada para una comodidad excepcional durante todo el día. Diseño moderno y versátil que se adapta tanto a actividades deportivas como al uso diario.",
    price: 150000,
    sizes: ["40", "42", "43", "44"],
    colors:["gray", "white"],
    images: {gray: "/products/6g.png", white: "/products/6w.png"},
  },
  {
    id: 7,
    name: "Nike Ultraboost Pulse",
    shortDescription: "Zapatillas de running de alta amortiguación",
    description:
      "Zapatillas de running de alta amortiguación diseñadas para ofrecer comodidad y soporte durante largas distancias. Suela de goma duradera y parte superior transpirable para un rendimiento óptimo.",
    price: 120000,
    sizes: ["40", "42", "43"],
    colors: ["gray", "pink"],
    images: {gray: "/products/7g.png", pink: "/products/7p.png"},
  },
  {
    id: 8,
    name: "Levis Classic Denim",
    shortDescription: "Jeans clásicos de mezclilla",
    description:
      "Jeans clásicos de mezclilla con un corte atemporal que se adapta a cualquier ocasión. Fabricados con mezclilla de alta calidad para mayor durabilidad y comodidad.",
    price: 60000,
    sizes: ["s", "m", "l"],
    colors: ["blue", "green"],
    images: {blue: "/products/8b.png", green: "/products/8gr.png"},
  },
];

const ProductList = ({category}: {category:string}) => {
  return <div className="w-full">
    <Categories/>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">{products.map(product=>(
        <ProductCard key={product.id} product={product} />
    ))}</div>
    <Link href={category ? `/products/?category=${category}`: "/products"}
     className="flex justify-end mt-4 underline text-sm text-gray-500"
     >
    Ver todos los productos</Link>
  </div>;
};

export default ProductList;
