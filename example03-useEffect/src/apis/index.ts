import { GreetingMessage } from "models/greeting"
import { asyncIdentity } from "utils"

export const fakeHttpClient = {
  get:{
    greeting: async () => {
      const result = await asyncIdentity<GreetingMessage>(3000, {message: 'Hi there?'})

      return result
    }
  }
}