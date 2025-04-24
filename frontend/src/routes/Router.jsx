import {Routes, Route} from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";

import PrivateRoutes from '../components/PrivateRoutes'
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";

import NotFound from "../pages/NotFound";

const Router = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>

            <Route element={<PrivateRoutes />}>
            <Route element={<Layout />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default Router;