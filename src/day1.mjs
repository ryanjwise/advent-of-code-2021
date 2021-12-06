import { readInput } from "./input.mjs";
import path from "path";

const __dirname = path.resolve();
// const text = "199\n200\n208\n210\n200\n207\n240\n269\n260\n263"
const text = readInput(path.join(__dirname, "/input/day1_input.txt"));
const arr = text.split("\n").map((number) => {
  return parseInt(number);
});

export const dayOnePartOne = function () {
  let count = 0;

  for (let index = 1; index < arr.length; index++) {
    if (arr[index] > arr[index - 1]) {
      count++;
    }
  }

  console.log(
    `There are ${arr.length} items, and ${count} of them are larger than their predecessor.`
  );
  return count;
};

export const dayOnePartTwo = function () {
  let count = 0;
  let previous = 0;
  let current = 0;

  for (let index = 2; index < arr.length; index++) {
    previous = current;
    current = arr[index] + arr[index - 1] + arr[index - 2];
    if (previous != 0 && current > previous) {
      count++;
    }
  }

  console.log(
    `There are ${arr.length} items, and ${count} of them are larger than their predecessor.`
  );
  return count;
};
