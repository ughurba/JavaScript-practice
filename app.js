//Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.

// let checkObj = (obj) => typeof obj === 'object' && !Array.isArray(obj) && obj !== null

// console.log(checkObj({}))



//Напишите функцию, которая возвращает новый объект без указанных значений.
//(arrow function)
// let newObject = (obj,key) => {
//     delete obj[key]
//     return obj
// }
// console.log(newObject({a:12,b:4},'a'));




// function updateObj(obj,key){
//     delete obj[key]
//     return obj
// }

//  let newObj = updateObj({a:12,b:4},'a')
// console.log(newObj)