// 1. მანუალური სორტირების ფუნქცია
function manualSort(arr, order = 'ascending') {
    if (order === 'ascending') {
        arr.sort((a, b) => a - b);
    } else if (order === 'descending') {
        arr.sort((a, b) => b - a);
    }
    return arr;
}

// 2. მანუალური ფილტრის ფუნქცია
function manualFilter(arr, threshold) {
    return arr.filter(item => item >= threshold);
}

// მაგალითი: მანუალური სორტირება და ფილტრაცია

// ცალკე მასივები
let numbers = [25, 10, 50, 35, 15, 5, 45, 30];

// სორტირება ზრდის მიხედვით
let sortedAscending = manualSort([...numbers], 'ascending');
console.log("Sorted Ascending:", sortedAscending);

// სორტირება შემცირების მიხედვით
let sortedDescending = manualSort([...numbers], 'descending');
console.log("Sorted Descending:", sortedDescending);

// ფილტრი, რომელიც ინარჩუნებს მხოლოდ რიცხვებს, რომლებიც მეტია ან ტოლია 30-ს
let filteredNumbers = manualFilter(numbers, 30);
console.log("Filtered Numbers (>= 30):", filteredNumbers);
