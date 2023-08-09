import React, {useMemo, useState} from 'react'

function Parent() {
    const [counterOne, setCounterOne] = useState();
    const [counterTwo, setCounterTwo] = useState();

    const handlecountOne = () => {
        console.log("c1")
        setCounterOne(counterOne + 1)
    }
    const handlecountTwo = () => {
        setCounterTwo(counterTwo + 1)
        console.log("c2")
    }


    const isEven = useMemo(()=>{
console.log("memio")
        let i = 0;
        while (i < 2000000) i++;
        return counterOne % 2 === 0;
},[counterOne])


return (
    <div>
        <p> {isEven ? "even" : "odd"}</p>
        {/* {counterOne} */}
        <button onClick={handlecountOne}>counter one</button>
        <button onClick={handlecountTwo}>counter two</button>
        {/* {counterTwo} */}
    </div>
)
}

export default Parent
