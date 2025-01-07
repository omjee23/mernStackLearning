import { useState, useEffect} from "react"

export default function Counter(){
    const [count , setCount] = useState(0);


    function inCount(){
        setCount((proCount => proCount + 1))
    }    

    useEffect(()=>{
        console.log("hello world! ");
        
    } , [count])

    return(
        <>
        <button onClick={inCount}>Count is {count}</button>
        </>
    )
}