
import {Page,Page2,Child1} from "./pages/index";
import AnyName from "./context/index";
import  Child  from "./context/Child";
import { useState } from "react";
function App() {
var [Name,setName]=useState("majidShahid")
  return (
    <Child.Provider value ="SAYLANI MASS IT TRANNING">
   <AnyName.Provider value={{
     Name,
     setName,
   }}>
    <div>
<Page/>
<Page2/>
<Child1/>

 
    </div>
    </AnyName.Provider>
    </Child.Provider>
  
  );
}

export default App;
