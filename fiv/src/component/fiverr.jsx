import { Outlet } from "react-router-dom";
import "./style.css";
import Navbar from "./Navbar";

function Fiverr(){
    return (
        <>
            
            <Navbar />
            <Outlet />
           
        </>
    )
}

export default Fiverr;