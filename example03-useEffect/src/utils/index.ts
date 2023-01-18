export const asyncTimeout = async (delay: number) => 
  new Promise<void>((resolve) => setTimeout(()=> resolve(), delay))


export async function asyncIdentity<T>(delay: number, message: T){
  await asyncTimeout(delay)
  return message
}