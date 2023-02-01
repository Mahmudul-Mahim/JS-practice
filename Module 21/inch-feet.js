function inchToFeet(inches){
    const feet = inches/ 12;
    return feet;
}
const myInches = 144;
const myFeet = inchToFeet(myInches);
console.log(myFeet);

const hisInches = 166;
const hisFeet = inchToFeet(hisInches);
console.log(hisFeet);