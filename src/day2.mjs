import { readInput } from "./input.mjs";
import path from "path";

const __dirname = path.resolve();
// const input = "forward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2";
const input = readInput(path.join(__dirname, "/input/day2_input.txt"));

function formatCommand(command) {
  let cmdArr = command.split(" ");
  cmdArr[1] = parseInt(cmdArr[1]);
  return cmdArr;
}

function executeCommand(coordinates, command) {
  switch (command[0]) {
    case "forward":
      coordinates["position"] += command[1];
      break;
    case "up":
      coordinates["depth"] -= command[1];
      break;
    case "down":
      coordinates["depth"] += command[1];
      break;
    default:
      break;
  }
  return coordinates;
}

const commands = input.split("\n").map((command) => formatCommand(command));

export const dayTwoPartOne = function () {
  let coordinates = { position: 0, depth: 0 };
  commands.forEach((command) => {
    coordinates = executeCommand(coordinates, command);
  });

  console.log(coordinates);
  return (coordinates.depth * coordinates.position)
};

// console.log(commands);
// console.log(commands.length);
console.log(dayTwoPartOne());
