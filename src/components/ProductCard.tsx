"use client"

import  Link  from "next/link";
import  Image  from "next/image";
import { ProductType } from "../types";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const ProductCard = ({product}: {product:ProductType}) =>{
    const [productTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
    });


    const handleProductType = ({type, value}:{type:"size" | "color", value:string
    }) =>{
        setProductTypes(prev=>({
            ...prev,
            [type]:value
        }))
    };
    return(
        <div className="shadow-lg rounded-lg overflow-hidden">
            {/* IMAGEN */}
            <Link href={`/products/${product.id}`}>
            <div className="relative aspect-2/3">
                <Image src={product.images[product.colors[0]]} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-300"/>
            </div>
            </Link>
            {/* DETALLE DEL PRODUCTO */}
            <div className="flex flex-col gap-4 py-4">
                <h1 className="font-medium">{product.name}</h1>
                <p className="text-sm text-gray-500">{product.shortDescription}</p>
                {/* TIPOS DE PRODUCTOS */}
                <div className="flex items-center gap-4 text-xs">
                    {/* SIZES */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Talles</span>
                        <select name="talle" id="talle" className="ring ring-gray-300 rounded-md px-2 py-1"
                        onChange={e=>handleProductType({type:"size", value:e.target.value})}
                        >
                            {product.sizes.map(size =>(
                                <option key={size} value={size}>{size.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>
                    {/* COLORS */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Colores</span>
                        <div className="flex items-center gap-2">
                            {product.colors.map(color=>(
                                    <div
                            key={color}
                            onClick={() => handleProductType({ type: "color", value: color })}
                            className={`cursor-pointer border ${
                                productTypes.color === color ? "border-gray-400" : "border-gray-200"
                            } rounded-full p-0.5`}
                            >
                            <div
                                className="w-3.5 h-3.5 rounded-full"
                                style={{ backgroundColor: color }}
                            ></div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* PRECIO Y AÑADIR AL CARRITO */}
                <div className="flex items-center justify-between">
                    <p className="font-medium">${product.price.toFixed(2)}</p>
                    <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4"/>
                        Añadir al carrito</button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;