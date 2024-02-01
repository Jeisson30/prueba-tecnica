import React, {useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)


    const  incrementCounter = ()=>{
        setCount(count + 1 )
    }

    return (
        <div>
            <h2>Contador</h2>
            <p>{count}</p>
            <button onClick={incrementCounter}>Incrementar</button>
        </div>
    )

}

export default Counter