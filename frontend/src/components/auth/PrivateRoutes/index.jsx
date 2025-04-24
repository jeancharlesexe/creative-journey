import { Navigate, Outlet} from 'react-router-dom'

const PrivateRoutes = () =>{
    const isAuthenticated = () =>{
        const token = localStorage.getItem('authToken');

        if(!token) return false;

        try{
            const parsedToken = JSON.parse(token);
            return parsedToken.exp > new Date().getTime();
        }catch(e){
            return false;
        }

    }

    return isAuthenticated() ? 
    <Outlet/> : <Navigate to="/login" replace/>;
}

export default PrivateRoutes;