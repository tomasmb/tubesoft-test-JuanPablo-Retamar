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

    return (
    useEffect(() => {
        
   
    }, [arr]),

    <div className="Hist">
        <button onClick={() => {act()}}>Upgrade History</button>
    {
        arr ? arr.forEach(h => {
            <div>
              <p>{arr.hours}</p>
              <p>{arr.minuts}</p>
              <p>{arr.seconds}</p>
            </div>  
        }) : ''
    }
    </div>
  );
}

export default History;