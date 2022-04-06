import Header from "./Components/Header";
import Body  from "./Components/Body";
import Footer  from "./Components/Footer";
import Counter from "./Components/Counter";
import Home from "./Components/Home";
import Second from "./Components/Second";

import {Route, Routes } from "react-router-dom";


const App=()=>{
    return(
        <>
        <div className="container">
            <Header title="Todo" color="red"/>  
    
            <Body content="MyApp" color="green"/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="counter" element={<Counter value={0}/>}/>
                <Route path="second" element={<Second/>}/>
            </Routes>
        
        
        <Footer year={2022}/>
        </div>
        </>
    )
    

    
}
export default App;