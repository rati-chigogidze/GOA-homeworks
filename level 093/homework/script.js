// 1. 5-ელემენტიანი მთელი რიცხვების მასივი და გამოტანა მე-2 და მე-4 ინდექსზე მყოფი ელემენტები
let numbers = [10, 20, 30, 40, 50];
console.log("2nd Index Element:", numbers[2]); // 30
console.log("4th Index Element:", numbers[4]); // 50

// 2. შემოგდით N - შესატანი რიცხვების რაოდენობა, შემდეგ კი N ცალი რიცხვი
let N = parseInt(prompt("შეიყვანეთ რიცხვების რაოდენობა N:"));
let arr = [];
for (let i = 0; i < N; i++) {
    arr.push(parseInt(prompt(`შეიყვანეთ რიცხვი ${i + 1}:`)));
}

// გამოტანა კენტ ინდექსებზე მყოფი ელემენტები (a[1], a[3], a[5]...)
console.log("კენტ ინდექსებზე მყოფი ელემენტები:");
for (let i = 1; i < N; i += 2) {
    console.log(arr[i]);
}

// 3. 10 ელემენტიანი მთელი რიცხვების მასივის შეყვანა და მათი გაორმაგება
let tenNumbers = [];
for (let i = 0; i < 10; i++) {
    tenNumbers.push(parseInt(prompt(`შეიყვანეთ რიცხვი ${i + 1}:`)));
}

// გაორმაგება და გამოტანა
console.log("გაორმაგებული რიცხვები:");
for (let i = 0; i < 10; i++) {
    tenNumbers[i] *= 2;
    console.log(tenNumbers[i]);
}

// 4. N რიცხვის შეყვანა და მასივის შებრუნებული გამოტანა
let NReverse = parseInt(prompt("შეიყვანეთ რიცხვების რაოდენობა N:"));
let reverseArr = [];
for (let i = 0; i < NReverse; i++) {
    reverseArr.push(parseInt(prompt(`შეიყვანეთ რიცხვი ${i + 1}:`)));
}

// გამოტანა შებრუნებული თანმიმდევრობით
console.log("შებრუნებული რიცხვები:");
for (let i = NReverse - 1; i >= 0; i--) {
    console.log(reverseArr[i]);
}

// 5. N რიცხვის შეყვანა და პირველ და ბოლო ელემენტის გაცვლა
let NSwap = parseInt(prompt("შეიყვანეთ რიცხვების რაოდენობა N:"));
let swapArr = [];
for (let i = 0; i < NSwap; i++) {
    swapArr.push(parseInt(prompt(`შეიყვანეთ რიცხვი ${i + 1}:`)));
}

// პირველი და ბოლო ელემენტის გაცვლა
let temp = swapArr[0];
swapArr[0] = swapArr[NSwap - 1];
swapArr[NSwap - 1] = temp;

// გამოტანა ახალი მასივი
console.log("მასივი შემდეგი გაცვლის შემდეგ:");
console.log(swapArr);
