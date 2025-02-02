function manualFilter(arr, number) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        // თუ ელემენტი მოცემული რიცხვისგან უფრო დიდი ან გათანაბრებულია
        if (arr[i] >= number) {
            result.push(arr[i]);
        }
    }
    
    return result;
}

// მაგალითი:
const numbers = [5, 2, 9, 1, 5, 6];
const threshold = 5;
console.log(manualFilter(numbers, threshold));  // შედეგი: [5, 9, 5, 6]
