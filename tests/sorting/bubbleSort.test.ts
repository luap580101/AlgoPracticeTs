import { bubbleSort } from "../../src/sorting/bubbleSort";

test("Bubble Sort", () => {
  expect(bubbleSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  expect(bubbleSort([10, -1, 6, 4, -5])).toEqual([-5, -1, 4, 6, 10]);
  expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(bubbleSort([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
});
