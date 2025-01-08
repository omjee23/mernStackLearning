import { useEffect, useState } from "react"

export default function GetRandomJokes(){
    const [joke, setJoke] = useState({});
    const URL = 'https://official-joke-api.appspot.com/random_joke'
    useEffect(()=>{
        let getjoke = async()=>{
            let res = await fetch(URL)
            let data = await res.json();
            setJoke({setup: data.setup, punchline: data.punchline})
        }
        getjoke();
    }, [])

    return(
        <>
        <h4>Set UP :-{joke.setup}</h4>
        <p>Punchline = {joke.punchline}</p>
        </>
    )
}