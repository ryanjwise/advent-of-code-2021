import { dayThreePartOne, dayThreePartTwo } from "./../src/day3.mjs";

test("part 1", () => {
  expect(dayThreePartOne()).toBe(3847100);
});
test("part 2", () => {
  expect(dayThreePartTwo()).toBe(4105235);
});