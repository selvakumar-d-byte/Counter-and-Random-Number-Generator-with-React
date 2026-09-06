import { useState } from "react"

function Random({setComponent})
{

    const [randomNum, setRandomNum] = useState()

    return(
        <>
            <button className="back-button" onClick={()=>setComponent('Home')}>Back</button>
            <h1>{randomNum}</h1>
            <button className="generate-button" onClick={()=>{setRandomNum(Math.floor(Math.random() * 100) + 1)}}>Generate Random Number</button>
        </>
    )
}

export default Random