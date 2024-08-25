import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";//recuperar las variables //mostrar
import { cleanFormData, saveFormData } from "../../redux/form/formActions";
import { motion } from "framer-motion";
import ModalInfo from "../../components/ModalInfo";
import ModalLogOut from "../../components/ModalLogOut";
import { useState } from "react";
import { pass } from "../../redux/form/formReducers";

const Login = () => {
    const [values,handleChange,clean]=useForm({username:'',email:'',password:''});
    const [shoModalInfo,setShowModalInfo]=useState(false);

    const [showModalLogOut,setShowModalLogOut]=useState(false);

    const [shown, setShown] = useState(false);//hook para boton show
    const form=useSelector(state=>state.form);//recupera las variables de estado de form del reducer
    
    const dispatch=useDispatch();

    const switchShown = () => {
        setShown(!shown);
        console.log(form.formData);
    };//funcion para boton show


    const handleSubmit=(event)=>{ //boton de submit
        event.preventDefault();
        if(values.password==pass){
            dispatch(saveFormData(values));
        }
        console.log(saveFormData(values));
    }

    const hideModalInfo=()=>{
        setShowModalInfo(false);
    };
    const showModal = () => {
        if(values.password!=pass){
            setShowModalInfo(true);
         }  
    }

    const showLogOut = () => {
        if(form.formData.username){
            setShowModalLogOut(true);
        } 
    }
    const hideLogOut=()=>{
        setShowModalLogOut(false);
    };

    const salir = ()=>{
        dispatch(cleanFormData());
        clean();
        setShowModalLogOut(false);
    };
   

    
    return (
        <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.5}}
                >
        <ModalInfo 
                
                visible={shoModalInfo} 
                message="Password incorrecto" 
                onClose={hideModalInfo}
            />
        <ModalLogOut 
            
            visible={showModalLogOut} 
            message="¿Estás seguro de que quieres cerrar sesión? " 
            onClose={hideLogOut}
            sure={salir}
        />
        <div className="container">
            
            <form className="form div" onSubmit={handleSubmit}>
            
                <h5 className="form h5">Username: {form.formData.username}</h5>
                <h5 className="form h5">Email: {form.formData.email}</h5>
                {/* <h5 className="form h5">Password: {form.formData.password}</h5> */}

                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type={shown ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <button onClick={switchShown} type="button">
                    {shown ? 'Ocultar' : 'Mostrar'}
                    </button>
                </div>
                <div className="button-container">
                    <button onClick={showModal} type="submit">Submit</button>
                    <Link className="a2" onClick={showLogOut}>Logout</Link>
                </div>
                
                
            </form>
        </div>
        </motion.div>
    );
};

export default Login;