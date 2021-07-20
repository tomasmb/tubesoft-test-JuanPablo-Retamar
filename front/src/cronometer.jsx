import {useState, useEffect} from 'react'
import axios from 'axios'

function Crono() {
  const [seconds, setSeconds] = useState(0)
  const [minuts, setMinuts] = useState(0)
  const [activ, setActiv] = useState(false)

  const end = async(time) => {
    const body = {sec: seconds }
    axios.post('http://localhost:3001/save', body)
    setActiv(false)
    clear()
  }

  const clear = () => {
    setSeconds(0);
    setMinuts(0)
  }

  const pause = () => {
    setActiv(false)
  }

  const on = () => {
    setActiv(true)
  }  


  return (
    useEffect(() => {
      let interval = setInterval(() => {
        if (seconds + 1 === 60 && activ){
          setSeconds(0);
          setMinuts(minuts + 1)
        }
        if (activ) {setSeconds(seconds +1)}
      }, 1000)
      return () => {
        clearInterval(interval)
      }


      // if (activ === true){
      //   (setTimeout(() => {
      //     setSeconds(seconds +1)  
      //   }, 1000));
      // }
    }, [seconds,minuts, activ]),


    <div className="App">
      <div>
        <div>
          <p>sec: {seconds} </p>
          <p>Min: {minuts}</p>
        </div>
      </div>
      <button onClick={on}>On</button>
      <button onClick={pause}>Pause</button>
      <button onClick={end}>Off</button>
    </div>
  );
}

export default Crono;