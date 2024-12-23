import { useState } from "react"
import React from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] =useState("")
  return (
    <div>
        <h1>Enter your name</h1>
    <input type="text" onChange={(e) => setName(`Hello ${e.target.value}!`)} />
    <h2> {name}</h2>
    </div>
  )
}

export default App;





