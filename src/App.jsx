import Header from "./Components/Header";
import Body  from "./Components/Body";
import Footer  from "./Components/Footer";
import Counter from "./Components/Counter";
import Home from "./Components/Home";
import Second from "./Components/Second";
import Layout from "./Components/Layout";
import Todo from "./Components/Todo";
import List from "./Components/List";
import Icc from "./Components/Icc";
import Register from "./Components/Register";




import {Route, Routes } from "react-router-dom";


const App=()=>{
    return(
            <Routes>
            <Route path="" element={<Layout/>}>
                <Route path="" element={<Home/>}/>
                <Route path="counter" element={<Counter value={0}/>}/>
                <Route path="todo" element={<Todo/>}/>
                <Route path="icc" element={<Icc/>}/>
                <Route path="list" element={<List/>}/>
                <Route path="second" element={<Second/>}/>
                <Route path="register" element={<Register/>}/>
                </Route>
            </Routes>

    )
    

    
}
export default App;