const { createContext, useState } = require("react");


export const Context = createContext()

export function GlobalContext({children}){
    const [good, setGood] = useState(0)
    const [neurtal, setNeurtal] = useState(0)
    const [bad, setBad] = useState(0)
    const options = {good, neurtal, bad}

    return <Context.Provider value={{good, setGood, options, neurtal, setNeurtal, bad, setBad}}>
        {children}
    </Context.Provider>
}