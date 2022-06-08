import React, { useMemo, useState } from "react";

const Demousememo = () => {

    const [count, seetCount] = useState(0)
    const [name, setName] = useState("Ram")

    const showdata = useMemo(() => {
        return <div>
            <h2>In UseMemo</h2>
            <h3>Name : {name}</h3>
            <h3>Count : {count}</h3>
        </div>
    },[name])
    const header = useMemo(() => {
        return <div>
            <h1>UseMemo</h1>
        </div>
    },[])
    return (
        <div>
            {header}
            <br />
            {showdata}
            <br />
            <h2>Outside UseMemo</h2>
            <h3>Name : {name}</h3>
            <h3>Count : {count}</h3>
            <button onClick={() => setName("Sita")}>Name Update</button>
            <button onClick={() => seetCount(count + 1)}>Count Update</button>
        </div>
    )
}

export default Demousememo