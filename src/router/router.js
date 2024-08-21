import { createBrowserRouter } from "react-router-dom";


import Default from "../screens/Default";
import Product from "../screens/Product";
import Login from "../screens/Forms/Login";
import Home from "../screens/Product/_components/Home";
import App from "../App";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children:[
            {
                path:'/default',
                element:<Default />
            },
            {
                path:'/product',
                element:<Product />
            },
            {
                path:'/forms',
                element:<Login />
            },
            {
                path:'/home',
                element:<Home />
            },
        ] 
    }
]);
export default routes;