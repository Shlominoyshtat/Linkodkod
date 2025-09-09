import { useState } from "react"

export default function Like(){
    const [count,setCount] = useState(0)
    return(
        <>
        <p onClick={() => setCount((count) => count + 1)}>💗{count}</p>
        </>
    )
}