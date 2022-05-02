//Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.

let checkObj = (obj) => typeof obj === 'object' && !Array.isArray(obj) && obj !== null

console.log(checkObj({}))


