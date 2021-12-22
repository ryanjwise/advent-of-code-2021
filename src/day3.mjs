import { readInput } from "./input.mjs";
import path from "path";

const __dirname = path.resolve();
// const input =
//   "00100\n11110\n10110\n10111\n10101\n01111\n00111\n11100\n10000\n11001\n00010\n01010";
const input = readInput(path.join(__dirname, "/input/day3_input.txt"));
const arr = input.split("\n").map((binaryNumber) => {
  return Array.from(binaryNumber);
});

function binaryToDecimal(binaryNumber) {
  return parseInt(binaryNumber, 2);
}

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

  return [binaryToDecimal(gamma_rate), binaryToDecimal(epsilon_rate)];
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

function findCommonBitAtNumbit(numberArray, bitIndex) {
  let countPositive = 0;
  let countNegative = 0;

  numberArray.forEach((binaryNumber) => {
    binaryNumber[bitIndex] == 1 ? countPositive++ : countNegative++;
  });

  return countPositive >= countNegative ? 1 : 0;
}

function reduceBinaries(potentials, numBits, reverse = false) {
  for (let bit = 0; bit <= numBits; bit++) {
    if (potentials.length <= 1) break;
    let removalIndexies = [];

    //assess most common bit at numBit
    let commonBit = findCommonBitAtNumbit(potentials, bit);

    if (reverse) {
      commonBit == 1 ? (commonBit = 0) : (commonBit = 1);
    }

    // Find indicies of non-conforming numbers
    potentials.forEach((binaryNumber, i) => {
      if (binaryNumber[bit] != commonBit) {
        removalIndexies.push(i);
      }
    });

    //Filter out indexes that do not meet bit criteria
    potentials = potentials.filter((potential, index) => {
      if (!removalIndexies.includes(index)) return potential;
    });
  }

  return potentials[0];
}

export const dayThreePartTwo = function () {
  // # Filter the array of numbers down to a single number
  let numBits = arr[0].length;
  let oxygenGeneratorRating = reduceBinaries(arr, numBits); //most common
  let CO2ScrubberRating = reduceBinaries(arr, numBits, true); //least common

  // resolve decimal number
  oxygenGeneratorRating = binaryToDecimal(oxygenGeneratorRating.join(""));
  CO2ScrubberRating = binaryToDecimal(CO2ScrubberRating.join(""));

  let lifeSupportRating = oxygenGeneratorRating * CO2ScrubberRating;
  console.log(
    `o2Gen: ${oxygenGeneratorRating}\n
    c02Scrubbers: ${CO2ScrubberRating}
    lifesupport: ${lifeSupportRating}`);
  return lifeSupportRating;
};

// dayThreePartOne();
dayThreePartTwo();

// - Start with all 12 numbers and consider only the first bit of each number. There are more `1` bits (`7`) than `0` bits (`5`), so keep only the 7 numbers with a 1 in the first position: `11110`, `10110`, `10111`, `10101`, `11100`, `10000`, and `11001`.
