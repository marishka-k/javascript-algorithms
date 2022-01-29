/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 *
 */

function sumOfTwo(arr, sum) {
  if (!Array.isArray(arr)) {
    return "введите массив целых чисел";
  }
  if (typeof sum !== "number" || sum < 0 || sum - Math.floor(sum) !== 0) {
    return "ведите целое неотрицательное число";
  }
  for (let i = 0; i <= arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const elementsSum = arr[i] + arr[j];
      if (
        typeof elementsSum !== "number" ||
        elementsSum - Math.floor(elementsSum) !== 0 ||
        arr[i] < 0
      ) {
        return "в массиве должны быть только целые неотрицательные числа";
      }
      if (elementsSum === sum) {
        return true;
      }
    }
  }
  return false;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false
console.log(sumOfTwo([2, 2, 3, 4, 5], 100)); // false
