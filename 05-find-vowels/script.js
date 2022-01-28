/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 *
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
 */

function findVowels(str) {
  if (typeof str !== "string") {
    return "Введите строку";
  }
  if (str.match(/[a-zA-Z]/d)) {
    return "введите в строке текст кирилицей";
  }
  const vowels = ["а", "я", "о", "ё", "у", "ю", "ы", "и", "э", "е"];
  let a = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((letter) => {
      if (vowels.includes(letter)) {
        a++;
      }
    });
  return a;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels("здравствуй")); // 2
console.log(findVowels("привет")); // 2
console.log(findVowels("хеллоу")); // 3
