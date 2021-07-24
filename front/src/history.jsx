import {useState, useEffect} from 'react'
import axios from 'axios'
// import 'history.css'

function History() {
    //set history state
    const [arr, setArr] = useState([])

    //get the history of the database
    const act = async() => {
        try {
            const {data} = await axios.get('http://localhost:3001/times')
            setArr(data)
        } catch (error){
            alert(error)
        }
    }

    const deleteTime = async (id) => {
        try{
            const {data} = await axios.post('http://localhost:3001/del/time', {id})
            setArr(data)
        } catch(error){
            alert(error)
        }
    }
    useEffect(() => {
    }, [arr])

    return (

        <div className="Hist">
            <button className='button' onClick={act}>Upgrade History</button>
        {
            arr ? arr.map(h => {
                return (
                    <div className='todos'>
                        <ul className='list'>
                        <li>{h.days !== 0 ? `Days:${h.days}` : ''}  {h.hours < 10 ? `0${h.hours}` : h.hours}: {h.minutes < 10 ? `0${h.minutes}` : h.minutes} : {h.seconds<10 ? `0${h.seconds}` : h.seconds}</li>
                        <button className='button' onClick={() => {deleteTime(h.id)}}>X</button>
                        </ul>
                    </div>  
                )
            }) : ''
        }
        </div>
    );
}

export default History;