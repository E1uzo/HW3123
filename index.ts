function findElement<T>(array: T[], target: T): number {
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

function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const person1 = { name: 'Alice', age: 30 };
const person2 = { age: 25, city: 'New York' };
const mergedPerson = mergeObjects(person1, person2);
console.log(mergedPerson);