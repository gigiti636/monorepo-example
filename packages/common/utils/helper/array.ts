export function reorderArray<T>(arr: T[], draggedIndex: number, newIndex: number): T[] {
  if (draggedIndex < 0 || draggedIndex >= arr.length || newIndex < 0 || newIndex >= arr.length) {
    // Return a copy of the original array
    return [...arr];
  }

  const newArr = [...arr]; // Create a new array with the same elements as the original
  const draggedItem = newArr[draggedIndex];
  newArr.splice(draggedIndex, 1);
  newArr.splice(newIndex, 0, draggedItem);
  return newArr;
}

export function getDistinctEntries<T extends object>(array: T[], field: keyof T): T[keyof T][] {
  return Array.from(new Set(array.map((item) => item[field])));
}

export const accumulateAmountsAndSum = (inputArray: number[] = []) => {
  let acc = 0;
  const accumulatedArray = inputArray.map((amount) => {
    acc += amount;
    return { amount, acc };
  });
  const totalSum = accumulatedArray.length > 0 ? accumulatedArray[accumulatedArray.length - 1].acc : 0;
  return totalSum;
};
