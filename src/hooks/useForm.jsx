//Es como el useSate pero customizado
//Custom hook
import { useState } from "react";

const useForm =(initialValues)=>{
    const [values,setValue] = useState(initialValues);

    const handleChange = (event) => {
        const {name, value}=event.target;
        setValue(
            {
                ...values,
                [name]:value,
            }
            
        );
        //console.log(value); Detecta cada que hay un cambio
    }

    return [values,handleChange];
}

export default useForm;