/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
 */

function countZeros(n) {
  if (typeof n !== "number" || n < 0) {
    return "ведите натуральное число больше 0";
  }
  let zerosQuantity = 0;
  if (n < 10) {
    return zerosQuantity;
  }
  for (let i = 10; i <= n; i += 10) {
    zerosQuantity++;
    if (i % 100 === 0) {
      for (let j = i; j < i + 10 && j <= n; j++) {
        zerosQuantity++;
      }
    }
  }
  return zerosQuantity;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
