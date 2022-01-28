/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 *
 */

function anagram(str1, str2) {
  const str1Letters = str1.toLowerCase().split("").sort().join("");
  const str2Letters = str2.toLowerCase().split("").sort().join("");
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return "одно из выражений не является строкой";
  }
  if (
    str1.length !== str2.length ||
    str1.toLowerCase() === str2.toLowerCase() ||
    str1Letters !== str2Letters
  ) {
    return false;
  } else {
    return true;
  }
}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram("finder", "Friend")); // true
console.log(anagram("hello", "bye")); // false
