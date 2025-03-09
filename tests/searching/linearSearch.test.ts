import { linearSearch } from "../../src/searching/linearSearch";

describe("Linear Search", () => {
  test("應該找到數字陣列中的目標元素", () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    expect(linearSearch(arr, 5)).toBe(4);
    expect(linearSearch(arr, 9)).toBe(5);
    expect(linearSearch(arr, 10)).toBe(-1);
  });

  test("應該找到字串陣列中的目標元素", () => {
    const names = ["Alice", "Bob", "Charlie", "David"];
    expect(linearSearch(names, "Charlie")).toBe(2);
    expect(linearSearch(names, "Eve")).toBe(-1);
  });

  test("應該處理空陣列", () => {
    expect(linearSearch([], 42)).toBe(-1);
  });

  test("應該處理只有一個元素的陣列", () => {
    expect(linearSearch([100], 100)).toBe(0);
    expect(linearSearch([100], 50)).toBe(-1);
  });
});
