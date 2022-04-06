import { Link } from "react-router-dom"

const Home=()=>{
    return(
        <>
        <div>Home</div>
        <Link to ="counter">Counter</Link>
        <br />
        <Link to ="second">Second</Link>

        </>
    )
}

export default Home