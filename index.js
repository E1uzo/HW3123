"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findElement(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}
const numbers = [1, 2, 3, 4, 5];
const target = 3;
const index = findElement(numbers, target);
console.log(`Индекс элемента ${target} в массиве: ${index}`);
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
const person1 = { name: 'Alice', age: 30 };
const person2 = { age: 25, city: 'New York' };
const mergedPerson = mergeObjects(person1, person2);
console.log(mergedPerson);
//# sourceMappingURL=index.js.map