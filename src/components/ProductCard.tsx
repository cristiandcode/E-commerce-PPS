"use client"

import  Link  from "next/link";
import  Image  from "next/image";
import { ProductType } from "../types";

const ProductCard = ({product}: {product:ProductType}) =>{
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
                        <select name="talle" id="talle">
                            {product.sizes.map(size =>(
                                <option value={size}>{size.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>
                    {/* COLORS */}
                    <div className=""></div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;