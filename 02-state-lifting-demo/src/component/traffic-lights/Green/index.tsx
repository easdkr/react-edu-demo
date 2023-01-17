import { GREEN, LIGHT_OUT } from "constants/color"
import { GREEN_RIGHT_INDICATOR } from "constants/string"
import { CSSProperties } from "react"

export interface 파란불Props{
  toggle: boolean
  setToggle?: () => void
}

const buttonStyle : CSSProperties = { 
  background: '#787878',
  border: '0px',
  width: '100px',
  height: '100px'
}

const TextStyle: CSSProperties = {
  color: '#FFFFFF',
  fontWeight: 'bolder',
  fontSize: '1.5rem'
}

export function 파란불({toggle, setToggle}: 파란불Props) {
  return (
    <button style={{...buttonStyle, background: toggle ? GREEN: LIGHT_OUT}} onClick={setToggle}>
      <span style={TextStyle}>{GREEN_RIGHT_INDICATOR}</span>
    </button>
  )
}