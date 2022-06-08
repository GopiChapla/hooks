import React, { useState } from "react";
import useCount from "./useCount";

const Custom2=()=>{

    const [count,setCount]=useState(0)
    useCount(count)
    return (
        <div>
            <h1>Custom Hook 2</h1>
            <p>Count : {count}</p>
            <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    )
}

export default Custom2