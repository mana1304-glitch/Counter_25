// import React from 'react'
// import './Counter.css'
// const Counter = () => {
  
//     const count = document.getElementById("count");
//         const incCount = document.getElementById("incCount");
//         const decCount = document.getElementById("decCount");

//   const inc = () => {
//     c = (c >= 10) ? 0 : c + 1;
//     ci = (ci >= 10) ? 0 : ci + 1;
//     update();
// }

// const dec = () =>  {
//     c = c > 0 ? c - 1 : 0;
//     cd = (cd >= 10) ? 0 : cd + 1;
//     update();
// }

// const update = () => {
//             incCount.textContent = ci;
//     decCount.textContent = cd;
//     count.textContent = c;
//       }
    
//     return (
//     <div class="container">
//         <div class="counter">
//             <p id="count">0</p>
//         </div>
//         <div>
//             <button onclick={dec}>Decrement</button>
//             <button onclick={inc}>Increment</button>
//         </div>
//         <div class="clicks">
//             <p>Clicks on Increment: <span id="incCount">0</span></p>
//             <p>Clicks on Decrement: <span id="decCount">0</span></p>
//         </div>
//     </div>
//   )
// }

// export default Counter

import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [incCount, setIncCount] = useState(0);
  const [decCount, setDecCount] = useState(0);
// const [clearCount, setClearCount] = useState();
    
  const handleIncrement = () => {
    setCount((prev) => (prev >= 10 ? 0 : prev + 1));
      setIncCount((prev) => (prev >= 10 ? 0 : prev + 1));
     
  };

  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
    setDecCount((prev) => (prev >= 10 ? 0 : prev + 1));
  };

    const handleClear = () =>  {
        setCount(0);
    }
    
  return (
    <div className="container">
      <div className="counter">
        <p>{count}</p>
      </div>

      <div className="buttons">
        <button onClick={handleDecrement}>Decrement</button>
              <button onClick={handleIncrement}>Increment</button>
              <button onClick={handleClear}>Clear</button>
      </div>

      <div className="clicks">
        <p>
                  Clicks on Increment: <span>{incCount}</span> 
        </p>
        <p>
          Clicks on Decrement: <span>{decCount}</span>
              </p>
              
      </div>
    </div>
  );
};

export default Counter;