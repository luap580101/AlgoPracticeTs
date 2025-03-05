import { mergeSort } from "../../src/sorting/mergeSort";

test("Insertion Sort", () => {
  expect(mergeSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
  expect(mergeSort([10, -1, 6, 4, -5])).toEqual([-5, -1, 4, 6, 10]);
  expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  expect(mergeSort([5, 5, 5, 5, 5])).toEqual([5, 5, 5, 5, 5]);
});
