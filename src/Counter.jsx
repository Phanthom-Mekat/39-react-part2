import { useState } from "react"

export default function Counter(){
    const [count,setcount] =useState(0)

    const handleAdd = ()=>{
        const newCount = count+1
        setcount(newCount)
    }
    const handleMinus = ()=> {
        const newCount = count-1
        setcount(newCount)
    }
    return(
        <div>

            <h3>Counter:{count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleMinus}>minus</button>
        </div>
    )
}