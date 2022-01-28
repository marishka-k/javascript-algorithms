/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  if (typeof str !== "string") {
    return "Введите строку";
  } else {
    return str.replace(/(^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"
