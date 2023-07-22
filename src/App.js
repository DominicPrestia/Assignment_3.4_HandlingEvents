import { useState } from "react";

function App() {

  let [price, setPrice] = useState(parseInt(0.00).toFixed(2))




  return (
    <>
      <h1>Price Input App</h1>

      <h3>Price: ${price}</h3>

      <input
        type="number"
        min={0.00}
        step={.01}
        // value={price}
        placeholder="Enter Price Here"
        onChange={(event) => {
          setPrice(event.target.valueAsNumber)
        }
      }
      />


    </>
  );
}

export default App;
