import { RED, LIGHT_OUT } from "constants/color"
import { RED_RIGHT_INDICATOR } from "constants/string"
import { CSSProperties } from "react"

export interface 빨간불Props{
  toggle: boolean
  setToggle?: () => void
}

const buttonStyle : CSSProperties = { 
  border: '0px',
  width: '100px',
  height: '100px'
}

const TextStyle: CSSProperties = {
  color: '#FFFFFF',
  fontWeight: 'bolder',
  fontSize: '1.5rem'
}

export function 빨간불({toggle, setToggle}:빨간불Props) {
  return (
    <button style={{...buttonStyle, background: !toggle ? RED: LIGHT_OUT}} onClick={setToggle}>
      <span style={TextStyle}>{RED_RIGHT_INDICATOR}</span>
    </button>
  )
}

