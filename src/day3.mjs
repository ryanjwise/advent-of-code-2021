import { readInput } from "./input.mjs";
import path from "path";

const __dirname = path.resolve();
// const input =
//   "00100\n11110\n10110\n10111\n10101\n01111\n00111\n11100\n10000\n11001\n00010\n01010";
const input = readInput(path.join(__dirname, "/input/day3_input.txt"));
const arr = input.split("\n").map((binaryNumber) => {
  return Array.from(binaryNumber);
});

console.log(arr);

function countPositiveBits(arrayOfBinaries) {
  let bitCounter = [];

  arrayOfBinaries.forEach((binaryNumber) => {
    binaryNumber.forEach((bit, index) => {
      // Ensure array index exists
      if (typeof bitCounter[index] === "undefined") {
        bitCounter.push(0);
      }
      if (parseInt(bit) === 1) {
        bitCounter[index] += 1;
      }
    });
  });

  return bitCounter;
}

function findRates(bitTally, numberOfInputs) {
  let gamma_rate = "";
  let epsilon_rate = "";

  bitTally.forEach((numBits) => {
    if (numBits > numberOfInputs / 2) {
      gamma_rate += 1;
      epsilon_rate += 0;
    } else {
      gamma_rate += 0;
      epsilon_rate += 1;
    }
  });

  return [parseInt(gamma_rate, 2), parseInt(epsilon_rate, 2)];
}

export const dayThreePartOne = function () {
  let input_length = arr.length;
  let bitCounter = countPositiveBits(arr);
  let [gamma_rate, epsilon_rate] = findRates(bitCounter, input_length);
  let power_consumption = gamma_rate * epsilon_rate;

  console.log(`counter: ${bitCounter}`);
  console.log(`gamma: ${gamma_rate}, epsilon: ${epsilon_rate}`);

  console.log(
    `gamma: ${gamma_rate}, epsilon: ${epsilon_rate}, power consumption: ${power_consumption}`
  );
  return power_consumption;
};

dayThreePartOne();
