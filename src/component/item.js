import { useParams } from "react-router-dom";

function Item(){
    const params = useParams();
    const {name} = params;
    return(
        <div>
            <h1>This ia {name} Page</h1>
        </div>
    )
}
export default Item;