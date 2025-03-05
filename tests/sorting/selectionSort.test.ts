import { selectionSort } from "../../src/sorting/selectionSort";

test("Insertion Sort", () => {
  expect(selectionSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  expect(selectionSort([10, -1, 6, 4, -5])).toEqual([-5, -1, 4, 6, 10]);
  expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(selectionSort([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
});
