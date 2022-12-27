import { useState } from "react"

const App = () => {

  const [counter, setCounter] = useState(0)

  // let counter = 2

  const increment = (amount) => {
    // counter += amount
    // setCounter(1) // vi kan hårdkoda in ett värde
    // setCounter(counter + 1) // 1
    // console.log(counter)


    // När vi försöker använda det egna värdet direkt, så kan vi inte vara 100% säkra 
    // på att det är det senaste uppdaterade värdet vi har
    // // 0
    // setCounter(counter + 1)
    // // 0
    // setCounter(counter + 1)
    // // 1


    // ALLTID när vi ska uppdatera ett state som är beroende av sig självt så gör vi det i en callback funktion!
    // 0
    setCounter(counter => {
      return counter + 1
    })
    // 1
    setCounter(previousState => {
      return previousState + 1
    })
    // 2
  }


  return (
    <div>
      <p>{counter}</p>
      <button onClick={() => increment(1)} >click me</button>
    </div>
  )
}

export default App