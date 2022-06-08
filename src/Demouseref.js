import React,{useRef} from "react";

const Demouseref=()=>{

    const data=useRef()

    const chechdata=()=>{
        const val=data.current.value
        if(val.length<=3)
        {
            data.current.style.color="red"
        }
        else
        {
            data.current.style.color="black"
        }
    }
    return (
        <div>
            <h1>UseRef</h1>
            <input type="text" ref={data} onChange={()=>chechdata()}></input>
        </div>
    )
}

export default Demouseref