import { dayTwoPartOne, dayTwoPartTwo } from "./../src/day2.mjs";

test("part 1", () => {
  expect(dayTwoPartOne()).toBe(2039912);
});
test("part 2", () => {
  expect(dayTwoPartTwo()).toBe(1942068080);
});
