
// function manualSort(arr) {
//     let n = arr.length;
   
//     for (let i = 0; i < n - 1; i++) {
       
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
                
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }


// let numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// let sortedNumbers = manualSort(numbers);
// console.log(sortedNumbers);


// function manualFilter(arr, threshold) {
//     let filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= threshold) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }


//  numbers = [3, 8, 1, 6, 2, 10, 5];
// let threshold = 5;
// let filteredNumbers = manualFilter(numbers, threshold);
// console.log(filteredNumbers);  

function countCharacters(str) {
    const charCount = {}; // ობიექტი, სადაც შევინახავთ ასოებს და მათ რაოდენობას

    // გადავდივართ სტრინგში თითოეულ სიმბოლოზე
    for (let char of str) {
        // თუ სიმბოლო ჯერ არ არსებობს ობიექტში, მას დავამატებთ და გადავცემთ რაოდენობა 1-ს
        if (charCount[char]) {
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount; // ვაბრუნებთ შედეგს
}

// გამოსვლის მაგალითი
const result = countCharacters("აბბა");
console.log(result);  // შედეგი: { ა: 2, ბ: 2 }
