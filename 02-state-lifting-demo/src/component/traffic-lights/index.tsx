import { Container } from "component/common/Container"
import { 파란불 } from "component/traffic-lights/Green"
import { 빨간불 } from "component/traffic-lights/Red"

export interface 신호등Props {
  toggle: boolean
  setToggle: (t: boolean) => void
}

export function 신호등({toggle, setToggle}: 신호등Props){
  return(
    <>
      <빨간불 toggle={toggle} setToggle={() => setToggle(false)}/>
      <파란불 toggle={toggle} setToggle={() => setToggle(true)}/>
    </>
  ) 
}