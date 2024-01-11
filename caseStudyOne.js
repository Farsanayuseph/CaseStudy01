// CASE STUDY - 01
// Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 
var array_1 = [2,0,1, 2, 3, 4, 5,"name"];
var first_element = array_1[0];
console.log("The first element in the array is",first_element);

if (typeof (first_element) != "number") {
    console.log(first_element ,"is not number,hence cannot determine")

}
// if the first element is 0 or 1
else if (first_element === 0 || first_element === 1) {
    console.log(first_element,"is neither Prime nor composite");
}

// for other numbers
else if (first_element > 1) {
    let count = 0
    for (i = 2; i < first_element; i++) {
        if (first_element % i == 0)
            count = count + 1;
    }

    if (count == 0) {
        console.log(first_element,"is a Prime number");
    }
    else {
        console.log(first_element,"is not a Prime number")
    }
}

// Write a JavaScript program to find the most frequent item of an array
var array_2 = [13,3, 4, 8, 1,13];

let max = 0;
let frequent_element
for (let i = 0; i < array_2.length; i++) {
    let count = 0;
    for (let j = 0; j < array_2.length; j++) {
        if (array_2[i] === array_2[j]) {
            count++;
        }
    }
    if (count > max) {
        max = count;
        frequent_element = array_2[i];
    }
}
console.log("The most frequent element in an array is", frequent_element);

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is 
// odd or even, and display the message to the screen as odd or even.

var start = 0;
var end = 15;
for (let i = start;i<=end;i++){
    if(i%2 == 0){
        console.log("The number",i,"is even")
    }
    else{
        console.log("The number",i,"is odd")
    }
}

// Write a JavaScript program to find the sum of squares of the elements of an array.

var array_3=[2,3,4,5];
let sum=0;
let square_of_element;
for(let i=0;i<array_3.length;i++){
    square_of_element= array_3[i] ** 2;
    sum=sum+square_of_element;
}
console.log("The sum of the squares of the elements in the array", array_3, "is",sum);