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

    //listen the changes
    useEffect(() => {
    }, [arr])

   
  return (
    <div className="Hist">
        <button onClick={() => {act()}}>Upgrade History</button>
        {
            arr ? arr.forEach(h => {
                <div>
                  
                </div>  
            }) : ''
        }
    </div>
  );
}

export default History;