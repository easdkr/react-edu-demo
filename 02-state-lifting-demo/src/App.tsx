import { Container } from "component/common/Container";
import { 신호등 } from "component/traffic-lights";
import React, { useState } from "react";

export default function App() {
  const [toggle, setToggle] = useState(false)
  
  return (
    <Container>
      <신호등 toggle={toggle} setToggle={setToggle} />
    </Container>
  )
}
