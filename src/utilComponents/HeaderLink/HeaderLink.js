import React from "react"
import "./headerlink.css"
import Button from "../Button/Button"

const HeaderLink = ({ content, invert, textGlow, onClick }) => {
  return (
    <div className='header-link '>
      {!invert && <Button textGlow={textGlow}>{content}</Button>}
      {invert && (
        <Button container type='header'>
          <Button secondary type='header' textGlow={textGlow} onClick={onClick}>
            {content}
          </Button>
        </Button>
      )}
    </div>
  )
}

export default HeaderLink
