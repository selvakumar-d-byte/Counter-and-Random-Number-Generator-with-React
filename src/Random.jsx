import { useState } from "react"

function Random({setComponent})
{

    const [randomNum, setRandomNum] = useState()

    return(
        <>
            <button className="back-button" onClick={()=>setComponent('Home')}>Back</button>
            
            <h1 className="topic">Random Number</h1>
            {randomNum == null ? <p>No number generated yet</p> : <h1>{randomNum}</h1> }
            <button className="generate-button" onClick={()=>{setRandomNum(Math.floor(Math.random() * 100) + 1)}}>Generate Random Number</button>
        </>
    )
}

export default Random