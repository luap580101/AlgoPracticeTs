import { quickSort } from "../../src/sorting/quickSort";

test("Insertion Sort", () => {
  expect(quickSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  expect(quickSort([10, -1, 6, 4, -5])).toEqual([-5, -1, 4, 6, 10]);
  expect(quickSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(quickSort([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
});
