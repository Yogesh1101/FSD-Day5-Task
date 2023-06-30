//For the given json iterate over all for loops (for, for in, for of, forEach)

const arr = ['Apple', 'Banana', 'Pineapple', 'Watermelon'];

console.log('for loop : ');
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

const obj = {
    name : 'Yogesh Kumar J R',
    age : 21,
    DoB : '11.01.2002',
    city : 'Madurai'
};

console.log('\nfor-in loop : ');
for(let key in obj){
    console.log(key + ' :', obj[key]);
}

console.log('\nfor-of loop : ');
for(let element of arr){
    console.log(element);
}

console.log('\nforEach loop : ');
arr.forEach((element) => {
    console.log(element);
})