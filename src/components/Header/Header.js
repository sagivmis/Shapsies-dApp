import React, { useEffect, useState } from "react"
import HeaderLink from "../../utilComponents/HeaderLink/HeaderLink"
import Icons from "../Icons/Icons"
import { Button } from "@mui/material"
import "./header.css"
import { IMAGES } from "../../assets"
// import { connectWallet, getCurrentWalletConnected } from "../../utils/interact"

const Header = ({ scrollY }) => {
  const [walletAddress, setWallet] = useState("")
  const [status, setStatus] = useState("")

  const addWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0])
          setStatus("👆🏽 Write a message in the text-field above.")
        } else {
          setWallet("")
          setStatus("🦊 Connect to Metamask using the top right button.")
        }
      })
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            target='_blank'
            href={`https://metamask.io/download.html`}
            rel='noreferrer'
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      )
    }
  }

  const connectWalletPressed = async () => {
    // const walletResponse = await connectWallet()
    // setStatus(walletResponse.status)
    // setWallet(walletResponse.address)
  }

  const initWallet = async () => {
    // const { address, status } = await getCurrentWalletConnected()
    // setWallet(address)
    // setStatus(status)
  }

  useEffect(() => {
    initWallet()
    addWalletListener()
  }, [])

  return (
    <header className='header'>
      {scrollY > window.innerWidth - 100 && (
        <div className='header-links font-bd'>
          <HeaderLink content={"HOME"} textGlow />
          <HeaderLink content={"TEAM"} textGlow />
          <HeaderLink content={"TRAITS"} textGlow />
          <HeaderLink content={"FAQ"} textGlow />
        </div>
      )}

      {scrollY > window.innerWidth / 2 && (
        <div className='header-icons'>
          <Icons twitter />
          <Icons instagram />
          <Icons discord />
        </div>
      )}
      {scrollY > window.innerWidth - 100 && (
        <div className='mtb-logo'>
          <img
            src={IMAGES["MTB_opacity"]}
            alt='mtb'
            className='mtb-logo-header'
          />
        </div>
      )}
      <Button
        variant='outlined'
        className='wallet-button'
        onClick={connectWalletPressed}
      >
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </Button>
      <p className='metamask-status'>{status}</p>
    </header>
  )
}

export default Header
