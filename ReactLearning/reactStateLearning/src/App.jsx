import { useState } from 'react'
import LikeButton from './LikeButton';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function inCount(){
    setCount(count+1);
  }

  return (
    <>
     <h1>Count = {count}</h1>
     <button onClick={inCount}>click me!</button>
     <LikeButton/>
    </>
  )
}

export default App
