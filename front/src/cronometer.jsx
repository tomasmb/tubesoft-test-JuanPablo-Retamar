import {useState, useEffect} from 'react'
import axios from 'axios'

function Crono() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)
  const [activ, setActiv] = useState(false)

  const end = async() => {
    axios.post('http://localhost:3001/save/time', {sec: seconds, min: minutes, hr: hours, days: days})
    setActiv(false)
    clear()
  }

  const clear = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setDays(0)
  }

  const pause = () => {
    setActiv(false)
  }

  const on = () => {
    setActiv(true)
  }  

  useEffect(() => {
    let interval = setInterval(() => {
      if (hours + 1 === 24 && activ){
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDays(days +1)
      } else if (minutes + 1 === 60 && activ){
        setSeconds(0);
        setMinutes(0);
        setHours(hours + 1)
      } else if (seconds + 1 === 60 && activ){
        setSeconds(0);
        setMinutes(minutes + 1)
      } else if (activ) {
      setSeconds(seconds +1)}
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [seconds,minutes, hours, days, activ])

  return (

    <div className="App">
      <div>
        <div>
          <p>{days ? `Days: ${days}` : ''} {hours<10 ? `0${hours}` : hours}: {minutes<10 ? `0${minutes}` : minutes} : {seconds<10 ? `0${seconds}` : seconds} </p>
        </div>
      </div>
      <button onClick={on}>On</button>
      <button onClick={pause}>Pause</button>
      <button onClick={end}>Off</button>
    </div>
  );
}

export default Crono;