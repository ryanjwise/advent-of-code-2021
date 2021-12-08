import { readInput } from "./input.mjs";
import path from "path";

const __dirname = path.resolve();
// const input =
//   "00100\n11110\n10110\n10111\n10101\n01111\n00111\n11100\n10000\n11001\n00010\n01010";
const input = readInput(path.join(__dirname, "/input/day3_input.txt"));
const arr = input.split("\n").map((binaryNumber) => {
  return Array.from(binaryNumber);
});

export const dayThreePartOne = function () {
  let input_length = arr.length;
  let counter = [];
  let gamma_rate = "";
  let epsilon_rate = "";

  arr.forEach((binaryNumber) => {
    binaryNumber.forEach((bit, index) => {
      if (typeof counter[index] === "undefined") {
        counter.push(0);
      }
      if (parseInt(bit) === 1) {
        counter[index] += 1;
      }
    });
  });

  counter.forEach((numBits) => {
    if (numBits > input_length / 2) {
      gamma_rate += 1;
      epsilon_rate += 0;
    } else {
      gamma_rate += 0;
      epsilon_rate += 1;
    }
  });

  console.log(`counter: ${counter}`);
  console.log(`gamma: ${gamma_rate}, epsilon: ${epsilon_rate}`);

  gamma_rate = parseInt(gamma_rate, 2);
  epsilon_rate = parseInt(epsilon_rate, 2);
  let power_consumption = gamma_rate * epsilon_rate;

  console.log(
    `gamma: ${gamma_rate}, epsilon: ${epsilon_rate}, power consumption: ${power_consumption}`
  );
  return power_consumption;
};

dayThreePartOne();
