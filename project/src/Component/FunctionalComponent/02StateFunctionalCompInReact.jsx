import React, { useState } from "react";
const StateFunctionalCompInReact=()=>{
    let data="something"
//    const[statedata, color]=useState("black");
  const[state,setstate]=useState(true);
  

return(
    <>
    {data}
    <button onClick={()=>{data="update"}}>Click me</button><br/>
    {/* <button onClick={()=>{color("green")}}>Statedata click</button>
    <p>State data:{statedata}</p> */}
    <button onClick={()=>{setstate(!state)}}>Stateclicktoggle{JSON.stringify(state)} </button>
    </>
);
};
export default  StateFunctionalCompInReact;