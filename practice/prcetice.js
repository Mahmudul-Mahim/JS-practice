var fruits = ['Apple', 'Banana', 'Orange'];

console.log(fruits.indexOf('Banana'));
fruits[1] = 'Mango'
console.log(fruits);

var removeFruit = fruits.pop('Orange');
console.log(removeFruit);
console.log(fruits);

var moreFruit = fruits.push('Watermelon');
console.log(moreFruit);
console.log(fruits);