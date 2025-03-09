import { binarySearch } from "../../src/searching/binarySearch";

describe("Binary Search", () => {
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];

  test("應該找到目標數字的索引", () => {
    expect(binarySearch(sortedArray, 1)).toBe(0);
    expect(binarySearch(sortedArray, 7)).toBe(3);
    expect(binarySearch(sortedArray, 15)).toBe(7);
  });

  test("應該返回 -1 如果目標數字不存在", () => {
    expect(binarySearch(sortedArray, 2)).toBe(-1);
    expect(binarySearch(sortedArray, 8)).toBe(-1);
    expect(binarySearch(sortedArray, 20)).toBe(-1);
  });

  test("應該處理邊界條件", () => {
    expect(binarySearch([], 5)).toBe(-1);
    expect(binarySearch([10], 10)).toBe(0);
    expect(binarySearch([10], 5)).toBe(-1);
  });
});
