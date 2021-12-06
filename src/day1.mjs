import {readInput} from './input.mjs'
import path from 'path'
const __dirname = path.resolve();

const text = readInput(path.join(__dirname, '/input/day1_input.txt'))
// const text = "199\n200\n208\n210\n200\n207\n240\n269\n260\n263"
const arr = text.split('\n')

let count = 0
let areSmaller = []

for (let index = 1; index < arr.length; index++) {
  if (arr[index] > arr[index-1]){
    count++
  } else {
    areSmaller.push([arr[index-1], arr[index]])
  }
}

// arr.forEach((el, index) => {
//   let loop = `index:${index}, elem:${el}, prev:${arr[index-1]}`
//   if (index === 0) {
//     console.log(loop);
//     return
//   }

//   if (el > arr[index-1]){
//     console.log((loop + `, HIGHER`));
//     count++
//   } else {
//     console.log(loop + `, LOWER`);
//   }
// });
console.log(arr.length);
console.log(areSmaller)
console.log(count)