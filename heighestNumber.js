// function maxInArray(numbers){
//     let largest = numbers[0];
//     for(let i = 0; i < numbers.length; i++){
//         const index = i;
//         const elements = numbers[index];
//         if(elements> largest){
//             largest = elements;
//         } 
//     }
//     return largest;
// }
// const numbers =[ 160, 120, 182, 169, 200];
// const tallest = maxInArray(numbers);
// console.log('tallest person is:', tallest);





function maxInArray(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const elements = numbers[index];
        if(elements < smallest){
            smallest = elements;
        } 
    }
    return smallest;
}
const numbers =[ 160, 120, 182, 169, 200];
const smaller = maxInArray(numbers);
console.log('smaallest person is:', smaller);