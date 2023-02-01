// function isEven(number){
//     const remainder = number % 2;
//     if( remainder === 0){
//         console.log('the number is even');
//     }
//     else{
//         console.log('the number is odd');
//     }
// }
// isEven(100);
// isEven(201);

function isEven(number){
    const remainder = number % 2;
    if( remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const myNumberIsEven =isEven(100);
console.log(myNumberIsEven);
const herNumberIsEven = isEven(201);
console.log(herNumberIsEven);
