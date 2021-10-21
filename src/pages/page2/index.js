
import { useContext } from "react";
import AnyName from "../../context";
function Page2(){
    var a = useContext(AnyName)
    return(
       <div>
            <h1>Pages 2</h1>
            <h1>{a.Name}</h1>
            <button onClick={()=>a.setName("umar ")}>RESEND DATA TO PARENTS</button>
       </div>
    )
};
export default Page2