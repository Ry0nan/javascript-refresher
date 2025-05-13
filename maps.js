const myMap = new Map();
const numberMap = new Map([1, 'one,'], [2, 'two']);

myMap.set(4, 'four')
myMap.delete(4)
myMap.get(1)
myMap.has(1)

for (const values of myMap.values()) {

}

myMap.clear()