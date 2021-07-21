import {useState, useEffect} from 'react'
import axios from 'axios'

function History() {
    //set history state
    const [arr, setArr] = useState([])

    //get the history of the database
    const act = async() => {
        const {data} = await axios.get('http://localhost:3001/times')
        setArr(data)
    }

    const deleteTime = async () => {
        
    }

    return (
    useEffect(() => {
    }, [arr]),

    <div className="Hist">
        <button onClick={() => {act()}}>Upgrade History</button>
    {
        arr ? arr.map(h => {
            return (
            <div>
              <p>{h.days !== 0 ? `Days:${h.days}` : ''}  {h.hours < 10 ? `0${h.hours}` : h.hours}: {h.minutes < 10 ? `0${h.minutes}` : h.minutes} : {h.seconds<10 ? `0${h.seconds}` : h.seconds}</p>
            </div>  
            )
        }) : ''
    }
    </div>
  );
}

export default History;