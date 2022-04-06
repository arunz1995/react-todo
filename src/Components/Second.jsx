import { Link } from "react-router-dom"
const Second=()=>{
    return(
    
        <div>
            Good Evening Guys
            <br />
            <Link to="/">Home</Link>
            <br />
        <Link to="/counter">Back</Link>
        </div>
        
    )
}

export default Second;