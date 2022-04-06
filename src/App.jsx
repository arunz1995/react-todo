import Header from "./Components/Header";
import Body  from "./Components/Body";
import Footer  from "./Components/Footer";
import Counter from "./Components/Counter";


const App=()=>{
    return(
        <>
        <div className="container">
            <Header title="Todo" color="red"/>  
        </div>
        <div className="body">
            <Body content="MyApp" color="green"/>
        
        <Counter value={0}/>
        <Footer year={2022}/>
        </div>
        </>
    )
    

    
}
export default App;