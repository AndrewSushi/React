import { useState, useRef } from "react"

export default function Timer({ targetTime }){
  const timer = useRef()
  
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

  if(timeRemaining <= 0){
    clearInterval(timer.current)
  }

  function handleReset(){
    setTimeRemaining(targetTime * 1000)
  }

  function handleStart(){
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
    }, 10)
  }

  function handleStop(){
    clearInterval(timer.current)
  }

  return (
    <>
      <h2>{(timeRemaining / 1000).toFixed(3)}</h2>
      <button onClick={timerIsActive ? handleStop : handleStart}>
        {timerIsActive ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}