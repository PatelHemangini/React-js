import { useEffect, useLayoutEffect, useState } from "react";

export default function App() {
  const [advice,setadvice]=useState("");
  const [count,setcount]=useState(1)
  async function getQuots() {
   const res= await fetch("https://type.fit/api/quotes");
   const data= await res.json();
   // Select a random quote from the array
   const randomIndex = Math.floor(Math.random() * data.length);
   const randomQuote = data[randomIndex].text;
   setadvice(randomQuote);
  //  setcount((c)=>c+1);
  }
  function handleClick() {
    getQuots
    ();
    setcount((c) => c + 1);
  }
  useEffect(function() {
    getQuots();
  },[])
  return(<div>
    <h1>{advice}</h1>
    <button onClick={handleClick}>Get Quots</button>
    <Message count={count}/>
  </div>
  )
};
function Message(props) {
  return(
    <p>You have read <strong>{props.count}</strong> Pices of quots</p>
  )
  
}