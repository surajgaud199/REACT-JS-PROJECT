import React from 'react'
import { useState } from 'react'

function Prectic () {
    const [count, setCount] = useState(0)
    function updateCount(){
        setCount(count + 2)
    }
  return (
    <>
    <center>
        <h1>UseState</h1>
      <h3>Button clicke {count} times</h3>
      <button onClick={updateCount}>Click</button>
      </center>
    </>
  )
}

export default Prectic
