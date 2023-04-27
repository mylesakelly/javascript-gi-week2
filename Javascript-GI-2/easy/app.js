// Create an array of students holding their last name, first name, and age with 3 students. 
// To validate, please log a greeting with the first name, last name and age of the 2nd student. 
//The output should look like "Hello, my name is John Doe and I'm 19 years old.

const studentInfo = [
    ["Beyonce"], ["Knowles"], [41],  //0, 1, 2
["Solange"], ["Knowles"], [36], //3, 4, 5
["Jay"], ["Z"], [53] //6, 7, 8
];

function Greeting(greet) { //function greeting
    return greet + (`my name is ${studentInfo[3]} ${studentInfo[4]} and I'm ${studentInfo[5]} years old.`);
} //return statement should be string with Solange Knowles information

console.log(Greeting('Hello, ')); //string with the return from the function 




