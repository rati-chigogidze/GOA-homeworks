let character = {
    name: "Thor",
    age: 1500, 
    house: "Asgard", 
    height: "1.91", 
    power: "God of thunder" 
};


console.log(character.name); 
console.log(character.age); 
console.log(character.house); 
console.log(character.height); 
console.log(character.power);


character.age = 1501; 
character.house = "Earth"; 


console.log(character);

character.enemy = "Thanos"; 
delete character.height; 


console.log(character);


// ობიექტი არის ის რაც არის ჩვენს გარშემო და ჩვენ მას ვხედავთ და ვეხებით

