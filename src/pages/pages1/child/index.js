import { useContext } from "react";
import Child from "../../../context/Child"
function Child1 (){
    var a = useContext(Child)
    return(
        <div>
            <h1>Child mm</h1>
            <h1>{a}</h1>
        </div>
    )
}
export default Child1;