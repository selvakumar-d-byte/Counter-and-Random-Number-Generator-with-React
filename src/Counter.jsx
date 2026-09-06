import { useState } from "react"

function Counter({setComponent}) {

    const [count, setCount] = useState(0)

    return (
            <>
                <button className="back-button" onClick={()=>setComponent('Home')}>Back</button>

                <h1>Counter</h1>
                <h1>{count}</h1>

                <div className="counter-section-button">
                    <button className="button-one" onClick={() => { setCount(count >= 1 ? count - 1 : count) }}>Decrease</button>
                    <button className="button-two" onClick={() => { setCount(count + 1) }}>Increase</button>
                </div>
            </>
        )
}

export default Counter