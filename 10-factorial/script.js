/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 *
 */

function factorial(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    return "введите неотрицательное целое число";
  }
  let result = 1;
  if (n === 0 || n === 1) {
    return result;
  } else {
    for (let i = n; i >= 1; i--) {
      result = result * i;
    }
    return result;
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720
