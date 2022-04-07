import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const Layout =() =>{
    return (
    <div className="container" >
        <Header title="Todo" color="red"/>
        <Outlet/>
        <Footer year={2022}/>
    </div>
    )
}
export default Layout