

// 1. Check if a number is even or odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} არის ლუწი.`);
    } else {
        console.log(`${number} არის კენტი.`);
    }
}

// 2. 
function sumOfList(numbers) {
    if (numbers.length === 0) {
        console.log("სია ცარიელია.");
    } else {
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        console.log(`რიცხვების ჯამი: ${sum}`);
    }
}

// 3.
function multiplyAndFilter(numbers) {
    return numbers.map(num => num * 3).filter(num => num > 20);
}


// 4. 
function findMax(numbers) {
    if (numbers.length === 0) {
        console.log("სია ცარიელია.");
        return;
    }
    const max = Math.max(...numbers);
    console.log(`უდიდესი რიცხვი: ${max}`);
}

// 5. 
function checkProductGreaterThan100(num1, num2) {
    if (num1 * num2 > 100) {
        console.log(`ნამრავლი ${num1 * num2} მეტია 100-ზე.`);
    } else {
        console.log(`ნამრავლი ${num1 * num2} ნაკლებია ან უტოლოა 100-ზე.`);
    }
}



// 6. 
function checkFirstAndLastCharacter(text) {
    if (text.charAt(0) === text.charAt(text.length - 1)) {
        console.log(`პირველი და ბოლო ასოები ერთმანეთს ემთხვევა: '${text.charAt(0)}'`);
    } else {
        console.log("პირველი და ბოლო ასოები არ ემთხვევა.");
    }
}

// 7. 
function characterFrequency(text) {
    const frequency = {};
    for (const char of text) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}



// 8. 
function isPalindrome(text) {
    const normalizedText = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedText = normalizedText.split('').reverse().join('');
    if (normalizedText === reversedText) {
        console.log(`"${text}" არის პალინდრომი.`);
    } else {
        console.log(`"${text}" არ არის პალინდრომი.`);
    }
}

