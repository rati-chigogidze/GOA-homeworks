function count_area(shape, ...dimensions) {
    if (shape === 'rectangle') {
        const [length, width] = dimensions;
        return length * width;
    } else if (shape === 'circle') {
        const [radius] = dimensions;
        return Math.PI * radius * radius;
    } else if (shape === 'triangle') {
        const [base, height] = dimensions;
        return 0.5 * base * height;
    } else {
        return "Invalid shape!";
    }
}

console.log(count_area('rectangle', 5, 10));  // 50
console.log(count_area('circle', 7));         // 153.93804002589985
console.log(count_area('triangle', 4, 8));    // 16
