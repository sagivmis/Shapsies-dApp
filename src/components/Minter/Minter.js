import React from "react"
import "./minter.css"
// import { ethers } from "ethers"
import { Button } from "@mui/material"
// import { mintNFT } from "../../utils/interact"

// const REACT_APP_PRIVATE_KEY =
//   "c0f1a6c7daaa2b7034f8c5509c8f4b6d7a662e52b81487b1f34655aa596496e4"
// const REACT_APP_API_KEY = "hPpY9lJpAENK0UmjyQhGm6veY9S9yW8q"

// const baliTokenAddress = "0x3E0e064077F1cB44dc048A758F9476ba0502DC38"
// const contractABI = require("./contract-abi.json")

const Minter = () => {
  // const [name, setName] = useState("") // token's name
  // const [description, setDescription] = useState("") // token's description
  // const [url, setURL] = useState("") // TOKEN URI

  const walletAddress = ""
  return (
    <div className='minter'>
      <Button
        // onClick={
        //   () =>
        //   mintNFT(
        //     walletAddress,
        //     "Mysterious Treasury Box",
        //     "What will you get?"
        //   ).then((res) => console.log(res.status))
        // }
        variant='contained'
      >
        MINT
      </Button>
    </div>
  )
}

export default Minter
