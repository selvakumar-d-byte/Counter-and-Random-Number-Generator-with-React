import {useState } from "react"
import Counter from "./Counter"
import Random from "./Random"

function Home() {

    const [component, setComponent] = useState('Home')

    return (
        <>
            {component === "Home" &&
                <>
                    <button className="counter-button" onClick={() => setComponent("Counter")}>Counter</button>
                    <button className="random-button" onClick={() => setComponent("Random")}>Random Number</button>
                </>
            }

            {component === 'Counter' && <Counter setComponent= {setComponent}/> }
            {component === 'Random' && <Random setComponent= {setComponent}/> }
        </>
    )
}

export default Home