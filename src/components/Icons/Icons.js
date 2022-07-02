import React from "react"
import "./icons.css"
import twitterSVG from "./twitter.svg"
import instagramSVG from "./instagram.svg"
import discordSVG from "./discord.svg"

const Icons = ({ twitter, instagram, discord }) => {
  return (
    <div className='icon-back'>
      <div className='icon'>
        {twitter && <img src={twitterSVG} alt='twitter' className='twitter' />}
        {instagram && (
          <img src={instagramSVG} alt='instagram' className='instagram' />
        )}
        {discord && <img src={discordSVG} alt='discord' className='discord' />}
      </div>
    </div>
  )
}

export default Icons
