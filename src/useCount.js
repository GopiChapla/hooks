import { useEffect } from "react";

const useCount=(props)=>{
    useEffect(()=>{
        document.title="hooks("+props+")"
    })
}

export default useCount