// შექმნათ მასივი ნივთების
const items = ['apple', 'banana', 'carrot', 'dog', 'elephant'];

// შევქმნათ ახალი მასივი, სადაც თითოეული ელემენტი იქნება ობიექტი
// და მასში key იქნება ინდექსი, ხოლო value - ნივთი
const objectsArray = items.map((item, index) => {
    let obj = {};
    obj[index] = item;
    return obj;
});

// გამოტანა
console.log(objectsArray);
