import React, { useState } from 'react'
import "./App.css"
import ColorPallete from './ColorPallete'



function App() {

    const colors = [
        "#9253a1",
        "#f063a4",
        "black",
        "purple",
        "white",
        "orange"
    ]
    
    const [background, setBackground] = useState("#071415")
    const [current, setCurrent] = useState(null)
    
  return (
    <div className='App'style={{background: background}}>
        {current !== null && <h1>Copied{current}</h1>}
        <div className="container">
               {colors.map((color, index) => (
                <div key={index} className="card">
                    <div style={{
                      background: color, 
                    }}      className="box" onClick={() => setBackground(color)}>

                    </div>
                </div>
               ))} 

        </div>
    
    </div>
  )
}

export default App