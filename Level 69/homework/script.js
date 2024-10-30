// 1
console.log("Exercise Set 1:");
const array1 = [1, 2, 3, 4, 5];
console.log(array1.length); 
console.log(array1.toString()); 
console.log(array1.at(1)); 
console.log(array1.join('-')); 
array1.push(6, 7); 
console.log(array1); 
array1.pop(); 
console.log(array1); 
console.log();
// 2
console.log("Exercise Set 2:");
const array2 = [10, 20, 30, 40];
array2.shift(); 
console.log(array2); 
array2.unshift(5); 
console.log(array2); 
delete array2[1]; 
console.log(array2); 
const array3 = [50, 60]; 
const combinedArray = array2.concat(array3);
console.log(combinedArray); 
console.log(array2.unshift(1)); 
console.log(array2); 
console.log();
// 3
console.log("Exercise Set 3:");
const repeatedArray = [1, 2, 3, 2, 1];
console.log(repeatedArray.indexOf(2)); 
console.log(repeatedArray.lastIndexOf(2)); 
console.log(repeatedArray.includes(3)); 
console.log(repeatedArray.indexOf(4)); 
const caseArray = ["hello", "Hello"]; 
console.log(caseArray.includes("hello")); 
console.log(caseArray.includes("Hello")); 
console.log();
// 4
console.log("Exercise Set 4:");
const stringArray = ["banana", "apple", "cherry"];
console.log(stringArray.sort()); 
const numberArray = [5, 1, 4, 2, 3];
console.log(numberArray.sort((a, b) => a - b)); 
const descendingArray = [5, 1, 4, 2, 3];
console.log(descendingArray.sort((a, b) => b - a)); 
const reversedArray = [1, 2, 3, 4, 5];
console.log(reversedArray.reverse()); 
const mixedArray = [3, 1, 4, 2];
console.log(mixedArray.sort().reverse()); 
console.log();
// 5
console.log("Exercise Set 5:");
const numbersArray = [3, 1, 4, 2];
numbersArray.sort((a, b) => a - b); 
numbersArray.push(5); 
console.log(numbersArray); 
const arrayA = [3, 1];
const arrayB = [4, 2];
const mergedArray = arrayA.concat(arrayB).sort((a, b) => a - b); 
console.log(mergedArray); 
const reverseArray = [1, 2, 3];
reverseArray.push(4, 5, 6); 
console.log(reverseArray.reverse()); 
const removeArray = [10, 20, 30];
const indexToRemove = removeArray.indexOf(20); 
if (indexToRemove !== -1) {
    removeArray.splice(indexToRemove, 1); 
}
console.log(removeArray); 
const joinArray = ["apple", "banana", "cherry"];
const joinedString = joinArray.join(", "); 
const splitArray = joinedString.split(", ");
console.log(splitArray.includes("banana")); 
