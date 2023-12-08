import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState("")
  const [time,setTime] = useState(0);

  const handleChange = (e)=>{
    console.log(e.target.value);
    setData(e.target.value);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
    <input onChange={handleChange}  placeholder='Enter something'/>
    <div>Timer: {time} seconds</div>
    </>
  )
}

export default App
