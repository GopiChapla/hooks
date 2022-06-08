import React, { useEffect, useState } from 'react';

function Demouseeffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Ram")
    const [change, setChange] = useState(true)
    useEffect(() => {
        alert("Welcome")
    }, [])
    useEffect(() => {
        console.log("Count : " +  count )
    }, [count])
    useEffect(() => {
        console.log("Name : " +  name )
    }, [name])
    useEffect(()=>{
        console.log("Hello......")
    })
    
    return (
        <div>
            <h1>Demo UseEffect Component</h1>
            <h3>Count : {count}</h3>
            <h3>Name : {name}</h3>
            <button onClick={() => setCount(count + 1)}>Count</button>
            <button onClick={() => setName("Sita")}>Name</button>
            <button onClick={() => setChange(!change)}>Click</button>
        </div>
    );
}

export default Demouseeffect;
