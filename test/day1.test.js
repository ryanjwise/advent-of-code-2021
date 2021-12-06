import { dayOnePartOne, dayOnePartTwo } from "./../src/day1.mjs";

test("part 1", () => {
  expect(dayOnePartOne()).toBe(1759);
});
test("part 2", () => {
  expect(dayOnePartTwo()).toBe(1805);
});
