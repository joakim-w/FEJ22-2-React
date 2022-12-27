import { useState } from 'react'
import ToggleButton from './ToggleButton'
import './App.css'

const App = () => {

  const [numbersArray, setNumbersArray] = useState([0])
  const [count, setCount] = useState(0)

  const add = () => {
    const nextCount = count + 1
    setNumbersArray(prevNumbers => [nextCount, ...prevNumbers])
    setCount(nextCount)
  }

  return (
    <div>
      {/* <ToggleButton number={1} />
      <ToggleButton number={1} /> */}

      <button onClick={add}>lägg till knapp</button>

      {
        numbersArray.map((number, index) => (
          <ToggleButton number={number} key={number} />
        ))
      }
    </div>
  )
}

export default App