const names = ['abul','babul', 'cabul', 'dabul', 'ebul','babul', 'cabul', 'dabul', 'habul', 'nabul' ];


function removeDuplicateNames(names){
    const unique = [];
    for(let i=0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicateNames(names);
console.log(uniqueNames);