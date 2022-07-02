import { Card, CardContent, CardHeader } from "@mui/material"
import React from "react"
import "./mintContainer.css"
import waveBorder from "../shots/wave-border.png"
import Border from "../../utilComponents/Border/Border"
import Minter from "../Minter/Minter"
// import { createRequire } from "module"
// const require = createRequire(import.meta.url)

const MintContainer = () => {
  return (
    <div className='mint-container'>
      <div className='mint-title'>MINT</div>

      <div className='mint-information'>
        <Card className='mint-info-card price'>
          <CardHeader>PRICING</CardHeader>
          <CardContent>PRICE: 0.05 E</CardContent>
        </Card>
      </div>

      <Minter />
      <Border border={waveBorder} classN={"wave mint-container-wave"} />
    </div>
  )
}

export default MintContainer
