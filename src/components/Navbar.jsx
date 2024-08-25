import { Link } from "react-router-dom";
import { useSelector} from "react-redux";//recuperar las variables //mostrar

const Navbar =()=>{

    const form=useSelector(state=>state.form);//recupera las variables
    
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            
                <li>
                    <Link to="/default">Defaults</Link>
                </li>
           
                <li>
                    <Link to="/product">Product</Link>
                </li>
                <li>
                    <Link to="/forms">Login</Link>
                </li>
                <li>
                    <Link to="/home">Product List</Link>
                </li>
                <li style={{ marginLeft: 'auto' }}> 
                Bienvenido {form.formData.username}: {form.formData.email}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;