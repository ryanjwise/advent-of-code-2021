import { readFileSync } from 'fs'

export const readInput = function(inputPath) {
  try {
    const data = readFileSync(inputPath, "utf8")
    return data
  } catch(e){
    console.error(e)
  }
}
