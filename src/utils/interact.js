import contract from "../artifacts/MysteriousTreasuryBox.json"
import { pinJSONToIPFS } from "./pinata.js"
// import Web3 from "web3"
// import { ethers } from "ethers"

// const web3 = new Web3(Web3.givenProvider)

// const contractABI = contract.abi
// const baliTokenAddress = "0xbD373065fEdaF090446c635338d3a5c3cBd0835b"
// let NFTTokenId = 1
// const defaultMTB_NFT =
//   "https://gateway.pinata.cloud/ipfs/QmWb8V17eRHDWf2r2Hp6aKUJLevKPA3D6RdLwJjsCZuVeE"

// export const mintNFT = async (
//   address,
//   name,
//   description,
//   url = defaultMTB_NFT
// ) => {
//   const metadata = {
//     name: `${name} #${NFTTokenId}`,
//     image: url,
//     description: description
//   }
//   // console.log(metadata)
//   NFTTokenId += 1
//   const pinataResponse = await pinJSONToIPFS(metadata)
//   if (!pinataResponse.success) {
//     return {
//       success: false,
//       status: "Something went wrong while uploading your tokenURI"
//     }
//   }
//   const tokenURI = pinataResponse.pinataUrl
//   console.log(tokenURI)
//   window.contract = await new web3.eth.Contract(contractABI, baliTokenAddress)
//   //set up your Ethereum transaction
//   const transactionParameters = {
//     value:
//       "0x" + Web3.utils.toBN(Web3.utils.toWei("0.05", "ether")).toString(16),
//     to: baliTokenAddress, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.contract.methods
//       .mintNFT(window.ethereum.selectedAddress, tokenURI)
//       .encodeABI() //make call to NFT smart contract
//   }

//   //sign the transaction via Metamask
//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters]
//     })
//     return {
//       success: true,
//       status:
//         "✅ Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/" +
//         txHash
//     }
//   } catch (error) {
//     return {
//       success: false,
//       status: "😥 Something went wrong: " + error.message
//     }
//   }
// }

// export const connectWallet = async () => {
//   if (window.ethereum) {
//     try {
//       const addressArray = await window.ethereum.request({
//         method: "eth_requestAccounts"
//       })
//       console.log(addressArray)
//       const obj = {
//         status: "👆🏽 Write a message in the text-field above.",
//         address: addressArray[0]
//       }
//       return obj
//     } catch (err) {
//       return {
//         address: "",
//         status: "😥 " + err.message
//       }
//     }
//   } else {
//     return {
//       address: "",
//       status: (
//         <span>
//           <p>
//             🦊
//             <a
//               target='_blank'
//               rel='noreferrer'
//               href={`https://metamask.io/download.html`}
//             >
//               You must install Metamask, a virtual Ethereum wallet, in your
//               browser.
//             </a>
//           </p>
//         </span>
//       )
//     }
//   }
// }

// export const getUserBalance = (address) => {
//   return window.ethereum
//     .request({ method: "eth_getBalance", params: [address, "latest"] })
//     .then((res) => {
//       return parseFloat(ethers.utils.formatEther(res)).toFixed(7)
//     })
// }

// export const getCurrentWalletConnected = async () => {
//   if (window.ethereum) {
//     try {
//       const addressArray = await window.ethereum.request({
//         method: "eth_accounts"
//       })
//       if (addressArray.length > 0) {
//         return {
//           address: addressArray[0],
//           status: "👆🏽 Write a message in the text-field above."
//         }
//       } else {
//         return {
//           address: "",
//           status: "🦊 Connect to Metamask using the top right button."
//         }
//       }
//     } catch (err) {
//       return {
//         address: "",
//         status: "😥 " + err.message
//       }
//     }
//   } else {
//     return {
//       address: "",
//       status: (
//         <span>
//           <p>
//             {" "}
//             🦊
//             <a
//               target='_blank'
//               rel='noreferrer'
//               href={`https://metamask.io/download.html`}
//             >
//               You must install Metamask, a virtual Ethereum wallet, in your
//               browser.
//             </a>
//           </p>
//         </span>
//       )
//     }
//   }
// }
