import React, { useState } from "react";

function Counter (){
    const [counter, setCounter]=useState(0)

    const increase =() =>{
            let currentCount = counter + 1
            setCounter(currentCount)
    }
    const decrease = () =>{
        let currentCount = counter -1
        setCounter(currentCount)
    }
    const reset = () =>{
        let resetCount = 0
        setCounter(resetCount)
    }
    return(
        
        <div>
               <h1 id="counter-value">Currentcount is {counter}!</h1>
               <button onClick={() => increase()} id="increase-button"> Increase counter</button>

               <button onClick={()=> decrease()} id="decrease-button">Decrease counter</button>

               <button onClick={()=> reset()} id="reset-button">Reset counter</button>
               
    </div>
 )

}
export default Counter