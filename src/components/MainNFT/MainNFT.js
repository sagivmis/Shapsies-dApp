import React from "react"
import "./mainnft.css"
import { IMAGES } from "../../assets"

const MainNFT = ({ className, NFT = IMAGES["t_1"] }) => {
  return <img src={NFT} alt='main-nft' className={`nft ${className}`} />
}

export default MainNFT
