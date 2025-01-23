// 1. 
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// 2. 
function add_numbers(num1, num2 = 0) {
    return num1 + num2;
}

// 3. 
function calculate_area(length, width = 1) {
    return length * width;
}

// 4. 
function convert_temperature(temperature, scale = "C") {
    if (scale === "C") {
        return (temperature * 9/5) + 32; // Convert to Fahrenheit
    } else {
        return (temperature - 32) * 5/9; // Convert to Celsius
    }
}

// 5. 
function add_to_shopping_list(item, quantity = 1) {
    return `Item: ${item}, Quantity: ${quantity}`;
}