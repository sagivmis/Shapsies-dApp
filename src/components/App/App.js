import Header from "../Header/Header"
import "./App.css"
import React, { useState, useEffect, useCallback, useRef } from "react"
import lineBorder from "../shots/border-bottom.svg"
import { IMAGES, UTILS } from "../../assets"
import MainNFT from "../MainNFT/MainNFT"
import Border from "../../utilComponents/Border/Border"
import CollectionInfo from "../CollectionInfo/CollectionInfo"
import MintContainer from "../MintContainer/MintContainer"
import { Button, nativeSelectClasses } from "@mui/material"
import gsap from "gsap"
import { TweenMax, Power3 } from "gsap"

function App() {
  const [y, setY] = useState(0)

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget
      if (y > window.scrollY) {
      } else if (y < window.scrollY) {
      }

      setY(window.scrollY)
    },
    [y]
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener("scroll", handleNavigation)

    return () => {
      window.removeEventListener("scroll", handleNavigation)
    }
  }, [handleNavigation])
  const roadmapRef = useRef()

  const [firstX, setFirstX] = useState(0)
  const [secondX, setSecondX] = useState(0)
  const [thirdX, setThirdX] = useState(0)
  const [fourX, setFourX] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      animateMove(".first", firstX, setFirstX)
      animateMove(".second", secondX, setSecondX)
      animateMove(".third", thirdX, setThirdX)
      animateMove(".four", fourX, setFourX)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const generateMoves = useCallback(
    (prevX, setX) => {
      const x = Math.trunc(Math.random() * 300) - 150
      setX(x)
      const duration = 1 + Math.random()
      const delay = 1 + Math.random() * 3

      let scale
      if (x < 0) scale = -1
      else scale = 1
      return { x, scale, duration, delay }
    },
    [firstX, secondX, thirdX, fourX]
  )

  const animateMove = (selector, prevX, setX) => {
    const move = generateMoves(prevX, setX)
    const vars = {
      x: move.x,
      duration: move.duration,
      delay: move.delay
    }

    if (move.scale === 1)
      gsap.to(selector, { scaleX: 1, duration: 0, delay: move.delay })
    else if (move.scale === -1)
      gsap.to(selector, { scaleX: -1, duration: 0, delay: move.delay })

    gsap.to(selector, vars)
  }

  const clamp = function (value, min, max) {
    let number = Number(value)

    return Math.min(max, Math.max(min, isNaN(number) ? min : number))
  }

  const scrollAnimate = (
    element,
    minValue,
    maxValue,
    startRange,
    endRange,
    property
  ) => {
    switch (property) {
      case "right":
        element.style.right =
          clamp(
            maxValue - ((y - startRange) / (endRange - startRange)) * maxValue,
            minValue,
            maxValue
          ) + "%"
        break
      case "bottom":
        element.style.bottom =
          clamp(
            ((y - startRange) / (endRange - startRange)) * maxValue,
            minValue,
            maxValue
          ) + "%"
        break
    }
  }
  const bannerRef = useRef(null)

  useEffect(() => {
    scrollAnimate(bannerRef.current, 0, 100, 0, 1500, "right")
  }, [y])

  return (
    <div className='app-container'>
      <div className='app'>
        <Header scrollY={y} />
        <div className='mtb-landing-container' ref={roadmapRef}>
          <MainNFT NFT={IMAGES["t_16"]} className='banner-nft nft first' />
          <MainNFT NFT={IMAGES["t_17"]} className='banner-nft nft second' />
          <MainNFT NFT={IMAGES["t_18"]} className='banner-nft nft third' />
          <MainNFT NFT={IMAGES["t_19"]} className='banner-nft nft four' />
          <img
            src={IMAGES["banner"]}
            alt='mtb-landing-container'
            className='mtb-landing-image'
            ref={bannerRef}
          />
          <Border border={lineBorder} classN='reg' />
        </div>
        {/* <div className='custom-btn-container'>
          <img src={UTILS["button"]} alt='button' className='svg-btn'></img>
          <Button
            onClick={() => {
              alert("success")
            }}
            className='link'
            variant='outlined'
          >
            LINK
          </Button>
        </div> */}
        <CollectionInfo scrollY={y} scrollAnimate={scrollAnimate} />
        <MintContainer />
      </div>
    </div>
  )
}

export default App
