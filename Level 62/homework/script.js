// 1. 
function multiply() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    return num1 * num2;
}

// 2. 
function subtract() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    return num1 - num2;
}

// 3. 
function divide() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return num1 / num2;
}

// 4. 
function fullName() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    return `${firstName} ${lastName}`;
}

// 5. 
function minutesToSeconds() {
    const minutes = parseFloat(prompt("Enter the number of minutes:"));
    return minutes * 60;
}


console.log("Product:", multiply());
console.log("Difference:", subtract());
console.log("Quotient:", divide());
console.log("Full Name:", fullName());
console.log("Seconds:", minutesToSeconds());
