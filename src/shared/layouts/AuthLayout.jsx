import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png";
import {Input}from "@/shared";
import Button from "../components/Button";
import DeleteCounter from "../components/DeleteCounter";
import DeleteCounter2 from "../components/DeleteCounter2";


export default function AuthLayout(){
    return(
        <>
        <div
          className= "min-h-screen w-full"
          style ={{
            backgroundImage: `url(${authBg})`,
            backgroundSize : "cover",
            backgroundPosition: "center",
        }}  
       >
        <main className="mx-auto">
            <Input
            label="Nombre"
            type="text"
            placeholder= "Escribe tu nombre"
            htmlFor="name"
            variant="secundary"
            size= "md"
            />
            
            <Input
            label="Correo"
            type="email"
            placeholder= "Escribe tu correo"
            htmlFor="user-email"
            />
      
            <Input
            label="Telefono"
            type="tel"
            placeholder= "Escribe tu numero de telefono"
            htmlFor="user-phone"
            />

            <Input
            label="Borrar Tipo de documento"
            type="tel"
            placeholder= "Escribe tu numero de telefono"
            htmlFor=""
            />

            <Input
            label="Documento"
            type="text"
            placeholder= "Escribe tu numero de documento"
            htmlFor="user-document-number"
            />

            {/* Actions */}

            <div className="flex gap-6 items-center">
                <Button 
                    variant= "secondary"
                    size="sm"
                    type="button"
                >
                    Cancelar
                    
                </Button>
                <Button  
                    variant= "primary"
                    size="md"
                    type="submit"
                >
                    Guardar
                    
                </Button>
            </div>
            <div className="mt-10">
                <h1>Ejemplo useState</h1>
                <DeleteCounter2></DeleteCounter2>
            </div>
            <Outlet/>
        </main>,    
     </div>
 </>
    );
}