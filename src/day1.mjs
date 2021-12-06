import {readInput} from './input.mjs'
import path from 'path'
const __dirname = path.resolve();

// const text = readInput(path.join(__dirname, '/input/day1_input.txt'))
const text = "123\n126\n130\n137\n140\n150\n155\n157\n173\n186"
const arr = text.split('\n')

let count = 0

arr.forEach((el, index) => {
  let loop = `index:${index}, elem:${el}, prev:${arr[index-1]}`
  if (index === 0) {
    console.log(loop);
    return
  }

  if (el > arr[index-1]){
    console.log((loop + `, HIGHER`));
    count++
  } else {
    console.log(loop + `, LOWER`);
  }
});
console.log(arr.length);
console.log(count)