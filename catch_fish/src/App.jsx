import React, { useState } from "react"

function App() {
  const fish1 = ["Salmon", "Pufferfish", "Cod","Heart_of_the_sea", "Gold", "Shoe"]
  
  const [randomFish, setRandomFish] = useState(null)
  const [items, setItems] = useState([])

  const handleRandomize = () => {
    const randomIndex = Math.floor(Math.random() * fish1.length)
    const newItem = fish1[randomIndex]
    
    setRandomFish(newItem)

    setItems(prevItems => [...prevItems, newItem])
  }

  return(
<div className="main">
  <div className="sea">
    <h1>Fishy Party</h1>
    <button className="fishing" onClick={handleRandomize}>Fishing</button>
    {randomFish && <p>Your loot: {randomFish}</p>}
  </div>
    <div className="equipment">
      <h3>Your equipment:</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
</div>
  )
}

export default App