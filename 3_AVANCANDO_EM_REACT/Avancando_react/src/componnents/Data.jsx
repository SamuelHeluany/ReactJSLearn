import { useState } from "react"

const data = () => {
    let anyData = 10

    const [otherNumber, setOtherNumber] = useState(0)
    const [otherName, setOtherName] = useState('loading name...')
  return (
    <div>
        <div>
            <p>Value: {anyData}</p>
        <button>Change value</button>
        </div>

        <div>
            <p>Value: {otherNumber}</p>
            <button onClick={() => {setOtherNumber(20)}}>Change State</button>
        </div>

        <div>
            <p>My name is {otherName}</p>
            <button onClick={() => {setOtherName('Samuel')}}>Load Name</button>
        </div>
        
    </div>
    
  )
}

export default data