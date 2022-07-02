import React, { useEffect, useRef } from "react"
import "./collectionInfo.css"
import lineBorder from "../shots/border-bottom.svg"

import Card from "@mui/material/Card"
// import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
// import { Button, CardHeader, Icon, IconButton } from "@mui/material"
import { InfoRounded } from "@mui/icons-material"
import Border from "../../utilComponents/Border/Border"
import MainNFT from "../MainNFT/MainNFT"
import { IMAGES } from "../../assets"

const CardInfo = ({ text, minWidth = 150, maxWidth = 300 }) => {
  return (
    <Card sx={{ minWidth: 50 }} className='info-card'>
      <CardContent>
        INFO
        <InfoRounded />
      </CardContent>
      {/* <CardActions>
          <Button>press here</Button>
        </CardActions> */}
    </Card>
  )
}
const CollectionInfo = ({ scrollY, scrollAnimate }) => {
  const nftRef = useRef(null)
  const secondNftRef = useRef(null)
  useEffect(() => {
    scrollAnimate(nftRef.current, -32, -28, 200, 700, "bottom")
    scrollAnimate(secondNftRef.current, -38, -24, 300, 500, "bottom")
  }, [scrollY])

  return (
    <div className='collection-info'>
      <div className='collection-info-grid'>
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <CardInfo />
        <div className='dotted-roadmap' />
        <div className='curtain first-curtain' />
      </div>

      <img
        src={IMAGES["t_1"]}
        className='collection-info-nft nft'
        ref={nftRef}
      />
      <img
        src={IMAGES["t_2"]}
        className='collection-info-nft-second nft'
        ref={secondNftRef}
      />
      <Border border={lineBorder} classN={"wave collection-info-wave"} />
    </div>
  )
}

export default CollectionInfo
