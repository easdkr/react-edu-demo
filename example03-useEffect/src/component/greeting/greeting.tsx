import { fakeHttpClient } from "apis"
import { Container } from "component/common/Container"
import { messageStyle } from "component/greeting/greeting.style"
import { GreetingMessage } from "models/greeting"
import { useState, useEffect } from "react"

export function Greeting() {
  const [greeting, setGreeting] = useState<GreetingMessage>({message: ''})
  
  useEffect(()=>{
    const 인사말_업데이트 = async () => {
      const message  = await fakeHttpClient.get.greeting()
      setGreeting(message)
    }

    인사말_업데이트()
  }, [])

  return (
    <Container>
      <span style={messageStyle}>
        {greeting.message}
      </span>
    </Container>
  )
};
