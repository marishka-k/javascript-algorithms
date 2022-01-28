/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
 */

function fibonacci(n) {
  if (typeof n !== "number") {
    return "введите число";
  }
  const newList = [0, 1];
  for (let i = 2; i <= n; i++) {
    const prevNum1 = newList[i - 1];
    const prevNum2 = newList[i - 2];
    newList.push(prevNum1 + prevNum2);
  }
  return newList[n - 1];
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
