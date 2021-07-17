import {useState, useEffect} from 'react'
import axios from 'axios'

function Crono() {
  const [time, setTime] = useState(0)

  const end = async(time) => {
    const body = {time: time}
    axios.post('http://localhost:3001/save', body)
    setTime(0)
  }

  const on = () => {

  }  

  const pause = () => {

  }

  return (
    <div className="App">
      <div>
        {time}
      </div>
      <button onClick= {() => {}}>On</button>
      <button onClick= {() => {}}>Pause</button>
      <button onClick={() => {end(time)}}>Off</button>
    </div>
  );
}

export default Crono;