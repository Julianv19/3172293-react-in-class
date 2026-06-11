// UserRegisterForm componente para registrar un usuario

import { useState, useEffect} from "react";
import { Input, Select, Checkbox, Button } from "/@shared";
import { getDocumentTypes } from "/@services/selectService";

export default function UserRegisterForm(){

//     Estado del formulario
    const[formData, setformData] = useState({
        userName: "",
        userEmail:"",
        userPhone:"",
        userDocumentType:"",
        userDocumentNumber:"",
        userPassword:"",

        // Flags booleanos
        isStaff: false,
        isActive: true,
        isSuperUser:false,

    })



    // =================================
    //         Handle Generico
    // =================================

//     Funcion que se ejecuta cada vez que cambai el valor de un input en el formulario

const handleChange =(e) => {
    // Se obtiene el nombre del campo y su valor
    const {name, value, type, checked } = e.target;

    setformData((prev) => ({
        // Se copian todos los valores anteriores del estado
      ...prev,

    //   Se actualiza unicamente lo que cambio
    [name]: type ==="checkbox" ? checked : value,

    
    }));
}

        // Estado para los tipos de documentos
            const [documentTypes, setDocumentTypes]= useState([])
            // Uso del estado use Effect
            useEffect(()=>{
                getDocumentTypes().then(setDocumentTypes);
            },[])

        // ==========Handle Submit====================
      const handleSubmit = async (e) => {
        //Evita que el formulario recargue la página
        e.preventDefault();

        const result = userSchema.safeParse(formData);


        if(!result.success){

            const fieldErrors ={};

            result.error.issues.forEach((issue) => {

                fieldErrors[issue.path[0]] = issue.message;
            });


            setErrors(fieldErrors);

            return;
        }

        setErrors({});

        
      }


    return(
        <div>
            <Input
                label="Nombre"
                type="text"
                placeholder= "Ingrese su Nombre"
                htmlFor="user-name"
                />
            <Input
                label="Correo"
                type="email"
                placeholder= "Escribe tu correo electronico"
                htmlFor="user-email"
                />
                <Input
                    label="Telefono"
                    type="tel"
                    placeholder= "Escribe tu numero de telefono"
                    htmlFor="user-phone"
                    />
                <Select
                    label="Tipos de documentos"
                    name="userDocumentTypes"
                    htmlFor ="userDocumentTypes"
                    options={documentTypes}
                            />        
            <Input
                label="Documento"
                type="text"
                placeholder= "Escribe tu numero de documento"
                htmlFor="user-document-number"
                />
            <Input
                label="Contraseña"
                type="password"
                placeholder= "Escribe tu contraseña"
                htmlFor="user-password"
                />

            {/* Checkbox */}

            <Checkbox
                id="isSuperUser"
                name="isSuperUser"
                label="Es super usuario"
                checked={formData.isSuperUser}
                onChange={handleChange}
            />
            <Checkbox
                id="isStaff"
                name="isStaff"
                label="Es staff"
                checked={formData.isStaff}
                onChange={handleChange}
            />
            <Checkbox
                id="isActive"
                name="isActive"
                label="Esta Activo"
                checked={formData.isActive}
                onChange={handleChange}
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

        </div>
    )
}