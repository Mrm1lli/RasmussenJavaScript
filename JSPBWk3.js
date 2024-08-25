// Task 1: For loop that counts from 0 to 10 and checks if the number is odd or even
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        document.write("Count " + i + " is even<br>");
    } else {
        document.write("Count " + i + " is odd<br>");
    }
}

// Task 2: Ask the user for a number between 5 and 20 and store it in the variable myNum
let myNum = 0;

do {
    myNum = prompt("Please enter a number between 5 and 20:");
    myNum = parseInt(myNum);
} while (isNaN(myNum) || myNum < 5 || myNum > 20);

// Do While loop to display the loop counter until it equals myNum
let counter = 1;
do {
    document.write("Loop Counter: " + counter + "<br>");
    counter++;
} while (counter <= myNum);

// Task 3: Store subjects in an array and display them
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Display the array values in a readable format using forEach
document.write("<br>Subjects List:<br>");
subjects.forEach(function(subject) {
    document.write(subject + "<br>");
});

// Display the array values separated by commas using one statement
document.write("<br>Subjects: " + subjects.join(", "));
