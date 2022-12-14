import React, { useState } from 'react'
import "./App.css"

function ColorPallete() {
    const mokes = [
    "./images/moke_custom/body/black-body.png",
    "./images/moke_custom/body/blue-body.png",
    "./images/moke_custom/body/pink-body.png",
    "./images/moke_custom/body/orange-body.png",
    "./images/moke_custom/body/red-body.png",
    "./images/moke_custom/body/white-body.png",
    "./images/moke_custom/body/yellow-body.png",
    "./images/moke_custom/body/cobalt-body.png",
    "./images/moke_custom/body/green-body.png",
    "./images/moke_custom/body/rose-body.png",
    "./images/moke_custom/body/cream-body.png",
    "./images/moke_custom/body/mint-body.png",
    "./images/moke_custom/body/camo-body.png"
    ]
    const [images, setImages] = useState("./images/moke_custom/body/black-body.png")
    
  return (<>
  <div className="container">

      <div className="container-image">
        <img src={images} alt="Travel" width={"100%"}/>    
      </div>

      
      
      <div className='container-title'>
          <h1>BODY COLORS</h1>
      </div>
       
      <div className="container-moke">

      <div className="card-moke" key={"black"}>
              <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/black-body.png")} style={{background : "black"}}>
              </div>
          </div>  

          <div className="card-moke" key={"blue"}>
              <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/blue-body.png")} style={{background : "#62B9D4"}}>
              </div>
          </div>  

          <div className="card-moke" key={"pink"}>
              <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/pink-body.png")} style={{background : "#FFCBFF"}}>
              </div>
          </div>

          <div className="card-moke" key={"orange"}>
                <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/orange-body.png")} style={{background : "orange"}}>
                </div>
          </div>  


        <div className="card-moke" key={"red"}>
          <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/red-body.png")} style={{background : "red"}}>
          </div>
        </div>  
        
        <div className="card-moke" key={"white"}>
            <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/white-body.png")} style={{background : "white"}}>
            </div>
        </div>  

        <div className="card-moke" key={"yellow"}>
           <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/yellow-body.png")} style={{background : "yellow"}}>
           </div>
        </div>  

        <div className="card-moke" key={"cobalt"}>
            <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/cobalt-body.png")} style={{background : "#4A85BD"}}>
            </div>
        </div>  


        <div className="card-moke" key={"green"}>
          <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/green-body.png")} style={{background : "green"}}>
          </div>
        </div>

        <div className="card-moke" key={"rose"}>
            <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/rose-body.png")} style={{background : "#CEB4BE"}}>
            </div>
        </div>  

        <div className="card-moke" key={"cream"}>
           <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/cream-body.png")} style={{background : "#F0F0EF"}}>
           </div>
        </div>  

        <div className="card-moke" key={"mint"}>
            <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/mint-body.png")} style={{background : "#2CB695"}}>
            </div>
        </div>  


        <div className="card-moke" key={"camo"}>
          <div className="box-moke" onClick={() => setImages("/images/moke_custom/body/camo-body.png")} style={{background : "#828382"}}>
          </div>
        </div>

      </div>
  </div>
    </>
  )
}

export default ColorPallete