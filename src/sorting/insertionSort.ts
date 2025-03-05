export function insertionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

insertionSort([1, 2, 5, 3, 6]);
