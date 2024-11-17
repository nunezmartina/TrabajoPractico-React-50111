import { useState } from "react"
import { FormProducts } from "./formProducts/FormProducts"
import { Header } from "./header/header"
import { ListProducts } from "./listProducts/ListProducts";


interface ItemProducts{
    precio: number,
    imagen: string,
    nombre: string,
}

export const AppProducts = () => {
  
    const [products, setProducts] = useState<ItemProducts[]>([]);

    const handleAddProducts = (newItem: ItemProducts)=>{
        setProducts((prev)=>[...prev, newItem])
    }
  
    return (
    <div>
        <Header/>
        <h2 className="text-center">Formulario</h2>
        <FormProducts handleAddProducts={handleAddProducts}/>
        <h2 className="text-center">Productos</h2>
        {products.length > 0 ? <ListProducts arrItems={products}/> : <h3 className="text-center">No hay productos</h3>}
    </div>
  )
}
