// *console log version

function leapYear(year){
    var remainder = year % 4;
    if (remainder === 0 ){
        console.log('Leap Year:' , year);
    }
    else{
        console.log('Not Leap Year:', year);
    }
}
 
var thisYear = leapYear(2020);

// *return version

function leapYear(year){
    var remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
var thisYear = leapYear(2023);
console.log(thisYear);

// *shorter version

function leapYear(year){
    var remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    return false;
}
var thisYear = leapYear(2020);
console.log('the year is leap:', thisYear); 