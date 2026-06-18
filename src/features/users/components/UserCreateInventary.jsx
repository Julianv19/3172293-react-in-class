import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png";
// import { getDocumentTypes } from "../../services/selectService";
import { getCategoryTypes } from "@/services/selectService";

import { 
    Input, 
    Button, 
    // DeleteCounter2, 
    Select, 
    // Checkbox ,
    
} from "@/shared";

export default function CreateInventary(){

    // Estado para los tipos de documentos
    const [categoryTypes, setCategoryTypes] = useState([])

    // Uso del estado useEffect
    useEffect(() => {
        getCategoryTypes().then(setCategoryTypes);
    },[])

    return(
        <>
        <div
          className= "min-h-screen w-full mx-auto"
          style ={{
            backgroundImage: `url(${authBg})`,
            backgroundSize : "cover",
            backgroundPosition: "center",
        }}  
       >
        <main className="min-h-screen flex items-center justify-start px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 w-full shadow-xl">
                
                <h1 className="text-center text-title font-bold mb-8">
                Crear Inventario
                </h1>

                <div className="grid gap-4">
                <Input
                    label="Nombre del Producto"
                    type="text"
                    placeholder="Escribe el nombre del producto"
                    htmlFor="name-product"
                />
                
                <Input
                    label="Descripcion"
                    type="text"
                    placeholder="Escribe la descripcion del producto"
                    htmlFor="product-description"
                />

                <Select
                    label="Categoria de alimentos"
                    name="userAlimentTypes"
                    placeholder="Seleccione una Categoria"
                    htmlFor="userAlimentTypes"
                    options={categoryTypes}
                />

            <div className="grid justify-end px-4 relative top-1">
                <Input
                    label="Codigo del Producto"
                    type="number"
                    placeholder="Escribe el codigo del producto"
                    htmlFor="product-number"
                />

                <Input
                    label="Precio"
                    name="foodPrice"
                    placeholder="Ingrese precio del producto"
                    type="number"
                    min="0"
                    step="0.01"
                />
    

                <Input
                    label="Marca"
                    name="foodBrand"
                    type="text"
                    placeholder="Ej: Alpina"
                />

                <Input
                    label="Cantidad"
                    name="foodQuantity"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="Ej: 10"
                />
                
            </div>


                <div className="flex gap-6 items-center mt-4 justify-center">
                    <Button variant="secondary" size="sm" type="button">
                    Cancelar
                    </Button>
                    <Button variant="primary" size="md" type="submit">
                    Guardar
                    </Button>
                </div>
                </div>

            </div>
</main>
     </div>
 </>
    );
}