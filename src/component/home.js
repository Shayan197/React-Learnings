import { useState } from "react";
function Home(){
    const [count,setCount] = useState(0)
    function updateCount(){
        setCount((p)=>{
            console.log(p);
            return p+5
        })
    }
    return(
        <div>
            <h1>Home Page</h1>
            <h1>{count}</h1>
            <br/>
            <button onClick={updateCount}>Update</button>
        </div>
    )
}
export default Home;