// var num1 = 13;
// var num2 = 79;
// var num3 = 45;



// if(num1 >= num2 && num1 >= num3){
//     console.log(79);
// }
// else if(num2 >= num3 && num2 >= num1){
//     console.log(79);
// }
// else if(num3 >= num2 && num3 >= num1){
//     console.log(79);
// }
// else{
//     console.log('nothing');
// }
// *triangle 

var angle1 = 9;
var angle2 = 8;
var angle3 = 9;

if( angle1 == angle2 == angle3){
    console.log('notIsosceles');
}
else if( angle1==angle2 || angle1==angle3 || angle2==angle3 ){
    console.log('Isoscale');
}
else{
    console.log('notIsosceles');
}