function getUniqueElements(matrix) {
    const flatArray = matrix.flat(); // 2D მატრიცა ვაქციეთ 1D მასივად
    const frequencyMap = {}; // სიხშირეების მაგიდა

    // გავავლოთ ყველა ელემენტი და დავსვათ სიხშირე
    flatArray.forEach(element => {
        frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    });

    // შეარჩიეთ მხოლოდ ის ელემენტები, რომლებიც მხოლოდ ერთხელ არიან
    const uniqueElements = flatArray.filter(element => frequencyMap[element] === 1);

    return uniqueElements;
}

// ტესტირება:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 1, 3]
];

console.log(getUniqueElements(matrix)); // [2, 4, 5, 6, 7]
